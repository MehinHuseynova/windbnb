import React, { useState, useCallback } from 'react'
import { Container, Box, Slide } from '@mui/material'
import Logo from 'assets/logo.svg'
import { useStyles } from './header.style'
import { SearchComponent } from './search-component/search-component'
import { ExpandaedSearch } from './search-component/components/expandedSearch'

export const Header = () => {
  const { classes } = useStyles()
  const [open, setOpen] = useState<boolean>(false)

  const handleSearchPanel = useCallback(() => {
    setOpen(true)
  },[])

  return (
    <>
      <Slide
        direction="down"
        in={open}
        mountOnEnter
        unmountOnExit
        timeout={{
          appear: 500,
          enter: 800,
        }}
      >
        <Box className={classes.searchPanelContainer}>
          <ExpandaedSearch />
        </Box>
      </Slide>
      {!open ? (
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
      ) : null}
    </>
  )
}
