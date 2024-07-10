
"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/assets';
import { LABELS } from '@/utils/constant/label';
import {PARA} from '@/utils/constant/para';
import '@/styles/layout/layout.css';
const Layout: React.FC = () => {
  return (
    
    <>
     <div className='text-layout' >
      
        <div className='header'>
            <h1 className='label'>{LABELS.TITLE}</h1>
            {/* <p className='mainpara'>{PARA.TEXT}</p> */}
            <p className='mainpara' style={{ marginLeft: '500px' ,textAlign:'center'}}>{PARA.TEXT}</p>
        </div>

        <div className='flex-container'>
            <div className='left-flex-container'>
             <h1 className='title'>{LABELS.TITLE}</h1>
             <p className='paragraph'>{PARA.PARAGRAPH}</p>
            </div>
            <div className='right-flex-container'>
            <Image src={images.computer} alt="computer"  />
            </div>
        </div>


        <div className='flex-wrap'>
            <div className='left-flex-wrap'>
              <Image src={images.steps} alt="steps"/>
            </div>
            <div className='right-flex-wrap'>
            <h1 className='title'>{LABELS.TITLE}</h1>
            <p className='paragraph'>{PARA.PARAGRAPH}</p>
            </div>
        </div>

        <div className='cup-container'>
            <div className='left-cup-container'>
            <h1 className='title'>{LABELS.TITLE}</h1>
            <p className='paragraph'>{PARA.PARAGRAPH}</p>
            </div>
            <div className='right-cup-container'>
            
            <Image src={images.cup} alt="cup"style={{ marginBottom: '100px' }}/>
            </div>
        </div>
        

     </div>


    </>
  )

}

export default Layout;
