import WORK_EXPERIENCE from "utils/constant/workExperience";
import Card from "./Card";

export default function WorkExperience() {
  return (
    <section
      className="snap-start flex flex-col items-center justify-center min-h-screen gap-y-16 bg-secondary/40 *:text-primary"
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
    </section>
  );
}
