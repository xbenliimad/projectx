import React from "react";
// import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar/NavBar";
import { Hero } from "@/components/Hero/Hero";
import Challenges from "@/components/Challenges/Challenges";
import Feature from "@/components/Feature/Feature";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Challenges />
      <Feature />
    </>
  );
};

export default Home;
