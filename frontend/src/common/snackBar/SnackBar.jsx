import * as React from "react";
import Button from "@mui/material/Button";
import CloseIcon from '../../Images/cancel.svg';
import success from '../../Images/success.svg'
import error from '../../Images/error.png'
import WarningIcon from '../../Images/warning.png'
import { Alert, IconButton, Snackbar, SnackbarOrigin } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";


const SnackBarComponent = (props) => {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <Button
            onClick={handleClick({
                vertical: 'bottom',
                horizontal: 'right',
            })}
        >
            {/* Bottom-Right */}
        </Button>
    )

    return (
        <div>
           <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                // open={open}
                open={props.messageOpen}
                onClose={props.close}
                key={vertical + horizontal}
                style={{ width: '100%' }}
                action={
                    <IconButton size="small" aria-label="add" color="inherit"  onClick={props.messageClose} data-cy="notifiedMessage-module-closeIcon">
                        <DriveFolderUploadIcon />
                    </IconButton>
                }
            >
                <Alert
                    onClose={props.messageClose}
                    variant="filled"
                    severity={props.alertType}
                    style={{ width: 322, textAlign: 'left', background:
                            props.alertType === 'success' ?
                                '#008A37'
                                :
                                props.alertType === 'error' ?
                                    'bg-red-500'
                                    :
                                    props.alertType === 'warning' ? 'bg-orange-500'
                                        : ''
                    }}
                    icon={props.alertType === 'success' ? <img src={success} alt="successIcon" />
                        :
                        props.alertType === 'error' ? <img src={error} alt="errorIcon"  height={5} width={35} />
                            :
                            props.alertType === 'warning' ? <img src={WarningIcon} alt="WarningIcon" height={5} width={35} />
                                : false}
                >
                    <div className={`flex w-[100%] justify-between`}>
                        {props.alertType === 'success' ? <p className={`text-white`}>{props.notificationText}</p>
                            :
                            props.alertType === 'error' ? <p className={`text-white`}>{props.notificationText}</p>
                                :
                                props.alertType === 'warning' ? <p className={`text-white`}>{props.notificationText}</p>
                                    :
                                    null
                        }
                        {/* <CloseIcon onClick={handleClose} className={`text-slate-300 cursor-pointer text-xl`} /> */}
                    </div>
                    {props.alertType === 'success' ? <p className={`text-white`}>{props.subText}</p>
                        :
                        props.alertType === 'error' ? <p className={`text-white`}>{props.subText}</p>
                            :
                            props.alertType === 'warning' ? <p className={`text-white`}>{props.subText}</p>
                                :
                                null
                    }
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SnackBarComponent