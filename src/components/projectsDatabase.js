// import tempImg from '../img/IMG_3475.jpeg';

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
              'Website- under work temporary showcase till launch. Client has put project on hold',
            imgs: [BBKWebsiteDesktop, BBKWebsiteMobile],
            src: 'https://beauty-by-kaylene-production.netlify.app/',
          },
        ],
      },
      {
        title: 'React Todo App',
        description: 'Simple todo app using react',
        img: TodoAppThumbnail,
        content: [
          {
            title: 'Todo App mobile and desktop',
            imgs: [TodoAppMobile, TodoAppDesktop],
            src: 'https://react-todo-app-kelseyh.netlify.app',
          },
        ],
      },
    ],
  },
];

export default projects;
