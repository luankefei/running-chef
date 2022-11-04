import getEntries from "./getEntries";

type KVObject = Record<string, unknown>;

// filter null or undefined
const filterNil = (obj: KVObject): any =>
  (getEntries(obj) as string[][]).filter(([, v]) => v != null);

const toHeaders = (headers: HeadersInit | KVObject) => {
  let params = null;
  if (headers instanceof Headers) params = headers;
  else if (Reflect.ownKeys(headers).length > 0)
    params = filterNil(headers as KVObject);
  else params = {};

  return new Headers(params);
};

export default toHeaders;
