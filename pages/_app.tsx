import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <UserProvider>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </UserProvider>)
}

export default MyApp
