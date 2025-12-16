import Preloader from "@/src/layouts/Preloader";
import "@/styles/globals.css";
import { Fragment } from "react";
const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
