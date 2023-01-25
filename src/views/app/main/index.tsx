import { Grid, Box, Typography, Container } from '@mui/material'
import { ExpandableSearchContext } from 'contexts/ExpandleSearchContext'
import React, { useContext } from 'react'
import { CardItem } from './card'
import data from 'stays.json'
import { ResultType } from '../header/search-component/components/reducers/searchReducer'
import classNames from 'classnames'

export const Main = () => {
  const { state } = useContext(ExpandableSearchContext)
  const countryName = state.countryName.split(',')[1]
  const dataToRender =
    (state.filteredResult.length && state.filteredResult) ||
    JSON.parse(JSON.stringify(data))
  return (
    <Container>
      {state.filteredResult.length && countryName ? (
        <Typography fontWeight={700} fontSize={24}>
          Stays in {countryName}
        </Typography>
      ) : null}
      <Grid container>
        {dataToRender.map((filterResult: ResultType) => (
          <Grid xs={12} sm={6} md={4} item key={filterResult.title}>
            <Box p={1}>
              {' '}
              <CardItem cardInfo={filterResult} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
