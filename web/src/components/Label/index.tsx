import React from 'react'
import styled from 'styled-components'

const LabelPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 28px;
  margin-bottom: 24px;

  > img {
    width: 28px;
    height: 28px;
  }

  > span {
    font-size: 18px;
    color: rgb(77, 77, 77);
    margin-left: 10px;
    margin-right: 21px;
  }

  > div {
    font-size: 16px;
    color: rgb(75, 188, 142);
  }
`

const SimpleLabel = ({
  image,
  label,
  value,
  highLight,
  style,
}: {
  image: string
  label: string
  value: any
  highLight?: boolean
  style?: any
}) => {
  const highLightStyle = {
    color: '#4BBC8E',
  }
  const normalStyle = {
    color: '#888888',
  }
  return (
    <LabelPanel style={style}>
      <img src={image} alt={value} />
      <span>{label}</span>
      <div style={highLight ? highLightStyle : normalStyle}>{value}</div>
    </LabelPanel>
  )
}

export default SimpleLabel
