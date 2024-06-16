import WORK_EXPERIENCE from "utils/constant/workExperience";
import Card from "./Card";

const RESUME_DRIVE_URL =
  "https://drive.google.com/drive/folders/1nrnaOg7hQGncEByamnt4T9AXsVs_SVUt";

export default function WorkExperience() {
  return (
    <section
      className="snap-start scroll-mt-0 xl:scroll-mt-[72px] lg:min-h-screen *:text-on-primary py-16 xl:py-8"
      id="experience-section"
    >
      <div className="container mx-auto flex flex-col items-center justify-center gap-y-8 lg:gap-y-16">
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
          href={RESUME_DRIVE_URL}
          target="_blank"
          className="mt-4 animate-bounce p-4 outline-dashed outline-2 outline-on-primary rounded-full hover:font-semibold"
        >
          Click here for more
        </a>
      </div>
    </section>
  );
}
