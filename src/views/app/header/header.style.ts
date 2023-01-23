import { padding } from '@mui/system'
import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    root: {
      marginTop: theme.spacing(2),
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flex: 1,
      },
    },
    logoContainer: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'left',
        padding: theme.spacing(1),
      },
    },

    searchPanelContainer: {
      marginTop: theme.spacing(2),
    },
  }
})
