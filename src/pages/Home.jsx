import React from "react";
import { Header, Recipes } from "../components";

const Home = () => {
  return (
    <main className=" -full flex flex-col ">
      <Header
        title={
          <p>
            Teste the world with <br /> TastyPalate
          </p>
        }
        type="home"
      />
      <section className="md:max-w-[1440px] mx-auto px-4 md:px-20" id="recipes">
        <Recipes />
      </section>
    </main>
  );
};

export default Home;
