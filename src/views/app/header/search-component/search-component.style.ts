
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => {
    return {

        buttonGroup: {
            border: 'unset',
            boxShadow: '0px 1px 6px 0px #0000001A',
            '&.MuiButtonGroup-root': {
                border: '1px solid #F2F2F2',
                borderRadius: theme.spacing(2),
               
                '& :not(:last-of-type)': {
                    border: '1px solid #F2F2F2',
                },
                '& .MuiButtonBase-root': {
                    padding: theme.spacing(1.5),
                    borderRadius: theme.spacing(2),
                    // '& p': {
                    //     [theme.breakpoints.down('xs')]: {
                    //         fontSize: '12px',
                    //         background:'red'
                    //     }
    
                    // },
                    '&:hover': {
                        backgroundColor: 'unset',
                    },
                    '&:focus': {
                        backgroundColor: 'unset'
                    }
                },
                '& svg': {
                    color: '#EB5757',
                },
             
            },

        },
        addGuestBtn: {
            color: '#BDBDBD',
            fontSize: '14px'
        }

    }

}) 