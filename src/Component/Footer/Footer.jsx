import React from 'react'

import { FaApple, FaFacebook, FaGoogle, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=' w-full py-[32px] h-[600px]   md:py-[40px]  lg:py-[64px] '>
    <div className='  flex  flex-col gap-[5px]  md:w-[full] md:gap-[48px] lg:gap-[4px] lg:flex-col justify-between  w-full lg:max-w-[1280px]  lg:h-[100%]'>
        <div className=' w-full h-[200px] flex justify-between '>
            {/* ImagesFooter */}
            <div className=' flex flex-col w-full  gap-[16px] md:w-[247px] '>
                <div className=' h-[40px] w-[160px]'> 
                Hamro Ghar

                </div>
                <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md:tracking-tight md:text-[16px] md:leading-[24px]'>Generate outside the box thinking with the possibility to targtet the low.</p>
<div className=' md:hidden flex gap-[30px] lg:justify-between justify-evenly lg:gap-[14px]'>
<FaFacebook size={20}/>
<FaGoogle size={20} />
<FaApple size={20}/>
<FaInstagram size={20}/>

</div>

            </div>

            {/* large screen ko lagi */}
{/* Products */}
            <div className=' hidden lg:flex lg:flex-col lg:gap-[24px] lg:list-none'>
            <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Products</h3>
             
                <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                <li>Features</li>
                <li>Solution</li>
                <li>Integration</li>
                <li>Enterprise</li>
                <li>Solutions</li>
                </div>
                
                

            </div>

            {/* Resources */}
            <div className=' hidden lg:flex lg:flex-col lg:gap-[24px] lg:list-none'>
            <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Resources</h3>
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                  <li>Partners</li>
                <li>Community</li>
                <li>Developer</li>
                <li>App</li>
                <li>Blog</li>
                </div>
                
                

            </div>
            {/* Why Choose Us */}
            <div className=' hidden lg:flex lg:flex-col lg:gap-[24px] lg:list-none'>
            <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Why Choose us?</h3>
           
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                <li>Channel</li>
                <li>Scale</li>
                <li>Watch the demo</li>
                <li>Competition</li>
               
                </div>
                
                

            </div>
            {/* Company */}
            <div className=' hidden lg:flex lg:flex-col lg:gap-[24px] lg:list-none'>
            <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Company</h3>
           
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                 <li>About us</li>
                <li>News</li>
                <li>Leadership</li>
                <li>Media Kit</li>
               
                </div>
                
                

            </div>
            {/* large screen sakiney */}

{/* medium size ko lagi */}
            <div className=' hidden md:w-[192px] md:flex md:flex-col md:gap-[24px] md:list-none  lg:hidden'>
            <h3 className=' md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>About Us</h3>
           
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                 <li>Our Company</li>
                <li>Channel</li>
                <li>Scale</li>
                <li>Watch the demo</li>
               
                </div>
                
                

            </div>

        </div>

        <div className=' flex flex-wrap justify-between gap-[32px] md:hidden '>
        <div className='  flex flex-col gap-[24px] list-none'>
            <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Products</h3>
             
                <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                <li>Features</li>
                <li>Solution</li>
                <li>Integration</li>
                <li>Enterprise</li>
                <li>Solutions</li>
                </div>
                
                

            </div>

            {/* Resources */}
            <div className='  flex flex-col gap-[24px] list-none'>  <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Resources</h3>
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                  <li>Partners</li>
                <li>Community</li>
                <li>Developer</li>
                <li>App</li>
                <li>Blog</li>
                </div>
                
                

            </div>
            {/* Why Choose Us */}
            <div className='  flex flex-col gap-[24px] list-none'>  <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Why Choose us?</h3>
           
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                <li>Channel</li>
                <li>Scale</li>
                <li>Watch the demo</li>
                <li>Competition</li>
               
                </div>
                
                

            </div>
            {/* Company */}
            <div className='  flex flex-col gap-[24px] list-none'> <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Company</h3>
           
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                 <li>About us</li>
                <li>News</li>
                <li>Leadership</li>
                <li>Media Kit</li>
               
                </div>
                
                

            </div>
            </div>

        <div className=' hidden md:w-full md:h-[200px] md:flex md:justify-between lg:hidden '>
            {/* Products */}
            <div className=' hidden md:flex md:flex-col md:gap-[24px] md:list-none lg:hidden'>
            <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Products</h3>
             
                <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                <li>Features</li>
                <li>Solution</li>
                <li>Integration</li>
                <li>Enterprise</li>
                
                </div>
                
                

            </div>

            {/* Resources */}
            <div className=' hidden md:flex md:flex-col md:gap-[24px] md:list-none lg:hidden'>
            <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Resources</h3>
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                  <li>Partners</li>
                <li>Community</li>
                <li>Developer</li>
                <li>App</li>
               
                </div>
                
                

            </div>
            {/* Why Choose Us */}
            <div className=' hidden md:flex md:flex-col md:w-[192px] md:gap-[24px] md:list-none lg:hidden'>
            <h3 className=' text-[24px] font-semibold font-inter text-black-primary tracking-tight leading-[32px]  md:font-semibold md:tracking-tight md:text-[16px]  md:leading-[24px]'>Company</h3>
           
            <div className='flex flex-col gap-[12px] list-none text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-medium md: md:tracking-tight md:text-[16px] md:leading-[24px]'>
                <li>About us</li>
                <li>Leadership</li>
                
                <li>News</li>
               
                </div>
                
                

            </div>
          

        </div> 
        <div className='  w-full '>

        <div className=' flex justify-center items-center'>
        {/* <img src={Icon} alt="" /> */}
        Hamro Ghar
    </div>
    <div className=' flex justify-center items-center md:justify-between md:items-center lg:flex-row lg:justify-center lg:items-center'>

    
  <h3 >
  © 2023 Lookscout. All Rights Reserved.
  </h3>
  <div className=' hidden  md:flex md:gap-[30px] md:justify-between lg:hidden'>
<FaFacebook size={20}/>
<FaGoogle size={20} />
<FaApple size={20}/>
<FaInstagram size={20}/>

</div>
  </div>
        </div>  
       </div>
     </div>
  )
}

export default Footer