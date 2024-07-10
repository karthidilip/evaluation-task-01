
"use client";

import React from 'react'; // Import useState if not already imported
import Header from './header';
import Layout from './layout';
import Flex from './flex';
import Footer from './footer';
import '@/styles/index/index.css';
const Content: React.FC = () => {
  return (
    
    <>
    <div>
     
     <div className='header-container'>

       <Header/>

     </div>
     <div className='layout-container'>
 
       <Layout/>
     
     </div>

     <div className ='flex-container'>

     <Flex/>

     </div>
    <div className='footer'>

        <Footer/>
    </div>

    </div>
    
    </>
  )

}

export default Content;
