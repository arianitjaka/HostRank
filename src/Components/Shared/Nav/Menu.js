import  GetStarted1 from "./Megamenus/svg/getStarted1.svg";
import  GetStarted2  from "./Megamenus/svg/getStarted2.svg";
import  GetStarted3  from "./Megamenus/svg/getStarted3.svg";
import  GetStarted4  from "./Megamenus/svg/getStarted4.svg";
import  GetStarted5  from "./Megamenus/svg/getStarted5.svg";
import  GetStarted6  from "./Megamenus/svg/getStarted6.svg";
import  GetStarted7  from "./Megamenus/svg/getStarted7.svg";
import  GetStarted8  from "./Megamenus/svg/getStarted8.svg";
import  GetStarted9  from "./Megamenus/svg/getStarted9.svg";
import  GetStarted10  from "./Megamenus/svg/getStarted10.svg";

import  Domains1  from "./Megamenus/svg/domains1.svg";
import  Domains2  from "./Megamenus/svg/domains2.svg";
import  Domains3  from "./Megamenus/svg/domains3.svg";
import  Domains4  from "./Megamenus/svg/domains4.svg";
import  Domains5  from "./Megamenus/svg/domains5.svg";
import  Domains6  from "./Megamenus/svg/domains6.svg";
import  Domains7  from "./Megamenus/svg/domains7.svg";
import  Domains8  from "./Megamenus/svg/domains8.svg";
import  Domains9  from "./Megamenus/svg/domains9.svg";
import  Domains10  from "./Megamenus/svg/domains10.svg";

import  Services1  from "./Megamenus/svg/services1.svg";
import  Services2  from "./Megamenus/svg/services2.svg";
import  Services3  from "./Megamenus/svg/services3.svg";
import  Services4  from "./Megamenus/svg/services4.svg";
import  Services5  from "./Megamenus/svg/services5.svg";
import  Services6  from "./Megamenus/svg/services6.svg";
import  Services7  from "./Megamenus/svg/services7.svg";
import  Services8  from "./Megamenus/svg/services8.svg";
import  Services9  from "./Megamenus/svg/services9.svg";
import  Services10  from "./Megamenus/svg/services10.svg";

import  Marketplace1  from "./Megamenus/svg/marketplace1.svg";
import  Marketplace2  from "./Megamenus/svg/marketplace2.svg";
import  Marketplace3  from "./Megamenus/svg/marketplace3.svg";
import  Marketplace4  from "./Megamenus/svg/marketplace4.svg";
import  Marketplace5  from "./Megamenus/svg/marketplace5.svg";
import  Marketplace6  from "./Megamenus/svg/marketplace6.svg";
import  Marketplace7  from "./Megamenus/svg/marketplace7.svg";
import  Marketplace8  from "./Megamenus/svg/marketplace8.svg";
import  Marketplace9  from "./Megamenus/svg/marketplace9.svg";
import  Marketplace10  from "./Megamenus/svg/marketplace10.svg";



