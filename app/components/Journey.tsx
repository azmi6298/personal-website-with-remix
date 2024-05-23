import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./carousel/Carousel";
import JOURNEY from "utils/constant/journey";

export default function Journey() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <section className="flex flex-col gap-y-4 items-center h-screen justify-center">
      <span className="text-4xl font-semibold">Journey</span>
      <p className="text-xl">
        Step into my world of work through these images. Each one represents a
        milestone in my path, showcasing the skills and experiences I've gained
        along the way. Let’s dive in!
      </p>
      <Carousel slides={JOURNEY} options={OPTIONS} />
    </section>
  );
}
