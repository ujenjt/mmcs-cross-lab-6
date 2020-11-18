import React from "react"
import styled from "styled-components"

import colors from '../colors'
import typo from '../typo'

const PollListItemContainer = styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.almostWhite};
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  }
`

const Wrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 16px 26px 16px 16px;
`

const PollLetters = styled.div`
  ${typo.pollLetters};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 12px;
  background: ${colors.grayBlue};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${colors.brightPrimary};
`

const Text = styled.div`
  ${typo.body1};
  color: ${colors.mainText};
`

const PollListItem = ({letters, question}) => (
  <PollListItemContainer>
    <Wrapper>
      <PollLetters>{letters}</PollLetters>
      <Text>{question}</Text>
    </Wrapper>
  </PollListItemContainer>
)


export default PollListItem