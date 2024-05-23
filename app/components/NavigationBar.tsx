export default function NavigationBar() {
  return (
    <header className="fixed bg-secondary/20 top-0 px-8 py-4 w-full">
      <nav>
        <div className="flex justify-between items-center">
          <a className="text-4xl font-semibold">andini</a>
          <div className="flex gap-x-4 items-center *:text-xs *:uppercase">
            <button className="hover:font-semibold">work experience</button>
            <button className="hover:font-semibold">sidekick</button>
            <button className="hover:font-semibold">journey</button>
            <button className="hover:font-semibold">contact</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
