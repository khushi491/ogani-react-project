import React, { useEffect } from "react";
import BreadCrumb from "../../comman/BreadCrumb";
import BlogContent from "./BlogContent";
import BlogSideBar from "./BlogSideBar";

function Blog() {
  useEffect(() => {
    window.location.hash = "blog";
  });
  return (
    <div>
      <BreadCrumb title="Blog"></BreadCrumb>

      <section className="blog spad">
        <div className="container">
          <div className="row">
            <BlogSideBar></BlogSideBar>
            <BlogContent></BlogContent>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
