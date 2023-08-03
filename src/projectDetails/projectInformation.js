import Aesthetica from '../assets/projects/Aesthetica.png'
import Chapters from '../assets/projects/Chapters.png'
import Explora from '../assets/projects/Explora.png'
import CremeBrew from '../assets/projects/Cremebrew.png'
import Pawsitivity from '../assets/projects/Pawsitivity.png'
import Fililingo from '../assets/projects/Fililingo.png'
import Budgeteer from '../assets/projects/Budgeteer.png'
import Mtl from '../assets/projects/MTL.jpg'
import ts1 from '../assets/projects/thesis-imgs/index.png'
import ts2 from '../assets/projects/thesis-imgs/home-user-login.png'
import ts3 from '../assets/projects/thesis-imgs/seller-home.png'
import ts4 from '../assets/projects/thesis-imgs/seller-home-foreign.png'
import ts5 from '../assets/projects/thesis-imgs/seller-home-local.png'
import ts6 from '../assets/projects/thesis-imgs/seller-profile.png'
import ts7 from '../assets/projects/thesis-imgs/seller-register-2.png'
import ts8 from '../assets/projects/thesis-imgs/seller-register-3.png'
import ts9 from '../assets/projects/thesis-imgs/admin-home.png'
import ts10 from '../assets/projects/thesis-imgs/admin-local-user.png'
import ts11 from '../assets/projects/thesis-imgs/admin-foreign-list.png'
import ts12 from '../assets/projects/thesis-imgs/admin-report.png'


export const personalProject = [
  {
    title: 'Explora',
    description: 'A dynamic travel booking website I created for a pretend travel company that offers tours for specific destinations in the Philippines. In this website, users can register through email or Google OAuth, login, update their profile, choose a tour package, and leave a review.',
    img: Explora,
    darkView: false,
    figma: 'https://www.figma.com/file/gf7uSmzK3sGOQFUo5eAlmg/EXPLORA---Travel-Booking-Website?type=design&node-id=0%3A1&mode=design&t=qpT87XLr9gukHJfp-1',
    url: 'https://explora-ruddy.vercel.app/',
    stack: ['React JS','Firebase','Tailwind CSS']
  },
  {
    title: 'Chapters',
    description: 'A dynamic journal web application I created with authentication for privacy and journal entry safekeeping. Some other features of the web application include the display of random inspirational quotes and suggested tasks fetched from external APIs in case the user feels the need for motivation and idea on what to do for the day.',
    img: Chapters,
    darkView: true,
    figma: 'https://www.figma.com/file/RExIm0QrriSs9csGUgQytG/chapters---journaling-app?type=design&node-id=7%3A188&mode=design&t=qpT87XLr9gukHJfp-1',
    url: 'https://chapters-tawny.vercel.app/',
    stack: ['React JS', 'Firebase', 'Tailwind CSS', 'Redux Toolkit', 'Axios']
  },
  {
    title: 'Aesthetica',
    description: 'A static website I created for a pretend architectural firm company. It showcases the architectural projects and designs by the company, the team, and the client engagements.',
    img: Aesthetica,
    darkView: false,
    figma: 'https://www.figma.com/file/0G8IbM76KkQAzfljJKf8Ik/Aesthetica---Housing-architecture-firm?type=design&node-id=0%3A1&mode=design&t=qpT87XLr9gukHJfp-1',
    url: 'https://aesthetica.vercel.app/',
    stack: ['React JS', 'Bootstrap', 'SaSS']
  },
  {
    title: 'CremeBrew',
    description: 'A static website I built for a pretend café. It shows details regarding the shop, their menu, gallery, location, and contact information.',
    img: CremeBrew,
    darkView: false,
    figma: 'https://www.figma.com/file/jq7nSYvaco7H0vvYjDqued/CremeBrew---coffee-shop-website?type=design&mode=design&t=qpT87XLr9gukHJfp-1',
    url: 'https://cremebrew.vercel.app/',
    stack: ['React JS', 'Bootstrap', 'SaSS']
  },
  {
    title: 'Pawsitivity',
    description: 'A static website I built that shows information about human and pet wellness available in 2 languages (English and Filipino). I created this website for the sake of learning and utilizing the React Context API and provider. I used the Context API for providing the English and Filipino translations for the page content.',
    img: Pawsitivity,
    darkView: true,
    figma: 'https://www.figma.com/file/5HuXtQtQar70PEF2xIapMG/Pawsitivity---ReactJS-Project-Multi-language-project-(Context-API)?type=design&mode=design&t=qpT87XLr9gukHJfp-1',
    url: 'https://pawsitivity.vercel.app/',
    stack: ['React JS', 'Tailwind CSS', 'Context API']
  },
  {
    title: 'FiliLingo',
    description: 'This is a quiz web application I created that asks about English translations to Filipino phrases for vocabulary testing. I built this short quiz app to familiarize myself with using the Context API along with a reducer and the useReducer hook.',
    img: Fililingo,
    darkView: false,
    figma: null,
    url: 'https://fililingo.vercel.app/',
    stack: ['React JS', 'Tailwind CSS', 'Daisy UI', 'Context API', 'useReducer']
  },
  {
    title: 'Budgeteer',
    description: 'This is a money budgeting web application I created for myself. It allows me to create multiple lists that aim to track my income, expenses, and total balance per month. What I made unique about this web application compared to other finance trackers is the feature where it asks how much percentage I would like to save from my total income. From this, I get the exact amount I am able to spend for the month, which helps more in visualizing the overall budget. Other features I developed include fetching the real-time currency conversion of USD to PHP from an external API, and a wish list. I created this web app for the sake of familiarizing myself with the JavaScript Module pattern and Constructors as well as trying out the Neumorphism design.',
    img: Budgeteer,
    darkView: true,
    figma: 'https://www.figma.com/file/neRTUMQsx8xBKWCHr4154Q/budget-buddy-2.0?type=design&mode=design&t=qpT87XLr9gukHJfp-1',
    url: 'https://naveraraycia.github.io/Budgeteer/',
    stack: ['HTML', 'Tailwind CSS', 'Vanilla JavaScript', 'Module Pattern', 'Constructors']
  }
]

