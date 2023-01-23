import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      borderRadius: theme.spacing(3),
      '& .MuiCardMedia-root': {
        minWidth: '350px',
        objectFit: 'cover',
      },
    },
    ratingStar: {
      '& svg': {
        color: '#EB5757',
        marginRight: '2px',
      },
    },
  }
})
