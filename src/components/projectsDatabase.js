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

const projects = [
  {
    design: [
      {
        title: 'Beauty by Kaylene',
        description: 'about this project',
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
    ],
    coding: [
      {
        title: 'Beauty by Kaylene',
        description: 'Mobile Spa responsive website',
        img: beautybyKayleneLogo,
        content: [
          {
            title: 'Website',
            imgs: [BBKWebsiteDesktop, BBKWebsiteMobile],
            src: 'https://www.beautybykaylene.ca',
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
