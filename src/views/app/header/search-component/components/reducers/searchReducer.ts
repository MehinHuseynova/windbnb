interface InitialState {
  countryName: string
  guestCount: number
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

    default:
      return state
  }
}
