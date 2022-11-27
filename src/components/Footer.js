import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Link from '@material-ui/core/Link';
import "../styles/Footer.css";
import { GitHub } from "@material-ui/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <Link href="https://www.instagram.com/invites/contact/?i=1qgzcujmbfral&utm_content=f8rebs6" target="_blank" >
      <InstagramIcon />
</Link>
<Link href="https://twitter.com/SmritiA60055787" target="_blank" >
        <TwitterIcon />
        </Link>
        <Link href="https://github.com/smritiagrawall" target="_blank" >
        <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/smruti-agrawal/" target="_blank" >
        <LinkedInIcon />
        </Link>
      </div>
      <p> &copy; 2022</p>
    </div>
  );
}

export default Footer;
