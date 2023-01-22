import React, { useReducer } from 'react'
import {
  InitialState,
  searchReducer,
} from 'views/app/header/search-component/components/reducers/searchReducer'

interface SearchContent {
  state: InitialState
  dispatch: React.Dispatch<any>
}
export const ExpandableSearchContext = React.createContext<SearchContent>({
  state: {
    countryName: '',
    adultCount: 0,
    childrenCount: 0,
    calcVisible: false,
    guestCount: 0,
    filteredResult: [],
  },
  dispatch: () => {},
})

const ExpandableSearchProvider: React.FC<any> = ({ children }) => {
  const initialState = {
    countryName: '',
    guestCount: null,
    adultCount: 0,
    childrenCount: 0,
    calcVisible: false,
    filteredResult: [],
  }
  const [state, dispatch] = useReducer(searchReducer, initialState)

  return (
    <ExpandableSearchContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpandableSearchContext.Provider>
  )
}

export default ExpandableSearchProvider
