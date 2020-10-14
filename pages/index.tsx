import React, { ReactElement } from "react";
import { useDispatch } from "react-redux";
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
import { StyleSheet } from "aphrodite";

declare global {
  interface Window {
    __REHYDRATE_IDS: string[];
  }
}

// Rehydrate to ensure that the client doesn't duplicate styles
// It has to execute before any code that defines styles
// '__REHYDRATE_IDS' is set in '_document.js'
if (typeof window !== "undefined") {
  StyleSheet.rehydrate(window.__REHYDRATE_IDS);
}

export default function Home(): ReactElement {
  const dispatch = useDispatch();
  return (
    <div className="page new-skin">
      <Preloader />
      <Background />
      <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <Header onMenuBtnClick={() => dispatch(showSidebar("MainSidebar"))} />
        <Started />
        <AboutMe />
        <Resume />
        <Works />
        <Blog />
        <ContactsCard />
      </div>
      <MainSidebar />
      <div id="sidebar-container" />
    </div>
  );
}
