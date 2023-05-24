import React from "react";
import DynamicHeader from "../components/DynamicHeader";
import TesterComponent from "../components/testerComponent";
import ArticlesComponent from "../components/ArticlesComponent";
export default function Home() {
  return (
    <div className="Home">
      <DynamicHeader header_1_text="Minimal blog template for creative expressions" header_2_text="100% customisable and SEO-friendly blog template for personal and commercial purposes." />
      <TesterComponent />
      <div className="homePageComponent">
        <ArticlesComponent containerHeader="Daily Digest"
        />
        <ArticlesComponent containerHeader="DesignTools" />
        <ArticlesComponent containerHeader="Tutorials" />
      </div>
    </div>
  )
}
