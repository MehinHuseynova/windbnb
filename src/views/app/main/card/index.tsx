import React from 'react'
import { Card, Box, CardMedia, CardContent, Typography } from '@mui/material'
import { ResultType } from 'views/app/header/search-component/components/reducers/searchReducer'
import StarIcon from '@mui/icons-material/Star'
import { useStyles } from './card.style'

interface CardItemProps {
  cardInfo: ResultType
}

export const CardItem: React.FC<CardItemProps> = ({
  cardInfo: { photo, rating, type, title },
}) => {
  const { classes } = useStyles()
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="194"
        image={photo}
        width="20"
        alt="Paella dish"
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" py={1}>
          <Typography color="#828282" fontSize={14} fontWeight={500}>
            {type === ''}
          </Typography>{' '}
          <Box
            display="flex"
            alignItems="center"
            className={classes.ratingStar}
          >
            <StarIcon fontSize="small" />
            <Typography fontSize={14}>{rating}</Typography>
          </Box>
        </Box>
        <Box>
          <Typography fontSize={16} fontWeight={600}>
            {title.length > 35 ? `${title.slice(0, 35)}...` : title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}
