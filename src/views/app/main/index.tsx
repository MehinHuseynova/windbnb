import { Box } from '@mui/material'
import { ExpandableSearchContext } from 'contexts/ExpandleSearchContext'
import React, { useContext } from 'react'

export const Main = () => {
  const { state } = useContext(ExpandableSearchContext)
  return (
    <Box>
      {state.filteredResult.map((filterResult) => (
        <h1>{filterResult.title}</h1>
      ))}
    </Box>
  )
}
