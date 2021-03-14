import React from "react";
import Footer from "../components/Footer";
import BlogHeader from "../components/BlogHeader";
import BlogArticle from "../components/BlogArticle";
import AddBlog from "../components/AddBlog";

export default function Blog() {
  return (
    <div>
      <BlogHeader />
      <BlogArticle />
      <AddBlog />
      <Footer />
    </div>
  );
}
