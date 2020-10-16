import { css, StyleSheet } from "aphrodite";
import React, { ReactElement, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Background from "../components/background";
import AboutMe from "../components/cards/about-me";
import Blog from "../components/cards/blog";
import ContactsCard from "../components/cards/contacts";
import Resume from "../components/cards/resume";
import Works from "../components/cards/works";
import Header from "../components/header";
import MainSidebar from "../components/main-sidebar";
import Preloader from "../components/preloader";
import Started from "../components/started";
import { showSidebar } from "../redux/actions";

declare global {
  interface Window {
    __REHYDRATE_IDS: string[];
  }
}

const styles = StyleSheet.create({
  slideEnter: {
    transform: "translateX(-500px)",
    opacity: 0,
  },
  slideEnterActive: {
    transform: "translateX(0)",
    opacity: 1,
    transition: "all 500ms",
  },
  slideExit: {
    transform: "translateX(0)",
    opacity: 1,
  },

  slideExitActive: {
    transform: "translateX(-500px)",
    opacity: 0,
    transition: "all 500ms linear",
  },
});

// Rehydrate to ensure that the client doesn't duplicate styles
// It has to execute before any code that defines styles
// '__REHYDRATE_IDS' is set in '_document.js'
if (typeof window !== "undefined") {
  StyleSheet.rehydrate(window.__REHYDRATE_IDS);
}

const CARDS = [
  { n: "about-card", c: <AboutMe /> },
  { n: "resume-card", c: <Resume /> },
  { n: "works-card", c: <Works /> },
  { n: "blog-card", c: <Blog />, cl: "blog" },
  { n: "contacts-card", c: <ContactsCard />, cl: "contacts" },
];

export default function Home(): ReactElement {
  const dispatch = useDispatch();
  const [activeCard, setActiveCard] = useState("about-card");
  const TRANSITION_CLASSNAMES = useMemo(
    () => ({
      enter: css(styles.slideEnter),
      enterActive: css(styles.slideEnterActive),
      exit: css(styles.slideExit),
      exitActive: css(styles.slideExitActive),
    }),
    []
  );
  return (
    <div className="page new-skin">
      <Preloader />
      <Background />
      <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <Header
          onMenuBtnClick={() => dispatch(showSidebar("MainSidebar"))}
          onActiveCard={(id: string) => {
            setActiveCard(id.substr(1));
          }}
        />
        <Started />
        {CARDS.map((o) => (
          <CSSTransition in={o.n === activeCard} timeout={500} unmountOnExit classNames={TRANSITION_CLASSNAMES}>
            <div key={o.n} className="card-inner active" id={o.n}>
              {o.c}
            </div>
          </CSSTransition>
        ))}
      </div>
      <MainSidebar />
      <div id="sidebar-container" />
    </div>
  );
}
