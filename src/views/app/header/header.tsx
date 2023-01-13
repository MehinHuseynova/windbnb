import React from 'react'
import { Container, Box } from '@mui/material';
import Logo from 'assets/logo.svg'
import { useStyles } from '../header.style';
import { SearchComponent } from './search-component/search-component';

export const Header = () => {
    const { classes } = useStyles()
    return (
        <Container className={classes.root}>
            <Box className={classes.container}>
            <Box className={classes.logoContainer}>
                <img src={Logo} alt="logo" />
            </Box>
            <Box><SearchComponent  searchValue='Helsinki, Finland'/></Box>

            </Box>
            
        </Container>
    )
}
