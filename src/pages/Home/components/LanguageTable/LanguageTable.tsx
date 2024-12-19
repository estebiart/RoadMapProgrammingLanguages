"use client";
import { Hotel, LocalStorageTypes } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { setLocalStorage } from '@/utilities';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type HotelTableProps = {
	// types...
}

const HotelTable: React.FC<HotelTableProps>  = ({}) => {
	const [selectedHotel, setSelectedHotel] = useState<Hotel[]>([]);
	const dispatch = useDispatch();
	const stateHotel = useSelector((store: AppStore) => store.hotel);
	const favoriteHotel = useSelector((store: AppStore) => store.favorites);
	const findHotel = (hotel: Hotel) => !!selectedHotel.find(p => p.id === hotel.id);
	const filterHotel = (hotel: Hotel) => favoriteHotel.filter(p => p.id !== hotel.id);
	const handleChange = (hotel: Hotel) => {
		const filteredHotel = findHotel(hotel) ? filterHotel(hotel) : [...selectedHotel, hotel];
		dispatch(addFavorite(filteredHotel));
		setSelectedHotel(filteredHotel);
		setLocalStorage(LocalStorageTypes.FAVORITES, filteredHotel);
	  };
	const columns = [
		{
		  field: 'actions',
		  type: 'actions',
		  sortable: false,
		  headerName: '',
		  width: 50,
		  renderCell: (params: GridRenderCellParams) => (
			 <>{<Checkbox size="small" checked={findHotel(params.row)} onChange={() => handleChange(params.row)} />}</>
		  )
		},
		{
		  field: 'hotel',
		  headerName: 'Hotel',
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
	  useEffect(() => {
		setSelectedHotel(favoriteHotel);
	  }, [favoriteHotel]);
	return (
		<DataGrid 
		rows={stateHotel}
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

export default HotelTable;
