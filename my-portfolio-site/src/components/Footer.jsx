import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedlnIcon from "@mui/icons-material/Linkedln"
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Facebook from "@mui/icons-material/Facebook";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="my-28 h-auto w-full flex items-center justify-center flex-col">
      <div className="flex w-1/2 items-center justify-center gap-x-6 mb-4">
      <MailchimpForm />
          <LinkedlnIcon alt="Linkeln Icon"/>
        <Facebook alt="Facebook Icon"/>
        <TwitterIcon alt="Twitter Icon"/>
        <InstagramIcon alt="Instagram Icon"/>
        <YouTubeIcon alt="Youtube Icon"/>
      </div>
      <div className="flex w-1/2 my-6 text-textMain font-bold text-base items-center justify-around mb-4">
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="text-textMinor font-bold text-base mb-10">
        © {currentYear} <span>Portfolio Site</span> by <span>Patrick Anthony Okon</span>
      </p>
    </footer>
  );
}

export default Footer;
