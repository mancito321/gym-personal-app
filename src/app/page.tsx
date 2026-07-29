"use client";

import { useState } from "react";

type GetInfoApiResponse = {
  ok: boolean;
  data: {
    serverDateIso: string;
    serverTimestampMs: number;
  };
};

type RequestResult = {
  requestNumber: number;
  success: boolean;
  statusCode?: number;
  serverDateIso?: string;
  serverTimestampMs?: number;
  error?: string;
};

const REQUEST_COUNT = 7;

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<RequestResult[]>([]);

  async function callGetInfoSevenTimes() {
    setIsLoading(true);
    setResults([]);

    try {
      const calls = Array.from({ length: REQUEST_COUNT }, async (_, index) => {
        try {
          const response = await fetch("/api/getinfo", {
            method: "GET",
            cache: "no-store",
          });

          const payload = (await response.json()) as GetInfoApiResponse;

          return {
            requestNumber: index + 1,
            success: response.ok && payload.ok,
            statusCode: response.status,
            serverDateIso: payload.data?.serverDateIso,
            serverTimestampMs: payload.data?.serverTimestampMs,
          } satisfies RequestResult;
        } catch (error) {
          return {
            requestNumber: index + 1,
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
          } satisfies RequestResult;
        }
      });

      const settledResults = await Promise.all(calls);
      setResults(settledResults);
    } finally {
      setIsLoading(false);
    }
  }

  const successCount = results.filter((item) => item.success).length;
  const failureCount = results.length - successCount;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-6 px-6 py-12">
      <h1 className="text-2xl font-semibold">My Gym App - First Build</h1>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Click the button to call <code>/api/getinfo</code> 7 times in parallel.
      </p>

      <button
        type="button"
        onClick={callGetInfoSevenTimes}
        disabled={isLoading}
        className="w-fit rounded-md bg-black px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black"
      >
        {isLoading ? "Calling endpoint..." : "Call /api/getinfo 7 times"}
      </button>

      <div className="text-sm">
        <p>Total calls: {results.length}</p>
        <p>Success: {successCount}</p>
        <p>Failure: {failureCount}</p>
      </div>

      <ul className="space-y-2 text-sm">
        {results.map((result) => (
          <li
            key={result.requestNumber}
            className="rounded-md border border-zinc-200 p-3 dark:border-zinc-700"
          >
            <p>Request #{result.requestNumber}</p>
            <p>Status: {result.success ? "Success" : "Failed"}</p>
            {result.statusCode ? <p>HTTP: {result.statusCode}</p> : null}
            {result.serverDateIso ? <p>Server ISO: {result.serverDateIso}</p> : null}
            {result.serverTimestampMs ? (
              <p>Server Timestamp: {result.serverTimestampMs}</p>
            ) : null}
            {result.error ? <p>Error: {result.error}</p> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
