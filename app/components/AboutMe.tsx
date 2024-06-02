export default function AboutMe() {
  return (
    <section
      className="snap-start flex flex-col items-center justify-center xl:py-0 min-h-screen bg-accent-white"
      id="about_me-section"
    >
      <div className="container mx-auto grid xl:grid-cols-2 place-items-center gap-y-8 lg:gap-y-16">
        <div className="order-last xl:order-first flex flex-col items-center xl:items-start gap-y-8 xl:gap-y-10 *:text-center *:xl:text-start">
          <span className="section-title">About Me</span>
          <span className="lg:text-2xl">
            Hey, welcome to my little corner! Here, you'll see my journey
            unfold. By day, I'm all about HR. But after hours, I'm diving into
            digital creation. Let's see how these worlds blend in my story👋💭😆
          </span>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <span className="text-[4rem] pacifico-regular">hello</span>
          <div>
            <img
              className="h-56 rounded-full"
              src="images/portrait.jpeg"
              alt="Risky Asty Andini"
            />
          </div>
          <span className="lg:text-3xl">
            I'm Risky Asty{" "}
            <span className="font-semibold underline">Andini</span>
          </span>
        </div>
      </div>
    </section>
  );
}
