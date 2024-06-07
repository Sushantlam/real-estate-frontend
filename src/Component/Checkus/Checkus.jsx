import React from 'react'
import First from '../../assets/Photo.jpg';
import check from '../../assets/check.png';
const Checkus = () => {
    return (
        <div className=' w-full  py-[32px]    md:py-[40px]  lg:py-[64px] '>
            <div className='  flex  flex-col gap-[52px]  md:w-[full] md:gap-[48px] lg:gap-0 lg:flex-row justify-between lg:w-full lg:max-w-[1366px]  lg:h-[100%]'>
             


                    <div className=' w-full lg:w-[60%]   flex flex-col justify-center items-start '>
                        <div className=' w-full h-[286px]  flex flex-col gap-[40px] lg:min-h-[374px] lg:w-[532px]'>
                            <div className=' flex flex-col gap-[32px] md:gap-[40px] lg:gap-[16px] '>
                                <h3 className='text-[28px] font-semibold font-inter text-blackk-primary tracking-tight leading-[36px] md:font-semibold md:tracking-tight md:text-[32px] md:leading-[42px]'> Demonstrate branding consequently think outside</h3>
                                <p className='hidden lg:block text-gray-primary  lg:font-normal lg:tracking-tight lg:text-[16px] lg:leading-[24px]'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</p>
                                <div className=' flex flex-col gap-[10px]'>
                                    <div className=' flex gap-[8px] items-center'>
                                        <img src={check} className=' h-[18px] w-[18px]' alt="" />
                                    <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-normal md:tracking-tight md:text-[16px] md:leading-[24px]'>Enterprise-grade security</p>
                                  
                                    </div>
                                    <div className=' flex gap-[8px] items-center'>
                                        <img src={check} className=' h-[18px] w-[18px]' alt="" />
                                     <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-normal md:tracking-tight md:text-[16px] md:leading-[24px]'>99.9% guaranteed uptime SLA</p>
                                    
                                    </div>
                                    <div className=' flex gap-[8px] items-center'>
                                        <img src={check} className=' h-[18px] w-[18px]' alt="" />
                                    
                                    <p className='text-[16px] font-semibold font-inter text-gray-primary tracking-tight leading-[24px] md:font-normal md:tracking-tight md:text-[16px] md:leading-[24px]'>Designated customer success team</p>

                                    </div>
                                    
                                </div>

                            </div>
                            <div>
                                <button className=' px-[18px] py-[12px] rounded-lg bg-yellow-bg'> Start now</button>
                            </div>

                        </div>


                    </div>
                    <div className=' lg:w-[40%] w-full h-[100%] '>
                        <div className='flex flex-col justify-end md:h-[460px] md:w-[full] lg:w-full lg:h-[100%]'>
                               <img src={First} className='h-full w-full object-fill' alt="" />
                        </div>
                    </div>
               
            </div>
        </div>
    )
}

export default Checkus