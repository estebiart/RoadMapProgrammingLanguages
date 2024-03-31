"use client";
import { Language } from '@/models';
import { removeFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Delete } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type FavoriteTableProps = {
	// types...
}

const FavoriteTable: React.FC<FavoriteTableProps>  = ({}) => {
	const dispatch = useDispatch();
	const stateFavorites = useSelector((store: AppStore) => store.favorites)

	const handleClick = (language: Language) => {
		dispatch(removeFavorite(language)); 
	};
	const columns = [
		{
			field: 'actions',
			type: 'actions',
			sortable: false,
			headerName: '',
			width: 50,
			renderCell: (params: GridRenderCellParams) => (
			  <>
				{
				  <IconButton color="secondary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
					<Delete />
				  </IconButton>
				}
			  </>
			)
		  },
		  {
			field: 'language',
			headerName: 'Language',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		  },
		  {
			field: 'tecnology',
			headerName: 'Tecnology',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		  },
		  {
			field: 'ability',
			headerName: 'Ability',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		  },
		  {
			field: 'specification',
			headerName: 'Specification',
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		  }
	  ];

	return (
		<DataGrid 
		rows={stateFavorites}
		columns={columns}  
		disableColumnSelector
		disableRowSelectionOnClick
		autoHeight
		initialState={{
		   pagination: { paginationModel: { pageSize: 5 } },
		 }}
		 pageSizeOptions={[5, 10, 25]}
	   getRowId={(row: any) => row.id}
		/>
	);
};

export default FavoriteTable;
