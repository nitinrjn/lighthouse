import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Center, Container, Flex } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Flex alignItems="center" flexDir="column"  height="100%" width="100%" minW="100%">
      <Navbar />
        <Center marginTop="50px" minHeight="75vh" maxWidth="1440px">
          {children}
        </Center>
      <Footer />
    </Flex>
  )
}