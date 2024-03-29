import React from 'react';
import Button from '@material-ui/core/Button'; 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, {bindTrigget, bindMenu} from 'material-ui-popup-state'

function MenuPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {popupState => (
                <React.Fragment>
                    <Button variant="contained" {...bindTrigget(popupState)}>
                        Open menu
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>Cake</MenuItem>
                        <MenuItem onClick={popupState.close}>Death</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    )
}
export default MenuPopupState;