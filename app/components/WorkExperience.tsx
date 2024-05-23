import WORK_EXPERIENCE from "utils/constant/workExperience";
import Card from "./Card";

export default function WorkExperience() {
  return (
    <section className="flex flex-col gap-y-4 h-screen items-center justify-center">
      <span className="text-4xl font-semibold">Work Experience</span>
      <div className="grid lg:grid-cols-3 gap-8">
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
