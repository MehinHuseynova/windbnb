import { ExpandableSearchContext } from 'contexts/ExpandleSearchContext'
import React, { useCallback, useContext, useState, useMemo } from 'react'
import { ResultType } from 'views/app/header/search-component/components/reducers/searchReducer'
import { debounce } from 'lodash'

export const useFilterSearch = (
  data: ResultType[],
  handleSearchPanel: () => {},
) => {
  const { state, dispatch } = useContext(ExpandableSearchContext)
  const [filteredData, setFilteredData] = useState([])

  const filterSearchResult = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const countryName = e.target.value
      const resultArr = data.reduce((acc: any, curr: ResultType) => {
        const fullText = `${curr.city}, ${curr.country}`.toLowerCase()
        if (
          countryName !== '' &&
          fullText.includes(countryName.toLowerCase()) &&
          state.adultCount + state.childrenCount <= curr.maxGuests
        ) {
          acc.push(curr)
          return acc
        }
        return acc
      }, [] as ResultType[])
      setFilteredData(resultArr)
    },
    [dispatch, filteredData],
  )

  const handleSearchValue = useMemo(
    () => debounce((e: any) => filterSearchResult(e), 300),
    [filterSearchResult],
  )

  const handleSubmitSearchResult = useCallback(() => {
    const searchResult = filteredData.filter((data: ResultType) => {
      if (state.guestCount <= data.maxGuests) {
        if (
          state.countryName &&
          `${data.city}, ${data.country} === ${state.countryName}`
        ) {
          return data
        }
        return data
      }
    })

    dispatch({ type: 'setFilteredResult', payload: searchResult })
    dispatch({ type: 'isFilterActive' })
    handleSearchPanel()
  }, [filteredData, state.guestCount])

  return [handleSearchValue, handleSubmitSearchResult, filteredData] as any
}
