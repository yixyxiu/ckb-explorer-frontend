import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import styles from './styles.module.scss'
import { DATA_ZOOM_CONFIG, assertIsArray, parseNumericAbbr } from '../../../../utils/chart'
import { tooltipColor, SmartChartPage } from '../../../StatisticsChart/common'
import { ChartItem, explorerService } from '../../../../services/ExplorerService'
import { ChartColorConfig } from '../../../../constants/common'
import { useIsMobile, useIsXXLBreakPoint } from '../../../../hooks'

const useOption = (
  statisticBitcoin: ChartItem.Bitcoin[],
  chartColor: ChartColorConfig,
  _: boolean,

  isThumbnail = false,
): echarts.EChartOption => {
  const isXXL = useIsXXLBreakPoint()
  const gridThumbnail = {
    left: '4%',
    right: '10%',
    top: '12%',
    bottom: '6%',
    containLabel: true,
  }
  const grid = {
    left: '4%',
    right: '3%',
    top: '10%',
    bottom: '5%',
    containLabel: true,
  }
  const { t } = useTranslation()

  const dataset = useMemo(() => {
    const data = new Map<string, Omit<ChartItem.Bitcoin, 'timestamp'>>()

    statisticBitcoin.forEach(item => {
      const date = dayjs(item.timestamp).format('YYYY/MM/DD')
      if (data.has(date)) {
        const v = data.get(date)!
        data.set(date, {
          addressesCount: v.addressesCount + item.addressesCount,
          transactionsCount: v.transactionsCount + item.transactionsCount,
        })
      } else {
        data.set(date, {
          addressesCount: item.addressesCount,
          transactionsCount: item.transactionsCount,
        })
      }
    })
    return Array.from(data.entries()).map(([day, { addressesCount, transactionsCount }]) => ({
      timestamp: new Date(day).getTime() / 1000, // Convert to seconds because data comes from ruby are in seconds
      addressesCount,
      transactionsCount,
    }))
  }, [statisticBitcoin])

  return {
    color: chartColor.colors,
    tooltip: !isThumbnail
      ? {
          trigger: 'axis',
          formatter: dataList => {
            assertIsArray(dataList)
            return `<table><tr><td>${tooltipColor('#333333')}${t('statistic.date')}: </td><td>${
              dataList[0].name
            }</td></tr>${dataList
              .map(
                data =>
                  `<tr><td>${tooltipColor(data.color ?? '#333333')}${data.seriesName}: </td><td>${parseNumericAbbr(
                    // Why to subtract one: https://www.cnblogs.com/goloving/p/14364333.html
                    data.data - 1,
                  )}</td></tr>`,
              )
              .join('')}</table>`
          },
        }
      : undefined,
    grid: isThumbnail ? gridThumbnail : grid,
    legend: {
      orient: 'horizontal',
      right: '3%',
      icon: 'circle',
      data: isThumbnail
        ? []
        : [
            {
              name: t('statistic.new_btc_address'),
            },
            {
              name: t('statistic.transaction_num'),
            },
          ],
    },
    dataZoom: isThumbnail ? [] : DATA_ZOOM_CONFIG,
    xAxis: [
      {
        name: isXXL || isThumbnail ? '' : t('statistic.date'),
        nameLocation: 'middle',
        nameGap: 30,
        type: 'category',
        boundaryGap: false,
        data: dataset.map(data => dayjs(data.timestamp * 1000).format('YYYY/MM/DD')),
      },
    ],
    yAxis: [
      {
        position: 'left',
        name: isXXL || isThumbnail ? '' : t('statistic.new_btc_address'),
        nameTextStyle: {
          align: 'left',
        },
        type: 'log',
        logBase: 10,
        scale: true,
        axisLine: { lineStyle: { color: chartColor.colors[0] } },
        axisLabel: { formatter: (value: string) => parseNumericAbbr(value) },
      },
      {
        position: 'right',
        name: isXXL || isThumbnail ? '' : t('statistic.transaction_num'),
        nameTextStyle: {
          align: 'right',
        },
        type: 'log',
        logBase: 10,
        scale: true,
        axisLine: { lineStyle: { color: chartColor.colors[1] } },
        splitLine: { show: false },
        axisLabel: { formatter: (value: string) => parseNumericAbbr(value) },
      },
    ],
    series: [
      {
        name: t('statistic.new_btc_address'),
        type: 'line',
        yAxisIndex: 0,
        symbol: isThumbnail ? 'none' : 'circle',
        symbolSize: 3,
        // Why to add one: https://www.cnblogs.com/goloving/p/14364333.html
        data: dataset.map(data => data.addressesCount + 1),
      },
      {
        name: t('statistic.transaction_num'),
        type: 'line',
        yAxisIndex: 1,
        symbol: isThumbnail ? 'none' : 'circle',
        symbolSize: 3,
        // Why to add one: https://www.cnblogs.com/goloving/p/14364333.html
        data: dataset.map(data => data.transactionsCount + 1),
      },
    ],
  }
}

export const Chart = ({ isThumbnail = false }: { isThumbnail?: boolean }) => {
  const [t] = useTranslation()
  const isMobile = useIsMobile()
  return (
    <div className={styles.container}>
      <SmartChartPage
        style={{ height: isMobile ? '469px' : '641px', borderRadius: '8px' }}
        title={t('statistic.rgbpp_transaction_list')}
        isThumbnail={isThumbnail}
        fetchData={explorerService.api.fetchStatisticBitcoin}
        getEChartOption={useOption}
        queryKey="fetchStatisticBitcoin"
      />
    </div>
  )
}

export default Chart
