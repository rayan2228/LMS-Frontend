import type { MetaFunction } from "@remix-run/node";
import About from "~/sections/about/About";
import Banner from "~/sections/banner/Banner";
import Navbar from "~/sections/navbar/Navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "educAct" },
    { name: "description", content: "best place to learn" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
    </>
  );
}


