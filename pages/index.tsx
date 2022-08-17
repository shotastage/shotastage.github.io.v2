import type { NextPage } from "next";
import Head from "next/head";
//import Image from 'next/image'
import styles from "../styles/Home.module.scss";


import React, { useEffect, useState, Suspense } from "react";
import { API_KEYS } from "../env-values";
import {
  Flex,
  Navbar,
  Heading,
  SFImage,
  Footer,
  FooterCopyright,
  SHModal,
} from "../components";

import { Avator, Name, UserName } from "../components/AppComponent";
import { TopBanner } from "../components/TopPopup";

// Page Sections
import {
  StorySection,
  Works,
  Writings,
  SkillsSection,
  SocialSection,
} from "./sections";

import {
  BizCard,
  BizCardButton,
  BizDepartment,
  BizCardDetail,
} from "./subpages/BizCard";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("GraphQL API");

  return (
    <div>
      <Head>
        <title>Shota Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {message !== "" && <TopBanner>{message}</TopBanner>}
      <Navbar>@bout shota</Navbar>
      <StorySection />
      <Heading style={{ display: "flex", justifyContent: "center" }}>
        <Flex>
          <BizCard onClick={() => setIsOpen(true)}>
            <SFImage
              imgSrc="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg"
              webPSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/b96412c26fe9490296ad05db23a692e4/IMG_0086.webp"
              alt="avator image"
              imgComponent={Avator}
            />
            <Flex
              flexDirection="column"
              alignItems="flex-start"
              marginLeft="2em"
            >
              <Flex flexDirection="column" alignItems="flex-start">
                <BizDepartment>ソリューションラボ</BizDepartment>
                <Name>Shota Shimazu</Name>
                <UserName>@shotastage</UserName>
              </Flex>
              <BizCardButton onClick={() => setIsOpen(true)}></BizCardButton>
            </Flex>
          </BizCard>
          <SHModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Suspense fallback={<div />}>
              <BizCardDetail />
            </Suspense>
          </SHModal>
        </Flex>
      </Heading>
      <Works />
      <Writings />
      <SkillsSection />
      <SocialSection />
      <Footer>
        <FooterCopyright />
      </Footer>
    </div>
  );
};

export default Home;
