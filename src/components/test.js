import React from "react";
import importedData from "../data/mockingServer.js";

async function getArticleData() {
  try {
    var response = await fetch(`importedData`);
  } catch (error) {
    /*
    return " oops! Looks like fetch does not work that way";
    */
    return error;
  }
  //parse the JSON baby
  const articleData = await response.json();
  //picking a specific data point, the first one in this place
  const article = articleData[0];
  console.log(article);
  return article;
}

let newArticle = await getArticleData();
console.log(newArticle);
