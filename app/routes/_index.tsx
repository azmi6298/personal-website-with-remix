import type { MetaFunction } from "@remix-run/node";
import Contact from "~/components/Contact";
import Hero from "~/components/Hero";
import Journey from "~/components/Journey";
import MainContainer from "~/components/MainContainer";
import NavigationBar from "~/components/NavigationBar";
import WorkExperience from "~/components/WorkExperience";

export const meta: MetaFunction = () => {
  return [
    { title: "Andini | @rasandini" },
    {
      name: "description",
      content: "Hey, welcome to my little corner!👋💭😆",
    },
  ];
};

export default function Index() {
  return (
    <>
      <NavigationBar />
      <MainContainer>
        <Hero />
        <WorkExperience />
        <Journey />
        <Contact />
      </MainContainer>
    </>
  );
}
