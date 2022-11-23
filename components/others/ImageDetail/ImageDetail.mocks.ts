import { IImageDetail } from "./ImageDetail";

const base: IImageDetail = {
  id: "1",
  title: "Image 1",
  onClick: (visibilityCtx) => {
    console.log(visibilityCtx);
  },
  image:
    "https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kolkata.jpg",
};

export const mockImageDetailProps = {
  base,
};
