import React from 'react'

export default function InquireVisa() {
    return (
        <>
            <div className=' flex  w-[100%]  flex-wrap gap-[10px] '>
                <div className=' flex flex-col w-[350px] rounded-[10px] gap-[12px] border-[1.2px] border-[#005f94] p-[18px]'>

                    <div className=' flex flex-col gap-[12px]'>
                        {/* <div className="relative w-full px-[10px]  h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                            Golam Misba Uddin Seikh
                        </div> */}
                        <div className="relative w-full px-[10px]  h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                            misba@gmail.com
                        </div>

                        <div className="relative w-full px-[10px]  h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                            +91 9876543210
                        </div>
                        <div className=' flex gap-[10px]'>
                            <div className="relative w-full px-[10px]  h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                Premium
                            </div>
                            <div className="relative w-full px-[10px]  h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                3 per
                            </div>
                        </div>



                        {/* <div className=' flex w-[100%] gap-[10px]'>
                                <select className="relative w-[80px]  outline-none cursor-pointer px-[10px]  h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <option value="+91">+91</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                </select>
                                <div className="relative w-full   h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[16px]   transition-all duration-200 ${numberFocused
                                            ? "text-[#000] -translate-y-[21px] hidden "
                                            : "text-[#8f8f8f] flex cursor-text"
                                            }`}
                                    >
                                        Enter Mobile Number
                                    </label>
                                    <input
                                        type="text  "
                                        name="maxWeight"
                                        id="name"


                                        onFocus={() => setNumberFocused(true)}
                                        onBlur={(e) =>
                                            setNumberFocused(e.target.value !== "")
                                        }
                                        className="w-full outline-none  px-[10px] text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                        autocomplete="naqsme"
                                    />
                                </div>
                            </div>

                            <div className=' flex w-[100%] gap-[10px]'>
                                <div className="relative w-full   h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[16px]   transition-all duration-200 ${nameFocused
                                            ? "text-[#000] -translate-y-[21px] hidden "
                                            : "text-[#8f8f8f] flex cursor-text"
                                            }`}
                                    >
                        
                                    </label>
                                    <DatePicker className=' flex w-[100%] py-[11px]' onChange={onChange} />
                                </div>
                                <div className="relative w-full   h-[47px] border-[1px] border-[#dedede] rounded-lg shadow flex items-center space-x-4 text-[#00000099]">
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-[13px] font-Poppins   px-[5px]  bg-[#fff] text-[16px]   transition-all duration-200 ${personFocused
                                            ? "text-[#000] -translate-y-[21px] hidden "
                                            : "text-[#8f8f8f] flex cursor-text"
                                            }`}
                                    >
                                        Travelr count
                                    </label>
                                    <input
                                        type="text  "
                                        name="maxWeight"
                                        id="name"


                                        onFocus={() => setPersonFocused(true)}
                                        onBlur={(e) =>
                                            setPersonFocused(e.target.value !== "")
                                        }
                                        className="w-full outline-none  px-[10px] text-[15px]   py-[9px] font-Poppins font-[400] bg-transparent"
                                        autocomplete="naqsme"
                                    />
                                </div>
                            </div> */}
                    </div>


                </div>
            </div>


        </>
    )
}
