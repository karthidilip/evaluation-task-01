"use client";

import React from 'react';
import Image from 'next/image';

import { LABELS } from '@/utils/constant/label';
import {PARA} from '@/utils/constant/para';
import Button from '@/commonComponents/button';
import '@/styles/flex/flex.css';
const Flex: React.FC = () => {
  return (
    
    <>
     <div className='main-container'>
        <div className='row'>
            <div className='row-left-main-container'>
             <h1 className='label-lorem'>{LABELS.LOREM}</h1>
            </div>
            <div className='row-right-main-container'>
              <Button/>
            </div>
        </div>
   

   <div className='main-register'>
    <p className='label-trial'>{LABELS.TRIAL}</p>
   </div>

     </div>
    
    </>
         

  )

}

export default Flex;
