import { Center, Heading } from "@chakra-ui/react"

const CalendarHidden = () =>{
    return <Center borderRadius="md" minHeight="350px"  minWidth="350px" boxShadow="lg" backgroundColor="gray.100">
    <Heading size="md" textAlign="center" color="gray.600">
      Please login or create an account to view the calendar!
    </Heading>
  </Center>
}

export default CalendarHidden;