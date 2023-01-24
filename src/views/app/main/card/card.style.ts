import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      '& .MuiCardMedia-root': {
        minWidth: '350px',
        objectFit: 'cover',
      },
      boxShadow: 'unset',
      cursor: 'pointer',
      '& img': {
        borderRadius: theme.spacing(3),
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
