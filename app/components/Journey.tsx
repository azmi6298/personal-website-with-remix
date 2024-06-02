import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./carousel/Carousel";
import JOURNEY from "utils/constant/journey";

export default function Journey() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <section
      className="snap-start container mx-auto flex flex-col xl:flex-row items-center justify-center lg:min-h-screen gap-8 py-16 lg:py-0"
      id="journey-section"
    >
      <div className="flex flex-col items-center xl:items-start gap-y-8 xl:gap-y-16 *:text-center *:xl:text-start">
        <span className="section-title">Journey</span>
        <p className="text-sm lg:text-2xl xl:text-xl">
          Step into my world of work through these images. Each one represents a
          milestone in my path, showcasing the skills and experiences I've
          gained along the way. Let’s dive in!
        </p>
      </div>
      <Carousel slides={JOURNEY} options={OPTIONS} />
    </section>
  );
}
