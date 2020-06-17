import styled from 'styled-components'

export const DistanceContainer = styled.View`
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`

export const DistanceInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
`

export const DistanceInput = styled.TextInput`
  text-align: center;
  height: 32px;
  width: 120px;
  border-color: grey;
  border-width: 1px;
  background-color: white;
  border-radius: 5px;
  padding: 3px;
`

export const DistanceLabel = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: white;
`