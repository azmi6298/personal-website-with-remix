export default function Hero() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="font-extrabold text-3xl md:text-6xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-secondary/30 to-50% to-secondary/60">
        Manpower for{" "}
        <span className="text-secondary inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block">
            <li>Mainpower</li>
            <li>Talent</li>
            <li>Investment</li>
            <li>Vision</li>
            <li>Future</li>
            <li aria-hidden="true">Mainpower</li>
          </ul>
        </span>
      </div>
    </div>
  );
}
