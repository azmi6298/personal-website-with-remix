import { Link } from "@remix-run/react";

function Footer() {
  return (
    <Link to="https://azmi-dev.netlify.app" target="_blank" rel="noreferrer">
      <footer className="z-20 fixed inset-x-0 max-w-max mx-auto bottom-8 bg-secondary rounded-full p-2 md:p-4">
        <p className="text-xs md:text-sm font-semibold">
          Made with ❤️ by azmi6298
        </p>
      </footer>
    </Link>
  );
}

export default Footer;
