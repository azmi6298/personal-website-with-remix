import WORK_EXPERIENCE from "utils/constant/workExperience";
import Card from "./Card";

export default function WorkExperience() {
  return (
    <section
      className="snap-start flex flex-col items-center justify-center min-h-screen gap-y-16 bg-accent-white *:text-on-primary"
      id="work-section"
    >
      <span className="text-4xl font-semibold">Work Experience</span>
      <div className="container grid lg:grid-cols-3 gap-8">
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
        className="p-4 outline-dashed outline-2 outline-on-primary rounded-full hover:font-semibold"
      >
        Click here for more
      </a>
    </section>
  );
}
