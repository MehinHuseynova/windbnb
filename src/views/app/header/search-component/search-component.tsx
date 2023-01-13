import React from 'react'
import { Box, Button, Icon, ButtonGroup } from '@mui/material'
import { useStyles } from './search-component.style'
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

interface SearchComponentProps {
    searchValue: string
}

export const SearchComponent: React.FC<SearchComponentProps> = ({ searchValue }) => {
    const { classes } = useStyles()
    return (
        <Box>
            <ButtonGroup className={classes.buttonGroup} variant="text" aria-label="primary button group">
                <Button disableRipple><Typography color="#333333"  fontSize={14} textTransform="capitalize">{searchValue}</Typography></Button>
                <Button disableRipple><Typography color="#BDBDBD" fontSize={14} textTransform="capitalize">Add Guests</Typography></Button>
                <Button disableRipple><SearchIcon fontSize='small' /></Button>
            </ButtonGroup>
        </Box>
    )

}
