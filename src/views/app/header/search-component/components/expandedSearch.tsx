import {
  Box,
  Container,
  Button,
  TextField,
  Typography,
  ClickAwayListener,
  Collapse,
  List,
  ListItem,
  Icon,
} from '@mui/material'
import React, {
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useStyles } from './expandedSearch.style'
import { ResultType } from './reducers/searchReducer'
import SearchIcon from '@mui/icons-material/Search'
import { ExpandableSearchContext } from 'contexts/ExpandleSearchContext'
import { debounce } from 'lodash'
import data from 'stays.json'
import LocationOnIcon from '@mui/icons-material/LocationOn'

interface ExpandedSearchProps {
  handleSearchPanel: () => void
  handleClickAway: () => void
}

export const ExpandaedSearch: React.FC<ExpandedSearchProps> = React.memo(
  ({ handleSearchPanel, handleClickAway }: any) => {
    const { classes } = useStyles()
    const { state, dispatch } = useContext(ExpandableSearchContext)
    const [filteredData, setFilteredData] = useState<ResultType[]>([])

    const handleGuestCalcVisibility = () => {
      dispatch({ type: 'calcVisible' })
    }

    const filterSearchResult = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const countryName = e.target.value
        const resultArr = data.reduce((acc, curr) => {
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
      () => debounce(filterSearchResult, 1000),
      [filterSearchResult],
    )

    const handleSubmitSearchResult = useCallback(() => {
      const searchResult = filteredData.filter((data) => {
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
      handleSearchPanel()
    }, [filteredData, state.guestCount])

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
                  handleSearchValue(e)
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
                    {filteredData.map((result) => {
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
                      className={classes.guestCount}
                      onClick={() => dispatch({ type: 'incrementAdult' })}
                    >
                      +
                    </Button>
                    <Typography display="inline-block" p="5px" mx="5px">
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
                    <Typography display="block" fontWeight={700}>
                      Children
                    </Typography>
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
                    <Typography display="inline-block" p="5px" mx="5px">
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
                </Box>
              </Collapse>
            </Box>
            <Box>
              <Button
                className={classes.searchBtn}
                type="submit"
                onClick={handleSubmitSearchResult}
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
