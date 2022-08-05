import Navbar from './Navbar'
import Footer from './Footer'
import { Center, Container } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Container width="100%" maxWidth="1440px">
      <Navbar />
        <main>{children}</main>
      <Footer />
    </Container>
  )
}