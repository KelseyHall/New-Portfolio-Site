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

import EFMainThumbnail from '../projects/EFBanner_Main.jpg';
import EFMainDesktop from '../projects/EF_Main_Desktop.png';
import EfMainMobile from '../projects/EF_Main_Mobile.png';

import EFMentorThumbnail from '../projects/EFBannerMentor.jpg';

import ClubhouseThumbnail from '../projects/CHO-Logo.png';
import BelleHavenCountryClub from '../projects/CHO-Sites/bellehavencc-clubhouseonline-e3-home-2024-04-18-09.png';
import BrynMawrCountryClub from '../projects/CHO-Sites/brynmawrcountryclub-2024-04-18-09.png';
import ChatmossCountryClub from '../projects/CHO-Sites/chatmosscc-clubhouseonline-e3-club-Home-2024-04-18.png';
import ExampleSiteHome from '../projects/CHO-Sites/Example-clubhouseonline-e3-club-Home-2024-04-18-10.png';
import ExampleSitePage from '../projects/CHO-Sites/Example-clubhouseonline-e3-club-Sample-2024-04-18-10.png';
import Landingsygtc from '../projects/CHO-Sites/landingsygtc-Home-2024-04-18-09.png';
import Oldfieldsc from '../projects/CHO-Sites/oldfieldsc-Home-2024-04-18-09.png';
import TavistockCC from '../projects/CHO-Sites/tavistockcc-clubhouseonline-e3-Home-2024-04-18-09.png';
import TheRanchmensClub from '../projects/CHO-Sites/theranchmensclub-clubhouseonline-Home-2024-04-18-09.png';
import TorontoSkiClub from '../projects/CHO-Sites/torontoskiclub-clubhouseonline-e3-2024-04-18-09.png';
import TorontoSkiClubMobileHeader from '../projects/CHO-Sites/TorontoSkiClub-Mobile-stickyheader.png';
import TorontoSkiClubMobileTS from '../projects/CHO-Sites/torontoSkiClub-Mobile-TS.png';
import Wampanoag from '../projects/CHO-Sites/Wampanoag-clubhouseonline-e3-club-2024-04-18-09.png';

const projects = [
  {
    design: [
      {
        title: `Clubhouse Online`,
        description:
          'Multiple club design for different clients sites that i have created. All websites built on Kentico framework.',
        img: ClubhouseThumbnail,
        content: [
          {
            title: 'Belle Haven Country Club - Not Live',
            imgs: [BelleHavenCountryClub],
            src: '',
          },
          {
            title: 'Chatmoss Country Club - Not Live',
            imgs: [ChatmossCountryClub],
            src: '',
          },

          {
            title: 'Landings Yacht, Golf and Tennis Club - Not Live',
            imgs: [Landingsygtc],
            src: '',
          },
          {
            title: 'Oldfield Club - Not Live',
            imgs: [Oldfieldsc],
            src: '',
          },
          {
            title: 'Tavistock Country Club - Not Live',
            imgs: [TavistockCC],
            src: '',
          },
          {
            title: `The Ranchmen's Club - Not live`,
            imgs: [TheRanchmensClub],
            src: '',
          },

          {
            title: 'Wampanoag - Mock up - Not live',
            imgs: [Wampanoag],
            src: '',
          },
          {
            title: 'Example Mock up - Not used',
            imgs: [ExampleSiteHome, ExampleSitePage],
            src: '',
          },
        ],
      },
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
        title: `Clubhouse Online`,
        description:
          'Designed and Coded multiple clubs sites. All websites built on the Kentico framework. Disclaimer:live site may be slightly different then image as these sites get handed to the clients to update',
        img: ClubhouseThumbnail,
        content: [
          {
            title: 'Bryn Mawr Country Club - Live 2024',
            imgs: [BrynMawrCountryClub],
            src: 'https://www.brynmawrcountryclub.com/',
          },
          {
            title: 'Toronto Ski Club - Live 2023',
            imgs: [
              TorontoSkiClub,
              TorontoSkiClubMobileHeader,
              TorontoSkiClubMobileTS,
            ],
            src: 'https://www.torontoskiclub.on.ca/',
          },
        ],
      },
      {
        title: 'Empowered Futures',
        description: 'Empowered Futures Main website',
        img: EFMainThumbnail,
        content: [
          {
            title:
              'Implemented website as per the design teams designs. Using Next.Js',
            imgs: [EFMainDesktop, EfMainMobile],
            src: 'https://www.empoweredfutures.ca',
            github: '',
          },
        ],
      },
      {
        title: 'Empowered Futures',
        description: 'Empowered Futures Mentorship Platform',
        img: EFMentorThumbnail,
        content: [
          {
            title:
              'Project ongoing, unfortunately, was not made public before I left in 2023.',
            imgs: [],
            src: '',
            github: '',
          },
        ],
      },
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
            github: [
              {
                name: 'JavaScript',
                code: 'https://github.com/KelseyHall/todoApp',
              },
              {
                name: 'TypeScript',
                code: `https://github.com/KelseyHall/TodoApp-v2-TypeScript`,
              },
            ],
          },
        ],
      },
    ],
  },
];

export default projects;
