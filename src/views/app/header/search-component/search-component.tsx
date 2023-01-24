import SearchIcon from '@mui/icons-material/Search'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { ExpandableSearchContext } from 'contexts/ExpandleSearchContext'
import React, { useContext } from 'react'
import { useStyles } from './search-component.style'

interface SearchComponentProps {
  handleSearchPanel: () => void
}

export const SearchComponent: React.FC<SearchComponentProps> = ({
  handleSearchPanel,
}) => {
  const { classes } = useStyles()
  const {
    state: { isFilterActive = false, countryName = '', guestCount = 0 } = {},
  } = useContext(ExpandableSearchContext)

  return (
    <Box>
      <ButtonGroup
        className={classes.buttonGroup}
        variant="text"
        aria-label="primary button group"
        onClick={handleSearchPanel}
      >
        <Button disableRipple>
          <Typography
            color={isFilterActive && countryName ? '#333333' : '#BDBDBD'}
            fontSize={14}
            textTransform="capitalize"
            placeholder="Add Location"
          >
            {(isFilterActive && countryName) || 'Add Location'}
          </Typography>
        </Button>
        <Button disableRipple>
          <Typography
            color={isFilterActive && guestCount ? '#333333' : '#BDBDBD'}
            fontSize={14}
            textTransform="capitalize"
          >
            {(isFilterActive && guestCount) || 'Add Guest'}
          </Typography>
        </Button>
        <Button disableRipple>
          <SearchIcon fontSize="small" />
        </Button>
      </ButtonGroup>
    </Box>
  )
}
