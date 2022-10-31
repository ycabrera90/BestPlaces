import PlacesList from "../components/PlacesList/PlacesList";
import MainLayout from "../components/UI/MainLayout/MainLayout";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "New York City",
    image:
      "https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg",
    address: "Empire State Building, West 34th Street, New York, NY, USA",
    description:
      "New York City is like no other city in the world, and one that must be experienced to be fully appreciated",
  },
  {
    id: "p2",
    title: "Golden Gate Bridge",
    image:
      "https://www.planetware.com/photos-large/USNY/usa-best-places-san-francisco.jpg",
    address: "Golden Gate Bridge, Golden Gate Bridge, San Francisco, CA, USA",
    description:
      "West Coast city is the perfect getaway destination for couples, singles, or families",
  },
];

function HomePage() {
  return (
    <MainLayout>
      <PlacesList meetups={DUMMY_PLACES} />;
    </MainLayout>
  );
}

export default HomePage;
