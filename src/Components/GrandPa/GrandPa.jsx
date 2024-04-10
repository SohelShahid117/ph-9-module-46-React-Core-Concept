//46-6 Create A List Of Components To Create Connection
//46-7 Prop Drilling To Pass Data To A Many Level Components

//https://react.dev/learn/passing-data-deeply-with-context

import React from 'react';
import Dad from '../Dad/Dad';
import Uncle from './../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

import './grandpa.css'

const GrandPa = () => {
    return (
        <div className='grandpa '>
            <h2>Grand Pa</h2>
          <div className='flex'>
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </div>
        </div>
    );
};

export default GrandPa;