import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
    Flex
  } from '@chakra-ui/react'
import { useState } from 'react'

import { AffinityTagsMeta } from '../../lib/constants'

const AffinityTags = (props) =>{
    const {userAffinity} = props
    
    console.log(userAffinity)
    const [isEditMode, setIsEditMode] = useState(false);

    return <Flex wrap={true}>
      {AffinityTagsMeta.map(affinity => {
        if(userAffinity[affinity.key]){
            return <Tag
            size="md"
            borderRadius='md'
            variant='subtle'
            colorScheme={affinity.tagColor}
            marginRight="5px"
          >
            <TagLabel>{affinity.affinityName}</TagLabel>
            {isEditMode? <TagCloseButton /> : ""}
          </Tag>
        }
        
        return <></>
      })}

    </Flex>
}

export default AffinityTags