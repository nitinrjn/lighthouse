import { Box, Heading, Flex, Center, Button, Text, AspectRatio } from '@chakra-ui/react'
import Image from 'next/image'
import Head from 'next/head'
import {IoLogoTwitter, IoLogoYoutube, IoLogoLinkedin, IoLogoGithub} from 'react-icons/io5'

import LightHouseLogo from '../public/LightHouse-Mentorship-Logo.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lighthouse</title>
        <meta name="description" content="Nicu Parente" />
      </Head>

      <main>
          <Flex>
              <Image
                src={LightHouseLogo}
                alt="Lighthouse Logo"
              />
          </Flex>
      </main>
      <footer></footer>
    </div>
  );
}
