"use client";
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '../CustomDialog';
import { FavoriteTable } from './FavoriteTable';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';


export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps>  = ({}) => {
	const handleClick = () =>{
		dialogOpenSubject$.setSubject = true;
	}
	return (
	<Box sx={{ flexGrow: 1 }}>
		<CustomDialog>
			<FavoriteTable/>
		</CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
		      Roadmap to Developer Abilities
          </Typography>
		  <Button  variant='contained' onClick={handleClick}> Open My Abilities </Button>
        </Toolbar>
      </AppBar>
    </Box>
	);
};

export default Navbar;
