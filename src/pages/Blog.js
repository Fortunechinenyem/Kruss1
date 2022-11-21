import React from "react";
import BlogFeat1 from "../components/BlogFeat1";
import BlogFeat2 from "../components/BlogFeat2";
import BlogFeat3 from "../components/BlogFeat3";
import BlogHero from "../components/BlogHero";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <div>
      <BlogHero />
      <BlogFeat1 />
      <BlogFeat2 />
      <BlogFeat3 />
      <Footer />
    </div>
  );
};

export default Blog;