export const internship = {
  title: 'MTL Holdings',
  description: 'Part of our internship in college is producing a product for a company. I created a web design and website for the company my sister used to work for. It shows details regarding what each company is all about as well as clients, location, and contact information.',
  img: Mtl,
  darkView: true,
  figma: 'https://www.figma.com/file/bEh8MGClIKjf1w9KPcF8GV/MTL-Group-of-Companies-Project-High-Fidelity-Layout-NAVERA-CPE41?type=design&node-id=344%3A43&mode=design&t=2fN0aaJTKBmTFqLm-1',
  url: 'https://naveraraycia.github.io/mtlgroup/',
  stack: ['HTML', 'CSS', 'JavaScript', 'Materialize CSS']
}

export const thesis = {
  title: 'Sim Card Registration System',
  descriptions: ['Back in College, our undergrad thesis is a 4-member group project built with the major learnings we acquired from our Computer Engineering course. I was part of the software development team. I designed the UI, helped with programming the frontend (Bootstrap 4), and assisted with some parts of the backend development (PHP, mySQL).', 'We established this website along with a Fingerprint hardware with the goal of developing a centralized Sim Card Registration System ideally for the Philippines so that all types of Sim card users in the country can have identification. During the time of the thesis\' topic proposal and development (2020), there was no Sim Card registration yet in the Philippines, which explains why we came up with the idea. Furthermore, another reason that pushed us to develop this system is the increasing number of scams and other Sim-related crimes done in the Philippines using prepaid type of Sims. There is no way in the Philippines for any authority to identify a prepaid Sim card user in case they engage in committing crimes since these Sim cards are not registered and are disposable.', 'For the software part, the website has 3 interfaces. It has an interface for the Sim users for tracking their registered Sim details, for the Sim retailers in order for them to have the ability to register the users upon Sim purchase as well as track the Sims they overall registered, and for the administrator in order for them to be able to view all the details of the SIM users, the SIM retailers, and have the authorization to update and delete their data. On the other hand for the hardware part, the hardware development team assembled the fingerprint device from scratch using AutoCad for building the enclosure along with soldering the components together and setting up the fingerprint module software so that we could get the captured fingerprint data and upload it into the website.'],
  subHeading1: {
    title: 'If I review the site we built',
    description: 'This project is one of the first I created as a total beginner (not knowing any JS frameworks yet) using only Bootstrap 4, CSS, along with PHP in the frontend. Looking back I could tell how much I have improved now since I could tell how much of a mess I programmed before. I could also see and understand now the flaws of the website we did before, which include the complications in hosting. Part of the problem before also included troubles in uploading the files in an online storage. Regardless of all the flaws on production, locally the site works 100%.'
  },
  subHeading2: {
    title: 'My improvement compared to before',
    description: 'At least now I am very proud to say that I have improved immensely since compared to before, now I could produce full-stack websites that are built using latest frameworks and technologies on my own. Also, at least now I already know how to upload files to an online bucket and successfully host my dynamic sites.'
  },
  stack: ['PHP', 'Bootstrap 4', 'SQL', 'XAMPP'],
  imgs: [ts1, ts2, ts3, ts4, ts5, ts6, ts7, ts8, ts9, ts10, ts11, ts12]
}