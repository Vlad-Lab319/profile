"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Link from "next/link";

const Social = () => {
  return (
    <>
      <ul className="flex flex-row gap-6 items-center justify-center">
        <Link
          className="invert-[0.75] scale-95 transition-[0.5s] hover:scale-[2] hover:-translate-x-2"
          href="https://www.linkedin.com/in/veremenko/"
        >
          <LinkedInIcon color="secondary" />
        </Link>
        <Link
          className="invert-[0.75] scale-95 transition-[0.5s] hover:scale-[2] hover:-translate-x-2"
          href="https://github.com/Vlad-Lab319"
        >
          <GitHubIcon color="secondary" />
        </Link>
        <Link
          className="invert-[0.75] scale-95 transition-[0.5s] hover:scale-[2] hover:-translate-x-2"
          href="https://www.facebook.com/vladimir.eremenko.3"
        >
          <FacebookIcon color="secondary" />
        </Link>
        <Link
          className="invert-[0.75] scale-95 transition-[0.5s] hover:scale-[2] hover:-translate-x-2"
          href="https://www.instagram.com/vladcoder.ca/"
        >
          <InstagramIcon color="secondary" />
        </Link>
        <Link
          className="invert-[0.75] scale-95 transition-[0.5s] hover:scale-[2] hover:-translate-x-2"
          href="https://x.com/vladcoder"
        >
          <XIcon color="secondary" />
        </Link>
        <Link
          className="invert-[0.75] scale-95 transition-[0.5s] hover:scale-[2] hover:-translate-x-2"
          href="https://resume.creddle.io/resume/fa0mvpkt2bk"
        >
          <PictureAsPdfIcon color="secondary" />
        </Link>
      </ul>
    </>
  );
};

export default Social;
