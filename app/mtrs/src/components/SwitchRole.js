import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function SwitchRole() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [role, setRole] = React.useState("User");
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const toUser = () => {
        setRole('User')
        setAnchorEl(null);
    }
    const toAdmin = () => {
        setRole('Admin')
        setAnchorEl(null);
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {role}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={toUser}>User</MenuItem>
                <MenuItem onClick={toAdmin}>Admin</MenuItem>
            </Menu>
        </div>
    );
}