import { Github, HeartPulse } from "lucide-react";
import Link from "next/link";

const myGithubUrl = "https://github.com/ansarisaqlain987";
const projectRepoGithubUrl =
  "https://github.com/ansarisaqlain987/awesome-shadcn-ui-list";

const Footer = () => {
  return (
    <footer className="flex pt-8 pb-0 mb-0 w-full items-center justify-center mt-6 gap-3 flex-col">
      <div className="flex gap-1">
        <div>Made with love</div>
        <Link
          href={myGithubUrl}
          target="_blank"
          className="font-bold flex gap-2"
          prefetch={true}
        >
          <HeartPulse />
        </Link>
      </div>
      <div>
        <Link
          href={projectRepoGithubUrl}
          target="_blank"
          className="font-bold flex gap-2"
          prefetch={true}
        >
          <Github />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
