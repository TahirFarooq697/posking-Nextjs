import React from 'react';
import { BtnwithIcon } from './BtnwithIcon';
import EnglishFlag from '../../images/englishFlag.png'
import ArabicFlag from '../../images/arabic.png'
import BanglaFlag from '../../images/bangla.png'
export const LanguageSelector = ({ref}) => {
  return (
    <div className='w-40 bg-white shadow-lg rounded-lg' ref={ref}>
    <BtnwithIcon title="English" icon={EnglishFlag.src} path='/'/>
    <BtnwithIcon title="Arabic" icon={ArabicFlag.src} path='/'/>
    <BtnwithIcon title="Bangla" icon={BanglaFlag.src} path='/'/>
    </div>
  );
}

