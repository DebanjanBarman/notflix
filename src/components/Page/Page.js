import React from "react";
import Header from "../Header/Header";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import styles from "./Page.module.css";

export default function Page() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}