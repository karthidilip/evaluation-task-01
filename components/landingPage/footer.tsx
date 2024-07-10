
"use client";

import React from 'react';
import Image from 'next/image';
import { images } from '@/assets';
import { LABELS } from '@/utils/constant/label';
import {PARA} from '@/utils/constant/para';
import '@/styles/footer/footer.css';
const Footer: React.FC = () => {
  return (
    
    <>
     <div className='footer-container'>
        <div className='starter'>
        <h1 className="register">
              <Image src={images.graph} alt="graph" width={50} height={38} />
            </h1>
            <p className='starter-label'>{LABELS.STARTER}</p>
                    </div>


         <div className='list'>
            <ul>
                <li className='items'>{LABELS.HOME}</li>
                <li className='items'>{LABELS.ABOUT}</li>
                <li className='items'>{LABELS.DOC}</li>
                <li className='items'>{LABELS.GITHUB}</li>
            </ul>
         </div>

         <div className='list-image'>
          <ul>
            <li> <Image src={images.cat} alt="cat"  /></li>
            <li> <Image src={images.facebook} alt="facebook"  /></li>
            <li> <Image src={images.twitter} alt="twitter"  /></li>
            <li> <Image src={images.youtube} alt="youtube"  /></li>
            <li> <Image src={images.linkden} alt="linkden"  /></li>
            <li> <Image src={images.att} alt="att"  /></li>
            <li> <Image src={images.wifi} alt="wifi" /></li>
          </ul>

         </div>
         <p className="footer-copyright">
        © Copyright 2021 Nextjs Starter. Powered with ♥ by <span style={{ color: '#007bff' }}>CreativeDesignsGuru</span>
      </p>
     </div>
    </>
  )

}

export default Footer;
