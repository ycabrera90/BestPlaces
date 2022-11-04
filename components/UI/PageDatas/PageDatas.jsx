import React from "react";
import Head from "next/head";

const PageDatas = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Look at the best places in the world" />
    </Head>
  );
};

export default PageDatas;
