import beautybyKayleneLogo from '../projects/beautybykayleneLogo.jpg';
import businessCard1 from '../projects/businessCard-Front.png';
import businessCard2 from '../projects/businessCard-Back.png';
import GCFront from '../projects/giftcertificate-front.jpg';
import GCBack from '../projects/giftcertificate-back.jpg';
import BBKWebsite from '../projects/beautyByKayleneFigmaMockup.png';
import BBKWebsiteDesktop from '../projects/BBKMobile.png';
import BBKWebsiteMobile from '../projects/BBKDesktop.png';

import TodoAppThumbnail from '../projects/todoApp.png';
import TodoAppDesktop from '../projects/todo-app-desktop.png';
import TodoAppMobile from '../projects/todo-app-mobile.png';

import ZoeysCornerThumbnail from '../projects/ZoeysCorner.png';
import ZoeysCornerMobile from '../projects/Zoeys-blog-mobile-figma.png';
import ZoeysCornerTablet from '../projects/Zoeys-blog-tablet-figma.png';
import ZoeysCornerDesktop from '../projects/Zoeys-blog-desktop-figma.png';
import ZoeysCorningCodeMobile from '../projects/ZoeysCornerPhone.png';
import ZoeysCorningCodeDesktop from '../projects/ZoeysCornerDesktop.png';

import ColorPalatteThumbnail from '../projects/thumbnail-MCP.jpg';

const projects = [
  {
    design: [
      {
        title: 'Beauty by Kaylene',
        description:
          'mobile esthetician services. Logo creation, business card etc',
        img: beautybyKayleneLogo,
        content: [
          {
            title: 'logo creation',
            imgs: [beautybyKayleneLogo],
            src: '',
          },
          {
            title: 'business Card',
            imgs: [businessCard1, businessCard2],
            src: '',
          },
          {
            title: 'gift certificate',
            imgs: [GCFront, GCBack],
            src: '',
          },
          {
            title: 'website mock up',
            imgs: [BBKWebsite],
            src: '',
          },
        ],
      },
      {
        title: `Zoey's Corner`,
        description:
          'mock up blog project. Figma designs of mobile, tablet and desktop view',
        img: ZoeysCornerThumbnail,
        content: [
          {
            title: 'Website mockup on Figma, mobile view',
            imgs: [ZoeysCornerMobile],
            src: '',
          },
          {
            title: 'Website mockup on Figma, tablet view',
            imgs: [ZoeysCornerTablet],
            src: '',
          },
          {
            title: 'Website mockup on Figma, desktop view',
            imgs: [ZoeysCornerDesktop],
            src: '',
          },
        ],
      },
    ],
    coding: [
      {
        title: 'Beauty by Kaylene',
        description: 'Mobile Spa responsive website',
        img: beautybyKayleneLogo,
        content: [
          {
            title:
              'Website- client has put on hold indefinitely, used as example now.',
            imgs: [BBKWebsiteDesktop, BBKWebsiteMobile],
            src: 'https://beauty-by-kaylene-production.netlify.app/',
            github: 'https://github.com/KelseyHall/beautybykaylene',
          },
        ],
      },

      {
        title: `Zoey's Corner Blog`,
        description: 'Mock blog site.',
        img: ZoeysCornerThumbnail,
        content: [
          {
            title:
              'Working with Contentful for blog post. Using Api calls to display content.',
            imgs: [ZoeysCorningCodeMobile, ZoeysCorningCodeDesktop],
            src: 'https://zoeys-corner-blogsite.netlify.app/',
            github: 'https://github.com/KelseyHall/Zoeys-corner-blogsite',
          },
        ],
      },
      {
        title: `My Color Palatte`,
        description: 'Color Palatte Creator v1',
        img: ColorPalatteThumbnail,
        content: [
          {
            title:
              'Ability to create multiple color schemes and to save onto computer. v1- using local storage, v2- sign in database coming soon. Created with React.js and tailwind',
            imgs: [ColorPalatteThumbnail],
            src: 'https://mycolourpalatte.netlify.app/',
            github: 'https://github.com/KelseyHall/ColorScheme-Cheatsheet',
          },
        ],
      },
      {
        title: 'React Todo App',
        description: 'Simple todo app using react',
        img: TodoAppThumbnail,
        content: [
          {
            title: 'Todo App personal project',
            imgs: [TodoAppMobile, TodoAppDesktop],
            src: 'https://react-todo-app-kelseyh.netlify.app',
            github: 'https://github.com/KelseyHall/todoApp',
          },
        ],
      },
    ],
  },
];

export default projects;
