import type { ImageMetadata } from 'astro';
import aboutPortrait from '../assets/images/about-portrait.jpg';
import areaBedale from '../assets/images/area-bedale.jpg';
import areaBoroughbridge from '../assets/images/area-boroughbridge.jpg';
import areaRipon from '../assets/images/area-ripon.jpg';
import areaThirsk from '../assets/images/area-thirsk.jpg';
import hero from '../assets/images/hero.jpg';
import serviceAnts from '../assets/images/service-ants.jpg';
import serviceBedBugs from '../assets/images/service-bed-bugs.jpg';
import serviceClusterFlies from '../assets/images/service-cluster-flies.jpg';
import serviceCommercial from '../assets/images/service-commercial.jpg';
import serviceFleas from '../assets/images/service-fleas.jpg';
import serviceGeneralInsects from '../assets/images/service-general-insects.jpg';
import serviceMice from '../assets/images/service-mice.jpg';
import serviceMoles from '../assets/images/service-moles.jpg';
import serviceRabbits from '../assets/images/service-rabbits.jpg';
import serviceRats from '../assets/images/service-rats.jpg';
import serviceSquirrels from '../assets/images/service-squirrels.jpg';
import serviceWasps from '../assets/images/service-wasps.jpg';

export const heroImage = hero;
export const aboutImage = aboutPortrait;

// Each confirmed service has its own on-brand image (placeholder set, swap for
// Ben's own photos when supplied).
export const serviceImages: Record<string, ImageMetadata> = {
  'wasp-nest-removal': serviceWasps,
  rats: serviceRats,
  mice: serviceMice,
  moles: serviceMoles,
  squirrels: serviceSquirrels,
  rabbits: serviceRabbits,
  fleas: serviceFleas,
  'cluster-flies': serviceClusterFlies,
  ants: serviceAnts,
  'bed-bugs': serviceBedBugs,
  'general-insects': serviceGeneralInsects,
  'commercial-farm-contracts': serviceCommercial,
};

// Real town photographs (Wikimedia Commons / Geograph). See image-credits.ts.
export const areaImages: Record<string, ImageMetadata> = {
  ripon: areaRipon,
  boroughbridge: areaBoroughbridge,
  thirsk: areaThirsk,
  bedale: areaBedale,
};

export const serviceImageFallback = serviceGeneralInsects;
