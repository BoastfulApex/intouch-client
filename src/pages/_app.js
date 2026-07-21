import { useEffect } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import { store } from "@/store/index";
 
import "nprogress/nprogress.css";
import "@/styles/globals.scss";
import Header from "@/components/Header/Header";
import { initLenis } from "@/lib/lenis";
import Footer from "@/components/Footer/Footer";
import Popups from "@/components/Popups/Index";
import Preloader from "@/components/Preloader/Preloader";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   initLenis();
  // }, []);

  return (
    <Provider store={store}>
      <div className="wrapper">
        <Preloader />
        <Header />
        <main className="main">
          <Component {...pageProps} />
        </main>
        <Popups />
        <Footer />
      </div>
    </Provider>
  );
}