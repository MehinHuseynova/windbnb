export interface ResultType {
  city: string
  country: string
  superHost: boolean
  title: string
  rating: number
  maxGuests: number
  type: string
  beds: number | null
  photo: string
}
export interface InitialState {
  countryName: string
  guestCount: number
  adultCount: number
  childrenCount: number
  calcVisible: boolean
  filteredResult: Array<ResultType>
}

export const searchReducer = (state: InitialState, action: any) => {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        countryName: action.payload,
      }
    case 'addGuest':
      return {
        ...state,
        guestCount: action.payload,
      }

    case 'calcVisible':
      return {
        ...state,
        calcVisible: true,
      }
    case 'incrementAdult':
      return {
        ...state,
        adultCount: state.adultCount + 1,
      }

    case 'decrementAdult':
      return {
        ...state,
        adultCount: state.adultCount - 1,
      }
    case 'incrementChildren':
      return {
        ...state,
        childrenCount: state.childrenCount + 1,
      }

    case 'decrementChildren':
      return {
        ...state,
        childrenCount: state.childrenCount - 1,
      }
   
    case 'setFilteredResult':
      return {
        ...state,
        filteredResult: action.payload,
      }
    default:
      return state
  }
}
