import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from '@icon/solid.icon'
import { github, instagram, linkedin } from '@icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/sanari2019',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://linkedin.com/in/samuel-anari/',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:samachoo2010@gmail.com?subject=Hi Samuel Anari!',
    color: '#e74c3c',
  },
  {
    name: 'Instagram',
    path: instagram,
    link: 'https://instagram.com',
    color: '#E52765',
  },
];

export default socialLinkData;
