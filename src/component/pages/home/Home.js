import React, { useEffect } from "react";
import PostComponent from "../../comman/PostComponent";
import Banner from "./Banner";
import FearturesRelatedProducts from "./FearturesRelatedProducts";
import Homecarousel from "./Homecarousel";
import HomeCategory from "./HomeCategory";

function Home() {
  useEffect(() => {
    window.location.hash = "home";
  });
  return (
    <div>
      <Homecarousel />
      <br />
      <HomeCategory />

      <FearturesRelatedProducts />
      <Banner></Banner>
      <PostComponent title="From the Blog"></PostComponent>
    </div>
  );
}

export default Home;
