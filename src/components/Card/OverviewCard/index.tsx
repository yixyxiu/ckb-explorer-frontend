import React, { ReactNode } from 'react'
import { OverviewCardPanel, OverviewContentPanel, OverviewItemPanel } from './styled'
import { isMobile } from '../../../utils/screen'

export interface OverviewItemData {
  title: ReactNode
  content: ReactNode
}

const handleOverviewItems = (items: OverviewItemData[]) => {
  if (isMobile()) {
    return {
      leftItems: items,
      rightItems: [],
    }
  }
  const leftItems: OverviewItemData[] = []
  const rightItems: OverviewItemData[] = []
  items.forEach((item, index) => {
    if (index % 2 === 0) {
      leftItems.push(item)
    } else {
      rightItems.push(item)
    }
  })
  return {
    leftItems,
    rightItems,
  }
}

const isValidReactNode = (node: ReactNode) => {
  if (node === undefined || node === null) return false
  if (node instanceof Array) {
    return node.reduce((current, item) => (current ? true : !!item))
  }
  return true
}

const OverviewItem = ({
  title,
  content,
  hiddenLine,
}: {
  title?: ReactNode
  content?: ReactNode
  hiddenLine: boolean
}) => {
  return (
    <OverviewItemPanel hiddenLine={hiddenLine}>
      <div className="overview_item__title">{title}</div>
      <div className="overview_item__value">{content}</div>
    </OverviewItemPanel>
  )
}

export default ({ items, children }: { items: OverviewItemData[]; children?: ReactNode }) => {
  const { leftItems, rightItems } = handleOverviewItems(items)
  return (
    <OverviewCardPanel>
      <OverviewContentPanel length={leftItems.length}>
        <div className="overview_content__left_items">
          {leftItems.map((item, idx) => (
            <OverviewItem
              key={items.indexOf(item)}
              title={item.title}
              content={item.content}
              hiddenLine={!isValidReactNode(children) && idx === leftItems.length - 1}
            />
          ))}
        </div>
        <span />
        <div className="overview_content__right_items">
          {rightItems.map((item, idx) => (
            <OverviewItem
              key={items.indexOf(item)}
              title={item.title}
              content={item.content}
              hiddenLine={!isValidReactNode(children) && idx === rightItems.length - 1}
            />
          ))}
        </div>
      </OverviewContentPanel>
      {children}
    </OverviewCardPanel>
  )
}
