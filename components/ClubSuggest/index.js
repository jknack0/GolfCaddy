import React from 'react'
import {
  DistanceLabel,
  DistanceContainer,
  DistanceInputContainer,
  DistanceInput
} from './Styles'

const ClubSuggest = () => {
  return (
    <DistanceContainer>
      <DistanceInputContainer>
        <DistanceLabel>Distance: </DistanceLabel>
        <DistanceInput placeholder='Enter Distance' keyboardType='numeric'/>
      </DistanceInputContainer>
    </DistanceContainer>
  )
}

export default ClubSuggest