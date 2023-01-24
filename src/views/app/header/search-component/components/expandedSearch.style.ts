import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    container: {
      display: 'flex',
    },
    root: {
      width: '100%',
      display: 'flex',
      color: '#333333',
      padding: theme.spacing(1),
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      boxShadow: '0px 1px 6px 0px #0000001A',
      borderRadius: '16px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      '& p': {
        fontSize: '14px',
      },

      '& .MuiInputLabel-root': {
        color: '#333333',
        size: '9px',
      },
      '& .MuiInputBase-input': {
        fontSize: '14px',
        color: '#333333',
      },
      '& .MuiFormControl-root': {
        flex: 1,
        '& :focus': {
          border: '1px solid #333333',
          borderRadius: '16px',
        },
        '&:hover': {
          background: 'none',
          '&:after': {
            borderBottom: 'none',
          },
        },
      },
      '& .MuiInputBase-root': {
        '&.MuiFilledInput-root': {
          background: 'none',
          padding: 0,
          '&:before': {
            borderBottom: 'none',
            outline: 'none',
          },
          '&:after': {
            borderBottom: 'none',
            outline: 'none',
          },
          '&:hover': {
            background: 'none',
            '&:before': {
              borderBottom: 'none',
            },
          },
        },
      },
    },
    calcContainer: {
      flex: 1,
      '& input': {
        cursor: 'pointer',
      },
    },
    searchBtn: {
      background: '#EB5757E5 !important',
      borderRadius: '16px',
      padding: '4px 12px',
      color: 'white',
      fontSize: '14px',
      textTransform: 'capitalize',
      margin: theme.spacing(1, 1),
    },
    guestCalcContainer: {
      marginTop: theme.spacing(2),
    },
    guestCalculator: {
      padding: '0px 0 8px 12px',
    },
    guestCount: {
      border: '1px solid #828282',
      display: 'inline-block',
      padding: 0,
      minWidth: '20px',
    },
    listContainer: {
      overflowY: 'auto',
      minHeight: '160px',
      '&::-webkit-scrollbar': { width: 0, height: 0 },
    },
    listItem: {
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        background: '#EEEEEE',
        borderRadius: '6px',
      },
      cursor: 'pointer',

      '& svg': {
        marginBottom: '3px',
      },
    },
  }
})
