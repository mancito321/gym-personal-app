import { getCacheItem, setCacheItem, deleteCacheItem } from "./cache-store";
import { NextRequest } from "next/server";

const DEFAULT_MAX_REQUESTS = 200;
const DEFAULT_WINDOW_MS = 60_000;

function readPositiveInt(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function getRateLimitConfig() {
  return {
    maxRequests: readPositiveInt(
      process.env.RATE_LIMIT_MAX_REQUESTS,
      DEFAULT_MAX_REQUESTS,
    ),
    windowMs: readPositiveInt(
      process.env.RATE_LIMIT_WINDOW_MS,
      DEFAULT_WINDOW_MS,
    ),
  };
}

function incrementCacheItem(key: string) {
  const item = getCacheItem(key);
  if (item) {
    item.count++;
  } else {
    setCacheItem(key, { timestamp: Date.now(), count: 1 });
  }
}

export function rateLimit(request: NextRequest) {
  const key = request.headers.get("x-forwarded-for") || "";
  const { maxRequests, windowMs } = getRateLimitConfig();
  const item = getCacheItem(key);
  console.log("item in rate limit", key, item);
  const currentTime = Date.now();
  if (item) {
    if (item.timestamp + windowMs > currentTime && item.count >= maxRequests) {
      return false;
    } else if (item.timestamp + windowMs <= currentTime) {
      deleteCacheItem(key);
    }
  }
  incrementCacheItem(key);
  return true;
}
