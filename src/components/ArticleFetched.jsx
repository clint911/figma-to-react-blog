import React from "react";
import { json } from "react-router-dom";

export default function ArticleFetched() {
  //handles the fetching of json data from the data directory returns a json object that holds the data
  async function fetchArticle() {
    let fetchedArticle = await fetch("../data/mockingServer.json");
    console.log(fetchedArticle);
  }
}

