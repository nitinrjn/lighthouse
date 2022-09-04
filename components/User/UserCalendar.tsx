import { Box } from "@chakra-ui/react";
import { Calendar } from "@prisma/client";
import { InlineWidget } from "react-calendly";

import AffinityTags from "./AffinityTags";
import CalendarHidden from "./CalendarHidden";


const UserCalendar = (props) =>{

    const {user, calendarType, calendarLink} = props;

    //User is not logged in
    if(!user) return ;

    return  <Box maxWidth="400px" minHeight="400px" minWidth="320px" width="100%" height="100%">
       {user? 
       <InlineWidget 
         styles={{height: '400px', width:'100%'}} 
         pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          }}
          prefill={{
            email: user?.email || "",
            name: `${user.firstName} ${user.lastName}`
          }}
         url={calendarLink} />          
        :
            <CalendarHidden/>
        }

    </Box>
}

export default UserCalendar;