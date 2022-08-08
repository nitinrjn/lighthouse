import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
    Flex,
    Wrap,
    WrapItem
  } from '@chakra-ui/react'
import { useState } from 'react'

import { AFFINITY_TAGS_META } from '../../lib/constants'

const AffinityTags = (props) =>{
    const {userAffinity} = props
    
    console.log(userAffinity)
    const [isEditMode, setIsEditMode] = useState(false);

    return <Wrap>
      {AFFINITY_TAGS_META.map(affinity => {
        if(userAffinity[affinity.key]){
            return <WrapItem>
              <Tag
            size="md"
            borderRadius='md'
            variant='subtle'
            colorScheme={affinity.tagColor}
            marginRight="5px"
          >
            <TagLabel>{affinity.affinityName}</TagLabel>
            {isEditMode? <TagCloseButton /> : ""}
          </Tag>
            </WrapItem>
        }
        
        return <></>
      })}

    </Wrap>
}

export default AffinityTags