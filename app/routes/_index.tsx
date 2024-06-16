import type { MetaFunction } from "@remix-run/node";
import AboutMe from "~/components/AboutMe";
import Contact from "~/components/Contact";
import Hero from "~/components/Hero";
import Journey from "~/components/Journey";
import WorkExperience from "~/components/WorkExperience";
import Layout from "~/components/layout/Layout";

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
      <Layout>
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Journey />
        <Contact />
      </Layout>
    </>
  );
}
