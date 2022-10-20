// add universal-fetch polyfill if needed
import "cross-fetch/polyfill";
import React from "react";
import { composeFetch } from "../utils/createFetch";

const _fetch = composeFetch()(fetch);
const FetchContext = React.createContext(_fetch);

FetchContext.displayName = "FetchContext";

export { FetchContext, _fetch };

export default FetchContext;
