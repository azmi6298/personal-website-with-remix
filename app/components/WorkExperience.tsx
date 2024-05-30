import WORK_EXPERIENCE from "utils/constant/workExperience";
import Card from "./Card";

export default function WorkExperience() {
  return (
    <section
      className="snap-start scroll-mt-[72px] xl:scroll-mt-0 bg-accent-white *:text-on-primary py-16 xl:py-8"
      id="work-section"
    >
      <div className="container mx-auto flex flex-col items-center justify-center lg:min-h-screen gap-y-8 xl:gap-y-16">
        <span className="section-title">Work Experience</span>
        <div className="grid xl:grid-cols-3 gap-8">
          {WORK_EXPERIENCE.map((data) => (
            <Card
              key={data.label}
              label={data.label}
              subLabel={data.period}
              caption={data.description}
              image={`images/work-experience/${data.image}`}
            />
          ))}
        </div>
        <a
          href="https://drive.google.com/file/d/1e0v0Z5SWnpOot0Xsd3wL_q27p4GPHPjg/view"
          target="_blank"
          className="mt-4 animate-bounce p-4 outline-dashed outline-2 outline-on-primary rounded-full hover:font-semibold"
        >
          Click here for more
        </a>
      </div>
    </section>
  );
}
