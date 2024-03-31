"use client";
import { Language, LocalStorageTypes } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { setLocalStorage } from '@/utilities';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export type LanguageTableProps = {
	// types...
}

const LanguageTable: React.FC<LanguageTableProps>  = ({}) => {
	const [selectedLanguage, setSelectedLanguage] = useState<Language[]>([]);
	const dispatch = useDispatch();
	const stateLanguage = useSelector((store: AppStore) => store.language);
	const favoriteLanguage = useSelector((store: AppStore) => store.favorites);
	const findLanguage = (language: Language) => !!selectedLanguage.find(p => p.id === language.id);
	const filterLanguage = (language: Language) => favoriteLanguage.filter(p => p.id !== language.id);
	const handleChange = (language: Language) => {
		const filteredLanguage = findLanguage(language) ? filterLanguage(language) : [...selectedLanguage, language];
		dispatch(addFavorite(filteredLanguage));
		setSelectedLanguage(filteredLanguage);
		setLocalStorage(LocalStorageTypes.FAVORITES, filteredLanguage);
	  };
	const columns = [
		{
		  field: 'actions',
		  type: 'actions',
		  sortable: false,
		  headerName: '',
		  width: 50,
		  renderCell: (params: GridRenderCellParams) => (
			 <>{<Checkbox size="small" checked={findLanguage(params.row)} onChange={() => handleChange(params.row)} />}</>
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
	  useEffect(() => {
		setSelectedLanguage(favoriteLanguage);
	  }, [favoriteLanguage]);
	return (
		<DataGrid 
		rows={stateLanguage}
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

export default LanguageTable;
