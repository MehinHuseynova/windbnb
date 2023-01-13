import { Container, TextField } from '@mui/material'
import React, { useReducer } from 'react'
import { searchReducer } from './reducers/searchReducer'

export const ExpandaedSearch = React.memo(() => {
  const initialState = {
    countryName: '',
    guestCount: 0,
  }
  const [state, dispatch] = useReducer(searchReducer, initialState)
  
  return (
    <Container>
      <TextField
        name="countryName"
        value={state.countryName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'setName', payload: e.target.value })
        }
      />
    </Container>
  )
})
