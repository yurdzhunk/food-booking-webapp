import { Button, Divider, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const BurgerMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAndDirection = (route) => {
        setAnchorEl(null);
        navigate(route);
    };

    return (
        <div>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <MenuIcon fontSize='large' sx={{color: 'white'}}/>
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseAndDirection}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => handleCloseAndDirection('Cart')}>Cart</MenuItem>
            <MenuItem onClick={() => handleCloseAndDirection('Restaurants')}>Restaurants</MenuItem>
            <Divider/>
            <MenuItem onClick={() => handleCloseAndDirection('SignIn')}>Sign In</MenuItem>
            <MenuItem onClick={() => handleCloseAndDirection('SignUp')}>Sign Up</MenuItem>
        </Menu>
        </div>
    );
}

export default BurgerMenu