import type { MetaFunction } from "@remix-run/node";
import About from "~/sections/about/About";
import Banner from "~/sections/banner/Banner";
import BestCoursesContainer from "~/sections/best courses/BestCoursesContainer";
import CounterContainer from "~/sections/counter/CounterContainer";
import Events from "~/sections/events/Events";
import FavTopicContainer from "~/sections/favTopics/FavTopicContainer";
import MentorContainer from "~/sections/mentor/MentorContainer";
import Navbar from "~/sections/navbar/Navbar";
import Service from "~/sections/service/Service";

export const meta: MetaFunction = () => {
  return [
    { title: "educAct" },
    { name: "description", content: "best place to learn" },
  ];
};

export default function Index() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <FavTopicContainer/>
      <CounterContainer />
      <BestCoursesContainer/>
      <Events/>
      <MentorContainer/>
    </>
  );
}


