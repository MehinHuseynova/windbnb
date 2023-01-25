import LocationOnIcon from '@mui/icons-material/LocationOn'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Button,
  ClickAwayListener,
  Collapse,
  Container,
  Icon,
  List,
  ListItem,
  TextField,
  Typography,
} from '@mui/material'
import { ExpandableSearchContext } from 'contexts/ExpandleSearchContext'
import { useFilterSearch } from 'hooks/useFilterSearch'
import React, { useCallback, useContext, useEffect } from 'react'
import data from 'stays.json'
import { useStyles } from './expandedSearch.style'
import { ResultType } from './reducers/searchReducer'

interface ExpandedSearchProps {
  handleSearchPanel: () => void
  handleClickAway: () => void
}

export const ExpandaedSearch: React.FC<ExpandedSearchProps> = React.memo(
  ({ handleSearchPanel, handleClickAway }: any) => {
    const { classes } = useStyles()
    const { state, dispatch } = useContext(ExpandableSearchContext)
    const [filterFN, filterSubmitFn, filteredData] = useFilterSearch(
      data,
      handleSearchPanel,
    )

    const handleGuestCalcVisibility = () => {
      dispatch({ type: 'calcVisible' })
    }
    useEffect(() => {
      if (state.adultCount || state.childrenCount)
        dispatch({
          type: 'addGuest',
          payload: state.childrenCount + state.adultCount,
        })
    }, [state.childrenCount, state.adultCount])

    return (
      <ClickAwayListener onClickAway={handleClickAway}>
        <Container className={classes.container}>
          <Box className={classes.root}>
            <Box display="flex" flexDirection="column" flex={1}>
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: 'setName', payload: e.target.value })
                  filterFN(e)
                }}
              />
              <Collapse
                in={Boolean(filteredData.length)}
                mountOnEnter
                unmountOnExit
                timeout={{
                  enter: 500,
                  appear: 300,
                }}
              >
                <Box>
                  <List className={classes.listContainer}>
                    {filteredData.map((result: ResultType) => {
                      return (
                        <ListItem
                          className={classes.listItem}
                          key={result.title}
                          onClick={() =>
                            dispatch({
                              type: 'setName',
                              payload: `${result.city}, ${result.country}`,
                            })
                          }
                        >
                          <Icon>
                            <LocationOnIcon fontSize="small" />
                          </Icon>
                          <Typography>{`${result.city}, ${result.country}`}</Typography>
                        </ListItem>
                      )
                    })}
                  </List>
                </Box>
              </Collapse>
            </Box>
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
                  inputProps={{ readOnly: true }}
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
              <Collapse in={state.calcVisible} mountOnEnter unmountOnExit>
                <Box className={classes.guestCalcContainer}>
                  <Box className={classes.guestCalculator}>
                    <Typography display="block" fontWeight={700}>
                      Adults
                    </Typography>
                    <Typography variant="body2" color="#BDBDBD">
                      Ages 13 or above
                    </Typography>
                    <Button
                      variant="text"
                      disabled={state.adultCount === 0}
                      className={classes.guestCount}
                      onClick={() => dispatch({ type: 'decrementAdult' })}
                    >
                      -
                    </Button>
                    <Typography display="inline-block" p="5px" mx="5px">
                      {state.adultCount}
                    </Typography>
                    <Button
                      variant="text"
                      className={classes.guestCount}
                      onClick={() => dispatch({ type: 'incrementAdult' })}
                    >
                      +
                    </Button>
                  </Box>
                  <Box className={classes.guestCalculator}>
                    <Typography display="block" fontWeight={700}>
                      Children
                    </Typography>
                    <Typography variant="body2" color="#BDBDBD">
                      2-12
                    </Typography>
                    <Button
                      variant="text"
                      disabled={state.childrenCount === 0}
                      className={classes.guestCount}
                      onClick={() => dispatch({ type: 'decrementChildren' })}
                    >
                      -
                    </Button>
                    <Typography display="inline-block" p="5px" mx="5px">
                      {state.childrenCount}{' '}
                    </Typography>
                    <Button
                      variant="text"
                      className={classes.guestCount}
                      onClick={() => dispatch({ type: 'incrementChildren' })}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Collapse>
            </Box>
            <Box>
              <Button
                className={classes.searchBtn}
                type="submit"
                onClick={filterSubmitFn}
                startIcon={<SearchIcon />}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Container>
      </ClickAwayListener>
    )
  },
)
