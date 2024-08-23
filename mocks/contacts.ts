import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface Contact {
  link: string;
  icon: IconProp;
  label: string;
}

export const contacts: Contact[] = [
  {
    link: "https://www.instagram.com/edsf_per",
    icon: faInstagram,
    label: "Instagram"
  },
  {
    link: "https://www.linkedin.com/in/evelynsfranca/",
    icon: faLinkedin,
    label: "LinkedIn"
  },
  {
    link: "https://github.com/evelynsfranca",
    icon: faGithub,
    label: "GitHub"
  },
  {
    link: "https://wa.me/5541984017050/?&text&type=phone_number&app_absent=1",
    icon: faWhatsapp,
    label: "WhatsApp"
  },
  {
    link: "mailto:francasevelyn@gmail.com",
    icon: faEnvelope,
    label: "E-mail"
  },
];
