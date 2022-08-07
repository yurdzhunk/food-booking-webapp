import { Box, Button, Grid, styled, Typography } from "@mui/material";

export const MyNavBarItem = styled(Button)({
    backgroundColor: 'rgba(256, 256, 256, .3)',
    color: '#fff',
    width: '10rem',
    "&:hover": {
        backgroundColor: '#fff',
        color: '#000'
      },
})

export const GridCenter = styled(Grid)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
})

export const MyLogInButton = styled(Button)({
    backgroundColor: '#fff',
    width: '80%',
    color: '#000',
    "&:hover": {
        backgroundColor: '#3535cf',
        color: '#fff'
      },
})

export const MySignUpButton = styled(Button)({
    backgroundColor: '#3535cf',
    width: '80%',
    color: '#fff',
    "&:hover": {
        backgroundColor: '#fff',
        color: '#000'
      },
})

export const StoreLabelBox = styled(Box)({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'flex-end', 
    height: '300px', 
    backgroundSize: 'cover', 
    borderRadius: 3,
    transition: 'all .2s ease-in-out',
    "&:hover": {
        transform: 'scale(1.2)',
        cursor: 'pointer'
      }
})

export const TypographyLabel = styled(Typography)({
    "&:hover": {
        cursor: 'pointer'
      }
})