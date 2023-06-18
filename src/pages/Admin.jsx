import React from "react";
import BlogFormat from "../components/BlogFormat";
function AdminPage() {
  return (
    <div className="AdminPage">
      <h1>This is the page where you can create and delete articles</h1>
      <BlogFormat />
    </div>
  )
}

export default AdminPage;
