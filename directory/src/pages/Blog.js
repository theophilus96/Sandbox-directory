import React from "react";
import Footer from "../components/Footer";
import BlogHeader from "../components/BlogHeader";
import BlogArticle from "../components/BlogArticle";
import AddBlog from "../components/AddBlog";
import { useStateValue } from "../state/StateProvider";

export default function Blog() {
  const [{ user }] = useStateValue();
  return (
    <div>
      <BlogHeader />
      <BlogArticle />
      {user ? <AddBlog /> : null}
      <Footer />
    </div>
  );
}
