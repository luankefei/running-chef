import { isPlainObject } from "@reduxjs/toolkit";
import { Fetch } from "./createFetch";
import toHeaders from "./toHeaders";

/**
 * Stringify body
 */

// TODO: fetch options
const bodify =
  () =>
  (fetch: Fetch) =>
  async (url: string, { body, ...options }: any) => {
    const headers = toHeaders(options.headers);
    const contentType = "content-type";

    if (body instanceof URLSearchParams) {
      // polyfill for old browsers if needed.
    } else if (isPlainObject(body) || Array.isArray(body)) {
      body = JSON.stringify(body);
      if (headers.get(contentType) === null) {
        headers.set(contentType, "application/json");
      }
    }

    return await fetch(url, {
      ...options,
      body,
      headers: Object.fromEntries(headers),
    });
  };

export default bodify;
