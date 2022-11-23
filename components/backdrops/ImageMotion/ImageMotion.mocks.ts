import { Places } from "../../../types";
import { IImageMotion } from "./ImageMotion";

export const backgroundPlaces = [
  new Places(
    "63601dc5a2d76466a83e84e4",
    "New York City",
    null,
    "https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg"
  ),
  new Places(
    "636060f5a2d76466a83e84e7",
    "Taj Mahal",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg"
  ),
  new Places(
    "6360616da2d76466a83e84e8",
    "Humayun's Tomb",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-new-delhi.jpg"
  ),
  new Places(
    "636061c8a2d76466a83e84e9",
    "Taj Mahal Palace Hotel",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-mumbai.jpg"
  ),
  new Places(
    "6363f15f4ffdad97440c77e7",
    "Rajasthan",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg"
  ),
  new Places(
    "6363f1cc4ffdad97440c77e8",
    "Rishikesh",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rishikesh.jpg"
  ),
  new Places(
    "6363f21c4ffdad97440c77e9",
    "Varanasi",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-varanasi.jpg"
  ),
  new Places(
    "6363f2c04ffdad97440c77ea",
    "Amritsar",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-amritsar.jpg"
  ),
  new Places(
    "6363f2fd4ffdad97440c77eb",
    "Goa",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-goa.jpg"
  ),
  new Places(
    "6363f34c4ffdad97440c77ec",
    "Kerala",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kerala.jpg"
  ),
  new Places(
    "6363f36e4ffdad97440c77ed",
    "Ajanta and Ellora Caves",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-ajanta-ellora-caves.jpg"
  ),
  new Places(
    "6363f3c04ffdad97440c77ee",
    "Darjeeling",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-darjeeling.jpg"
  ),
  new Places(
    "6363f4034ffdad97440c77ef",
    "Kolkata",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kolkata.jpg"
  ),
  new Places(
    "6363f4374ffdad97440c77f0",
    "Ahmedabad",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-ahmedabad.jpg"
  ),
  new Places(
    "6363f4624ffdad97440c77f1",
    "Shimla",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-shimla.jpg"
  ),
  new Places(
    "636407845f2407b079673582",
    "Kolkata",
    null,
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kolkata.jpg"
  ),
];

const base: IImageMotion = {
  images: backgroundPlaces,
};

export const mockImageMotionProps = {
  base,
};
