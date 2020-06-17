import React from 'react'
import ClubSuggest from '../ClubSuggest'
import {
  PageContainer,
  PageTitle
} from './Styles'

const GolfCaddy = () => {
  return (
    <PageContainer>
      <PageTitle>iCaddie</PageTitle>
      <ClubSuggest />
    </PageContainer>
  )
}

export default GolfCaddy