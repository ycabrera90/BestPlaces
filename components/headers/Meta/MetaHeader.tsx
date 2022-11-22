
import { FC } from 'react';
import Head from "next/head";

export interface IMetaHeader {
  title: string;
  description: string;
}



const MetaHeader: FC<IMetaHeader> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};



export default MetaHeader;
