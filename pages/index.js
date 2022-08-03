import { Box, Heading, Flex, Center, Button, Text, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import {IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoLogoGithub} from 'react-icons/io5'
import { InlineWidget } from 'react-calendly'

import LightHouseLogo from '../public/LightHouse-Mentorship-Logo.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lighthouse</title>
        <meta name="description" content="Nicu Parente" />
      </Head>

      <main>
        <Center height="800px" maxHeight="90%" minWidth="100%">
          <Flex flexDir="column">
            <Image
              src={LightHouseLogo}
              alt="Lighthouse Logo"
            />
          </Flex>

        </Center>
      </main>
      <footer></footer>
    </div>
  );
}
