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
    adultCount: 0,
    childrenCount: 0,
    calcVisible: false,
  }
  const [state, dispatch] = useReducer(searchReducer, initialState)

  const handleGuestCalcVisibility = () => {
    dispatch({ type: 'calcVisible' })
  }

  return (
    <Container className={classes.container}>
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

        <Box className={classes.calcContainer}>
          <Box alignSelf="flex-start" display="flex">
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
              value={
                state.adultCount + state.childrenCount > 0
                  ? state.adultCount + state.childrenCount
                  : ''
              }
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
                <Button
                  variant="text"
                  className={classes.guestCount}
                  onClick={() => dispatch({ type: 'incrementAdult' })}
                >
                  +
                </Button>
                <Typography display="inline-block" p="5px">
                  {state.adultCount}
                </Typography>
                <Button
                  variant="text"
                  disabled={state.adultCount === 0}
                  className={classes.guestCount}
                  onClick={() => dispatch({ type: 'decrementAdult' })}
                >
                  -
                </Button>
              </Box>
              <Box className={classes.guestCalculator}>
                <Typography display="block">Children</Typography>
                <Typography variant="body2" color="#BDBDBD">
                  2-12
                </Typography>
                <Button
                  variant="text"
                  className={classes.guestCount}
                  onClick={() => dispatch({ type: 'incrementChildren' })}
                >
                  +
                </Button>
                <Typography display="inline-block" p="5px">
                  {state.childrenCount}{' '}
                </Typography>
                <Button
                  variant="text"
                  disabled={state.childrenCount === 0}
                  className={classes.guestCount}
                  onClick={() => dispatch({ type: 'decrementChildren' })}
                >
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
