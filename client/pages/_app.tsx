import { AppProps } from "next/app";
import * as React from 'react'

import "./global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default App;