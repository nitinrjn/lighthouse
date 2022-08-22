import { Box, Heading, Flex, Center, Button, Text, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import {IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoLogoGithub} from 'react-icons/io5'

import LightHouseLogo from '../public/Lighthouse-Connections-Logo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lighthouse</title>
        <meta name="description" content="Nicu Parente" />
      </Head>

      <Flex>
          <Image
            src={LightHouseLogo}
            alt="Lighthouse Logo"
          />
      </Flex>
    </>
  );
}
