import React from "react";
import PropTypes from "prop-types";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";

const ModalWindow = ({ onClose, onDelete, open }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Удаление аккаунта
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Вы уверены, что хотите удалить свой аккаунт?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={onDelete} autoFocus>
                    Подтвердить
                </Button>
                <Button
                    variant="outlined"
                    autoFocus
                    onClick={onClose}
                    color="error"
                >
                    Отмена
                </Button>
            </DialogActions>
        </Dialog>
    );
};

ModalWindow.propTypes = {
    onDelete: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool
};

export default ModalWindow;