export const menu = [
  {
    name: "Product",
    to: "/",
    megamenu: {
      name: "getStartedMenu",
      header: "Product",
      container: [
        {
          svg: GetStarted1,
          header: "Smart Features",
          caption: "Manage your domain names better",
        },
        {
          svg: GetStarted2,
          header: "Monetize Domains",
          caption: "Monetize expired domain inventory",
        },
        {
          svg: GetStarted3 ,
          header: "Latest Technology",
          caption: "Ensure the highest revenue and RPMs",
        },
        {
          svg: GetStarted4 ,
          header: "Landing Pages",
          caption: "Branded landing pages with your logo and text",
        },
        {
          svg: GetStarted5 ,
          header: "For Sale",
          caption: "Many 'For Sale' options and sales features",
        },
        {
          svg: GetStarted6 ,
          header: "Renew Domains",
          caption: "Renew domains from the parked page",
        },
        {
          svg: GetStarted7 ,
          header: "Secured Payments",
          caption: "NET-7 secured payments",
        },
        {
          svg: GetStarted8 ,
          header: "Simple Integration",
          caption: "Fast integration via HTML/JS as well as via APi",
        },
        {
          svg: GetStarted9 ,
          header: "Park Domains",
          caption: "Start earning money from domain ads.",
        },
        {
          svg: GetStarted10 ,
          header: "Monetize Your Portofolio",
          caption: "Monetize your domain portofolio better",
        },
      ],
    },
  },
  {
    name: "About",
    to: "/about",
    megamenu: {
      name: "domainsMenu",
      header: "Our Domains",
      container: [
        {
          to:"/domains-for-sale",
          svg: Domains1 ,
          header: "Domains For Sale",
          caption: "Grab your favourite domain right here",
        },
        {
          svg: Domains2 ,
          header: "Check Our Story",
          caption: "Solving big problems domain industry faces",
          to:"our-story"
        },
        {
          svg: Domains3 ,
          header: "Websites For Sale",
          caption: "Find your favourite website right here",
          to:"websites-for-sale"
        },
        {
          svg: Domains4 ,
          header: "Our Company",
          caption: "Parkname is the best marketplace in the world",
          to:"our-company"
        },
        {
          svg: Domains5 ,
          header: "Registry Services",
          caption: "Reach a big success with agtld domain",
          to:"registry-services"
        },
        {
          svg: Domains6 ,
          header: "Events & Case Studies",
          caption: "Together we help build futuristic solutions",
          to:"case-studies"
        },
        {
          svg: Domains7 ,
          header: "Pricing List",
          caption: "Find your suitable domain pricing plan",
          to:"pricing-list"
        },
        {
          svg: Domains8 ,
          header: "Legal",
          caption: "Everything about our legal restrictions",
          to:"legal"
        },
        {
          svg: Domains9 ,
          header: "Registrar Services",
          caption: "Create additional revenue with domains",
          to:"registrar-services"
        },
        {
          svg: Domains10 ,
          header: "Our Blog",
          caption: "Latest news about us and domain industry",
          to:"blog"
        },
      ],
    },
  },
  {
    name: "Services",
    to: "/services",
    megamenu: {
      name: "servicesMenu",
      header: "Our Services",
      container: [
        {
          to:"/service-overview",
          svg: Services1 ,
          header: "Service Overview",
          caption: "Professional services for your domain names.",
        },
        {
          svg: Services2 ,
          header: "Domain Appraisals",
          caption: "Domain appraisal by the experts: Fast & cheap.",
          to:"/domain-appraisals"
        },
        {
          svg: Services3 ,
          header: "Broker Service",
          caption: "Our professionals buy & sell domains for you.",
          to:"broker-service"
        },
        {
          svg: Services4 ,
          header: "Domain Transfer",
          caption: "Transfer domains securely after completion.",
          to:"/domain-transfer"
        },
        {
          svg: Services5 ,
          header: "Partner Program",
          caption: "Top frequently asked questions of leasename.",
          to:"partner-program"
        },
        {
          svg: Services6 ,
          header: "Transfer Domains",
          caption: "Give your site a brand new start",
          to:"/transfer-domains"
        },
        {
          svg: Services7 ,
          header: "Migrate Hosting",
          caption: "We'll manage your migration in 24 hours",
          to:"migrate-hosting"
        },
        {
          svg: Services8 ,
          header: "Migrate Wordpress",
          caption: "Move your Wordpress website quickly and easily",
          to:"migrate-wordpress"
        },
        {
          svg: Services9 ,
          header: "Migrate Email",
          caption: "Everything about our legal restrictions",
          to:"migrate-email"
        },
        {
          svg: Services10 ,
          header: "Protect Domain",
          caption: "We will protect your most valuable online asset",
          to:"protect-domain"
        },
      ],
    },
  },
 
 
];
