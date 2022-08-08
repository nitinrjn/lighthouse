import Navbar from './Navbar'
import Footer from './Footer'
import { Box, Center, Container } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Container height="100%" width="100%" maxWidth="1440px">
        <Navbar />
        <main>
          <Center height="80vh">
            {children}
          </Center>
        </main>
      <Footer />
    </Container>
  )
}