interface InitialState {
  countryName: string
  guestCount: number
  adultCount: number | null
  childrenCount: number | null
  calcVisible: boolean
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
    default:
      return state
  }
}
