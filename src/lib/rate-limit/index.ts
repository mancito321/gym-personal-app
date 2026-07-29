//main funciton this

import { getCacheItem, setCacheItem, deleteCacheItem } from './cache-store';
import { NextRequest } from 'next/server';

function incrementCacheItem(key: string) {
    const item = getCacheItem(key);
    if (item) {
        item.count++;
    } else {
        setCacheItem(key, { timestamp: Date.now(), count: 1 });
    }
}

export function rateLimit(request: NextRequest) {
    const key = request.headers.get('x-forwarded-for') || '';
    const maxRequests = 5;
    const duration = 3000;
    const item = getCacheItem(key);
    console.log('item in rate limit', key, item);
    const currentTime = Date.now();
    if (item) {
        if (item.timestamp + duration > currentTime && item.count >= maxRequests) {
            return false;
        } else if (item.timestamp + duration <= currentTime) {
            deleteCacheItem(key);
        }
    }
    incrementCacheItem(key);
    return true;
}