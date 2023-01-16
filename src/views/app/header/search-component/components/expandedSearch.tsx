import { Box, Container, Button, TextField, Typography } from '@mui/material'
import React, { useReducer } from 'react'
import { useStyles } from './expandedSearch.style'
import { searchReducer } from './reducers/searchReducer'
import SearchIcon from '@mui/icons-material/Search'

export const ExpandaedSearch = React.memo(() => {
  const { classes } = useStyles()
  const initialState = {
    countryName: '',
    guestCount: null,
    adultCount: null,
    childrenCount: null,
    calcVisible: false,
  }
  const [state, dispatch] = useReducer(searchReducer, initialState)
  const handleGuestCalcVisibility = () => {
    dispatch({ type: 'calcVisible' })
  }
  return (
    <Container>
      <Box className={classes.root}>
        <TextField
          variant="filled"
          label="Location"
          size="small"
          placeholder="Add Location"
          InputLabelProps={{
            color: 'primary',
            shrink: true,
            size: 'small',
          }}
          name="countryName"
          value={state.countryName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: 'setName', payload: e.target.value })
          }
        />
        <Box>
          <Box alignSelf="flex-start">
            <TextField
              variant="filled"
              label="Guests"
              size="small"
              onClick={handleGuestCalcVisibility}
              placeholder="Add Guests"
              InputLabelProps={{
                color: 'primary',
                shrink: true,
                size: 'small',
              }}
              
              name="guestCount"
              value={state.guestCount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: 'setName', payload: e.target.value })
              }
            />
          </Box>
          {state.calcVisible ? (
            <>
              <Box className={classes.guestCalculator}>
                <Typography display="block">Adults</Typography>
                <Typography variant="body2" color="#BDBDBD">
                  Ages 13 or above
                </Typography>
                <Button variant="text" className={classes.guestCount}>
                  +
                </Button>
                {state.adultCount}{' '}
                <Button variant="text" className={classes.guestCount}>
                  -
                </Button>
              </Box>
              <Box className={classes.guestCalculator}>
                <Typography display="block">Children</Typography>
                <Typography variant="body2" color="#BDBDBD">
                  2-12
                </Typography>
                <Button variant="text" className={classes.guestCount}>
                  +
                </Button>
                {state.childrenCount}{' '}
                <Button variant="text" className={classes.guestCount}>
                  -
                </Button>
              </Box>
            </>
          ) : null}
        </Box>
        <Button
          className={classes.searchBtn}
          type="submit"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Box>
    </Container>
  )
})
