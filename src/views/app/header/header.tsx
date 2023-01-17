import React, { useState, useCallback } from 'react'
import { Container, Box, Slide, ClickAwayListener } from '@mui/material'
import Logo from 'assets/logo.svg'
import { useStyles } from './header.style'
import { SearchComponent } from './search-component/search-component'
import { ExpandaedSearch } from './search-component/components/expandedSearch'
import Fade from '@mui/material/Fade'
import Collapse from '@mui/material/Collapse'

export const Header = () => {
  const { classes } = useStyles()
  const [open, setOpen] = useState<boolean>(false)

  const handleSearchPanel = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClickAway = () => {
    setOpen(false)
  }
  return (
    <>
      <Collapse
        in={open}
        mountOnEnter
        unmountOnExit
        timeout={{
          appear: 800,
          enter: 1000,
          exit: 500,
        }}
      >
        <Box className={classes.searchPanelContainer}>
          <ExpandaedSearch handleSearchPanel={handleClickAway} />
        </Box>
      </Collapse>

      <Collapse
        in={!open}
        mountOnEnter
        unmountOnExit
        timeout={{
          appear: 800,
          enter: 300,
          exit: 500,
        }}
      >
        <Container className={classes.root}>
          <Box className={classes.container}>
            <Box className={classes.logoContainer}>
              <img src={Logo} alt="logo" />
            </Box>
            <Box>
              <SearchComponent
                searchValue="Helsinki, Finland"
                handleSearchPanel={handleSearchPanel}
              />
            </Box>
          </Box>
        </Container>
      </Collapse>
    </>
  )
}
