import { Box, Container } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import Logo from 'assets/logo.svg'
import { useCallback, useState } from 'react'
import { useStyles } from './header.style'
import { ExpandaedSearch } from './search-component/components/expandedSearch'
import { SearchComponent } from './search-component/search-component'

export const Header = () => {
  const { classes } = useStyles()
  const [open, setOpen] = useState<boolean>(false)

  const handleSearchPanel = () => {
    setOpen(!open)
  }

  const handleClickAway = () => {
    setOpen(false)
  }
  return (
    <>
      <Collapse in={open} mountOnEnter unmountOnExit>
        <Box className={classes.searchPanelContainer}>
          <ExpandaedSearch {...{ handleSearchPanel, handleClickAway }} />
        </Box>
      </Collapse>

      <Collapse in={!open} mountOnEnter unmountOnExit>
        <Container className={classes.root}>
          <Box className={classes.container}>
            <Box className={classes.logoContainer}>
              <img src={Logo} alt="logo" />
            </Box>
            <Box>
              <SearchComponent handleSearchPanel={handleSearchPanel} />
            </Box>
          </Box>
        </Container>
      </Collapse>
    </>
  )
}
