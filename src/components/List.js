import React, { useReducer, useEffect } from 'react'
import { ShimmeredDetailsList } from 'office-ui-fabric-react/lib/ShimmeredDetailsList'

function listReducer (state, action) {
  switch (action.type) {
    case 'loadingItems':
      return {
        ...state,
        loading: true
      }
    case 'updateItems':
      return {
        ...state,
        items: action.items || state.items,
        loading: false
      }
    default:
      return state
  }
}

const getData = async (dataSource, dispatch) => {
  try {
    dispatch({ type: 'loadingItems' })
    const data = await (dataSource && dataSource())
    await new Promise(resolve => setTimeout(resolve, 2000))
    dispatch({ type: 'updateItems', items: data })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'updateItems', loading: false })
  }
}

export const List = props => {
  const { dataSource, columns } = props

  const [state, dispatch] = useReducer(listReducer, {
    items: [],
    columns: columns,
    loading: true
  })

  useEffect(() => {
    getData(dataSource, dispatch)
  }, [getData, dataSource])

  return (
    <ShimmeredDetailsList
      enableShimmer={state.loading}
      shimmerLines={20}
      items={state.items}
      columns={state.columns}
    />
  )
}
