import React from 'react'
import styled from 'styled-components'

const SheetPanel = styled.div`
  width: 100%;
  height: 80px;
  background: #ff7070;
  color: white;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    height: 42px;
    font-size: 14px;
  }
`
const networkError = 'Network exception, please try again later'

const Sheet = ({ show = false, text = networkError }: { show?: boolean; text?: string }) => {
  return <React.Fragment>{show && <SheetPanel>{text}</SheetPanel>}</React.Fragment>
}

export default Sheet
