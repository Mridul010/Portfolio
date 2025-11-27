import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faGithub, // NEW IMPORT
  faTwitter, // NEW IMPORT
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { 
    icon: faGithub, 
    link: "https://github.com/Mridul010" 
  },
  { 
    icon: faLinkedin, 
    link: "https://www.linkedin.com/in/mridul-chundaran/" 
  },
  { 
    icon: faTwitter, 
    link: "https://x.com/ChundaranM35150" 
  },
  { 
    icon: faInstagram, 
    link: "https://www.instagram.com/mridul_chundaran/" 
  },
  { 
    icon: faFacebookF, 
    link: "https://www.facebook.com/mridulchundaran" 
  },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
      target="_blank" // Added this to open links in a new tab
      rel="noopener noreferrer" // Added for security best practice
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;