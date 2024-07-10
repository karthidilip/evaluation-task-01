
"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/assets';
import { LABELS } from '@/utils/constant/label';
import DownloadButton from '@/commonComponents/download';
import '@/styles/header/header.css';
const Header: React.FC = () => {
  return (
    
    <>
    {/* //main div */}
   <div>
    <div className='layout'>
      <div className='container'>
          <div className='left-container'>
            <div className='register'>
             
              <Image src={images.graph} alt="graph" width={60} height={38} style={{ marginLeft: '400px' }}/>
            </div>

            <div className='name'>
            <p>{LABELS.STARTER}</p>
            </div>
            </div>

           <div className='right-container'>
            <div className='text'>
                <h2>{LABELS.GITHUB}</h2>  &nbsp; &nbsp; &nbsp; 
                <h3>{LABELS.SIGNIN}</h3>
            </div>
            </div>
          </div>
   <div className='para'>
      <div className='Headings'>
           <h1> {LABELS.LANDINGPAGE}</h1>
              <h2>{LABELS.REACT}</h2>
             <p id='style'>{LABELS.BUILD}</p>
        </div>
        </div>

     <div className='button'>
        < DownloadButton/>
     </div>
     </div>


         

      
   </div>
    </>
  )

}

export default Header;
