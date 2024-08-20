import React from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-off-white text-cool-grey py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-4 mb-4 md:mb-0 text-sm">
            <a href="/about" className="hover:text-highlight-orange">
              About
            </a>
            <a href="/portfolio" className="hover:text-highlight-orange">
              Portfolio
            </a>
            <a href="/experience" className="hover:text-highlight-orange">
              Experience
            </a>
            <a href="/contact" className="hover:text-highlight-orange">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/hieuminh65"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight-orange"
            >
              <GitHubLogoIcon width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hieunguyen65/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight-orange"
            >
              <LinkedInLogoIcon width={20} height={20} />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-highlight-orange"
            >
              <TwitterLogoIcon width={20} height={20} />
            </a> */}
          </div>

          {/* Copyright Notice */}
          <div className="text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Hieu Minh Nguyen. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
