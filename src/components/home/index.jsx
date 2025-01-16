import React from "react";
import { Header36 } from "./components/Header36";
import { Layout12 } from "./components/Layout12";
import { Layout117 } from "./components/Layout117";
import { Layout240 } from "./components/Layout240";
import { Layout238 } from "./components/Layout238";
import { Testimonial1 } from "./components/Testimonial1";
import { Cta7 } from "./components/Cta7";

export default function Home() {
  return (
    <div className="w-full">
      <Header36 />
      <Layout12 />
      <Layout117 />
      <Layout240 />
      <Layout238 />
      <Testimonial1 />
      <Cta7 />
    </div>
  );
}
