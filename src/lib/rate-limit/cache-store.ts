type cacheItem = {
    timestamp: number;
    count: number;
}
const cacheStore = new Map<string, cacheItem>();

export function getCacheItem(key: string): cacheItem | undefined {
    return cacheStore.get(key);
}

export function setCacheItem(key: string, item: cacheItem) {
    cacheStore.set(key, item);
}

export function deleteCacheItem(key: string) {
    cacheStore.delete(key);
}


