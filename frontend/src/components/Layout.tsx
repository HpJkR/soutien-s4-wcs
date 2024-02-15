import React from "react";
import Head from "next/head";

export default function Layout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  return (
    <>
      <Head>
        <title> Wildmazon - {pageTitle} </title>
      </Head>
      <div className="container mx-auto px-4">{children}</div>
    </>
  );
}
