export default function Hero() {
  return (
    <section
      className="snap-start container mx-auto flex items-center justify-center min-h-screen"
      id="hero-section"
    >
      <div className="flex flex-col xl:flex-row gap-4 items-center justify-center font-extrabold text-5xl md:text-6xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-on-primary/30 to-50% to-on-primary/60">
        <span className="leading-tight">Manpower</span>
        <span className="leading-tight">for</span>
        <span className="text-on-primary inline-flex flex-col h-[calc(theme(fontSize.5xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide text-center xl:text-left leading-tight [&_li]:block">
            <li>Mainpower</li>
            <li>Talent</li>
            <li>Investment</li>
            <li>Vision</li>
            <li>Future</li>
            <li aria-hidden="true">Mainpower</li>
          </ul>
        </span>
      </div>
    </section>
  );
}
