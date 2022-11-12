
import MainLayout from "../../components/UI/MainLayout/MainLayout";

const dummyPlaces = [
  {
    title: 'New York City',
    address: 'Empire State Building, West 34th Street, New York, NY, USA',
    image: 'https://www.planetware.com/photos-large/USNY/usa-best-places-new-york.jpg',
    id: '63601dc5a2d76466a83e84e4'
  },
  {
    title: 'Taj Mahal ',
    address: '17th-century, Mughal-style',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
    id: '636060f5a2d76466a83e84e7'
  },
  {
    title: "Humayun's Tomb",
    address: 'Nizamuddin, Nizamuddin East New Delhi, Delhi 110013',      
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-new-delhi.jpg',
    id: '6360616da2d76466a83e84e8'
  },
  {
    title: 'Taj Mahal Palace Hotel',
    address: 'Taj Mahal palace, New Delhi, Man Singh Road, South Block, Man Singh Road Area, New Delhi, Delhi, India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-mumbai.jpg',
    id: '636061c8a2d76466a83e84e9'
  },
  {
    title: 'Rajasthan',
    address: 'Rajasthan, India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rajasthan.jpg',
    id: '6363f15f4ffdad97440c77e7'
  },
  {
    title: 'Rishikesh',
    address: 'Rishikesh. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-rishikesh.jpg',
    id: '6363f1cc4ffdad97440c77e8'
  },
  {
    title: 'Varanasi',
    address: 'Varanasi. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-varanasi.jpg',
    id: '6363f21c4ffdad97440c77e9'
  },
  {
    title: 'Amritsar',
    address: 'Amritsar. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-amritsar.jpg',
    id: '6363f2c04ffdad97440c77ea'
  },
  {
    title: 'Goa',
    address: 'Goa. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-goa.jpg',
    id: '6363f2fd4ffdad97440c77eb'
  },
  {
    title: 'Kerala',
    address: 'Kerala. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kerala.jpg',
    id: '6363f34c4ffdad97440c77ec'
  },
  {
    title: 'Ajanta and Ellora Caves',
    address: 'Ajanta and Ellora Caves. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-ajanta-ellora-caves.jpg',
    id: '6363f36e4ffdad97440c77ed'
  },
  {
    title: 'Darjeeling',
    address: 'Darjeeling. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-darjeeling.jpg',
    id: '6363f3c04ffdad97440c77ee'
  },
  {
    title: 'Kolkata',
    address: 'Kolkata. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kolkata.jpg',
    id: '6363f4034ffdad97440c77ef'
  },
  {
    title: 'Ahmedabad',
    address: 'Ahmedabad. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-ahmedabad.jpg',
    id: '6363f4374ffdad97440c77f0'
  },
  {
    title: 'Shimla',
    address: 'Shimla. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-shimla.jpg',
    id: '6363f4624ffdad97440c77f1'
  },
  {
    title: 'Kolkata',
    address: 'Kolkata. India',
    image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-kolkata.jpg',
    id: '636407845f2407b079673582'
  }
]

function SignUp({ places }) {
  return (
      <h1>this works</h1>
  );
}

SignUp.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default SignUp;
