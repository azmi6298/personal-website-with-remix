import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import Journey from "~/components/Journey";
import MainContainer from "~/components/MainContainer";
import NavigationBar from "~/components/NavigationBar";
import WorkExperience from "~/components/WorkExperience";

export const meta: MetaFunction = () => {
  return [
    { title: "Andini | @rasandini" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <NavigationBar />
      <MainContainer>
        <Hero />
        <WorkExperience />
      </MainContainer>
    </>
  );
}
