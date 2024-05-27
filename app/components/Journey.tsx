import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./carousel/Carousel";
import JOURNEY from "utils/constant/journey";

export default function Journey() {
  const OPTIONS: EmblaOptionsType = { loop: true };

  return (
    <section
      className="snap-start container mx-auto flex items-center justify-center min-h-screen gap-4"
      id="journey-section"
    >
      <div className="flex flex-col gap-y-16">
        <span className="text-4xl font-semibold">Journey</span>
        <p className="text-xl">
          Step into my world of work through these images. Each one represents a
          milestone in my path, showcasing the skills and experiences I've
          gained along the way. Let’s dive in!
        </p>
      </div>
      <Carousel slides={JOURNEY} options={OPTIONS} />
    </section>
  );
}
