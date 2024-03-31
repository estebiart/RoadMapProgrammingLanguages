"use client";
import { Language } from '@/data';
import { addLanguage } from '@/redux/states';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LanguageTable from './components/LanguageTable/LanguageTable';


export type HomeProps = {
	// types...
}

const Home: React.FC<HomeProps>  = () => {
	const dispatch = useDispatch();
	  useEffect(()=> {
			dispatch(addLanguage(Language));
		});

	return (
		<div style={{ height: 400, width: '100%' }}>
          <LanguageTable/>
 		</div>
	);
};

export default Home;
