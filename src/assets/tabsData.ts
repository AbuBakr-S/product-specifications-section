import productImageMobile from './product-img-main-mobile.jpg';
import productImageTablet from './product-img-main-tablet.jpg';
import productImageDesktop from './product-img-main-desktop.jpg';
import comfortImageMobile from './comfort-img-main-mobile.jpg';
import comfortImageTablet from './comfort-img-main-tablet.jpg';
import comfortImageDesktop from './comfort-img-main-desktop.jpg';
import durabilityImageMobile from './durability-img-main-mobile.jpg';
import durabilityImageTablet from './durability-img-main-tablet.jpg';
import durabilityImageDesktop from './durability-img-main-desktop.jpg';
import versatilityImageMobile from './versatility-img-main-mobile.jpg';
import versatilityImageTablet from './versatility-img-main-tablet.jpg';
import versatilityImageDesktop from './versatility-img-main-desktop.jpg';
import vectorIcon from './vectorIcon.png';
import paintIcon from './paintIcon.png';
import plantIcon from './plantIcon.png';
import waterFlashIcon from './waterFlashIcon.png';
import tShirtIcon from './tShirtIcon.png';
import handHeartIcon from './handHeartIcon.png';
import windyIcon from './windyIcon.png';
import colorFilterIcon from './colorFilterIcon.png';
import stackIcon from './stackIcon.png';
import scalesIcon from './scalesIcon.png';
import sheildStarIcon from './shieldStarIcon.png';
import priceTag2Icon from './priceTag2Icon.png';
import rainbowIcon from './rainbowIcon.png';
import shirtIcon from './shirtIcon.png';
import shapesIcon from './shapesIcon.png';

type TabFeature = {
  icon: string; // path from import
  text: string;
};

type TabImages = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type Tab = {
  id: string;
  label: string;
  title: string;
  description: string;
  images: TabImages;
  features: TabFeature[];
};

export const tabs: Tab[] = [
  {
    id: 'sustainability',
    label: 'Sustainability',
    title: 'Eco-Friendly Choice',
    description: 'With our sustainable approach, we curate clothing that makes a statement of care—care for the planet, and for the art of fashion.',
    images: {
      mobile: productImageMobile,
      tablet: productImageTablet,
      desktop: productImageDesktop,
    },
    features: [
      { icon: vectorIcon, text: 'Recycled Materials' },
      { icon: paintIcon, text: 'Low Impact Dye' },
      { icon: plantIcon, text: 'Carbon Neutral' },
      { icon: waterFlashIcon, text: 'Water Conservation' },
    ],
  },
  {
    id: 'comfort',
    label: 'Comfort',
    title: 'Uncompromised Comfort',
    description: 'Our garments are a sanctuary of softness, tailored to drape gracefully and allow for freedom of movement.',
    images: {
      mobile: comfortImageMobile,
      tablet: comfortImageTablet,
      desktop: comfortImageDesktop,
    },
    features: [
      { icon: tShirtIcon, text: 'Ergonomic Fits' },
      { icon: handHeartIcon, text: 'Soft-to-the-Touch Fabrics' },
      { icon: windyIcon, text: 'Breathable Weaves' },
      { icon: colorFilterIcon, text: 'Thoughtful Design' },
    ],
  },
  {
    id: 'durability',
    label: 'Durability',
    title: 'Built to Last',
    description: 'Here’s to apparel that you can trust to look as good as new, wear after wear, year after year.',
    images: {
      mobile: durabilityImageMobile,
      tablet: durabilityImageTablet,
      desktop: durabilityImageDesktop,
    },
    features: [
      { icon: stackIcon, text: 'Reinforced Construction' },
      { icon: scalesIcon, text: 'Quality Control' },
      { icon: sheildStarIcon, text: 'Material Resilience' },
      { icon: priceTag2Icon, text: 'Thoughtful Design' },
    ],
  },
  {
    id: 'versatility',
    label: 'Versatility',
    title: 'Versatile by Design',
    description: 'Our pieces are a celebration of versatility, offering a range of styles that are as perfect for a business meeting as they are for a casual brunch.',
    images: {
      mobile: versatilityImageMobile,
      tablet: versatilityImageTablet,
      desktop: versatilityImageDesktop,
    },
    features: [
      { icon: rainbowIcon, text: 'Reinforced Construction' },
      { icon: shirtIcon, text: 'Quality Control' },
      { icon: plantIcon, text: 'Material Resilience' },
      { icon: shapesIcon, text: 'Thoughtful Design' },
    ],
  },
];
