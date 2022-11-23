import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

import { Places } from "@/models/Places.type";
import { getPlaces } from "@/services/mongodb";
import MainLayout from "@/components/layouts/MainLayout/MainLayout";
import ImagesSroll from "@/components/others/ImagesSroll/ImagesSroll";

const HomePage: NextPageWithLayout<{ places: Places[] }> = ({ places }) => {
  return <ImagesSroll places={places} />;
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const places = await getPlaces();

  return {
    props: {
      places,
    },
    // revalidate: 1, <<-- in real this comment should be removed
  };
}

export default HomePage;
