import type { MetaFunction } from "@remix-run/node";
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
    </>
  );
}


