import MainHeader from "../MainHeader/MainHeader";
import BackgroundImages from "../BackgroundImages/BackgroundImages";
import PageHeaders from "../PageHeaders/PageHeaders";
import classes from "./MainLayout.module.css";

const backgroundPlaces = [
  {
    title: 'New York City',
    image: 'https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg',
    id: '63601dc5a2d76466a83e84e4'
  },
  {
    title: 'Taj Mahal ',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
    id: '636060f5a2d76466a83e84e7'
  },
  {
    title: "Humayun's Tomb",
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-new-delhi.jpg',
    id: '6360616da2d76466a83e84e8'
  },
  {
    title: 'Taj Mahal Palace Hotel',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-mumbai.jpg',
    id: '636061c8a2d76466a83e84e9'
  },
  {
    title: 'Rajasthan',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg',
    id: '6363f15f4ffdad97440c77e7'
  },
  {
    title: 'Rishikesh',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rishikesh.jpg',
    id: '6363f1cc4ffdad97440c77e8'
  },
  {
    title: 'Varanasi',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-varanasi.jpg',
    id: '6363f21c4ffdad97440c77e9'
  },
  {
    title: 'Amritsar',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-amritsar.jpg',
    id: '6363f2c04ffdad97440c77ea'
  },
  {
    title: 'Goa',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-goa.jpg',
    id: '6363f2fd4ffdad97440c77eb'
  },
  {
    title: 'Kerala',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kerala.jpg',
    id: '6363f34c4ffdad97440c77ec'
  },
  {
    title: 'Ajanta and Ellora Caves',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-ajanta-ellora-caves.jpg',
    id: '6363f36e4ffdad97440c77ed'
  },
  {
    title: 'Darjeeling',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-darjeeling.jpg',
    id: '6363f3c04ffdad97440c77ee'
  },
  {
    title: 'Kolkata',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kolkata.jpg',
    id: '6363f4034ffdad97440c77ef'
  },
  {
    title: 'Ahmedabad',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-ahmedabad.jpg',
    id: '6363f4374ffdad97440c77f0'
  },
  {
    title: 'Shimla',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-shimla.jpg',
    id: '6363f4624ffdad97440c77f1'
  },
  {
    title: 'Kolkata',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kolkata.jpg',
    id: '636407845f2407b079673582'
  }
]

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const pageTitle = "Best Places";
const pageDescription = "Look at the best places in the world";
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function MainLayout({ children }) {
  return (
    <>
      <PageHeaders title={pageTitle} description={pageDescription} />
      <MainHeader />
      <BackgroundImages images={backgroundPlaces} />
      <main className={classes.main}>{children}</main>
    </>
  );
}

export default MainLayout;
