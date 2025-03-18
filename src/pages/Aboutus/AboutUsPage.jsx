import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Sidebar } from '../../component/sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import image1 from "../../../public/experts/image1.jpg"
import image2 from "../../../public/heroSection/rannutsav.jpg"
import JoditEditor from "jodit-react";
import {
    Modal as NextUIModal,
    ModalBody,
    ModalContent,
    useSkeleton,
} from "@nextui-org/react";

export default function AboutUsPage() {
    const [selectedHeroImage, setSelectedHeroImage] = useState(null);
    const navigate = useNavigate();
    const editor = useRef(null);
    const placeholder = "Start typing...";

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedHeroImage(imageUrl);
        }
    };



    const handleBack = () => {
        navigate(-1);
    };
    return (
        <>


            <div className="w-[100%]  font-Poppins md11:w-[100%] md150:w-[100%] h-[100vh] flex flex-col items-center  relative overflow-hidden top-0 bottom-0  px-[30px] py-[30px] ">
                <div className="  flex   w-[100%] md11:h-[100vh] overflow-hidden md150:h-[90vh]  relative    rounded-[19px] border-[1px] border-[#005f94]">
                    <Sidebar />
                    <div className=" flex flex-col w-[100%] mt-[20px] gap-[30px]">
                        <div className="flex  p  gap-[10px] border-b-[1px] border-[#005f94] pl-[30px]  pb-[10px] md11:top-[4.1%]   md150:top-[5%] items-center    md11:text-[18px] md150:text-[20px] font-[600]">
                            <i
                                className="fa-solid fa-angle-up fa-rotate-270"
                                onClick={handleBack}
                            ></i>

                            <div
                                className=" font-Potua  flex items-center gap-[10px] cursor-pointer"
                                onClick={handleBack}
                            >
                                <p>LANDING  <span className=' pl-[5px]'> MANAGEMENT</span></p>

                            </div>
                        </div>
                        <div className=" pl-[20px] flex md11:w-[98%] md150:w-[97%] md11:gap-[15px]  md150:gap-[20px]">

                            <div className="   py-[20px] flex flex-col gap-[16px]  px-[20px] overflow-y-auto  md150:h-[70vh] md11:h-[77vh]     h-[67vh]  w-[100%] rounded-[19px] relative   border-[1px]  my-justify-center items-center  border-[#000000]">

                                <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div>

                                <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex flex-col gap-5">
                                        <p className="font-semibold text-2xl">Hero About us </p>

                                        <div className="flex  flex-wrap gap-5">
                                            <div className='  gap-[10px] flex flex-col w-[900px] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>

                                                <input
                                                    className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                    type="text"
                                                    placeholder="Title"
                                                    name="title"

                                                />


                                                <JoditEditor
                                                    ref={editor}
                                                    // value={blogContent}
                                                    // config={config}
                                                    tabIndex={2} // tabIndex of textarea
                                                    onBlur={(newContent) => setBlogContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                />

                                                <button
                                                    className="w-[100%] h-[35px] rounded-lg bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                >
                                                    Save
                                                </button>



                                            </div>
                                            <div className='  gap-[10px] flex flex-col w-[900px] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>

                                                <div
                                                    className="w-full border h-[50px] items-center flex outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                >
                                                    asd
                                                </div>

                                                <div
                                                    className="w-full border h-[140px] items-center flex outline-none border-[#005c95] rounded-lg p-2 text-[17px]"


                                                >


                                                </div>
                                                <div className=' w-[100%] flex justify-end'>
                                                    <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                        <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#005c95] text-[#fff] justify-center'
                                                        >
                                                            <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                        </button>
                                                        <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                        >
                                                            <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                        </button>
                                                    </div>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div>
                                <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> First Year Journey</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                                        {selectedHeroImage ? (
                                                            <img
                                                                src={selectedHeroImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputFaq"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>


                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Year' className='  font-[600] outline-none  text-[16px] flex w-[100%] h-[100%]'
                                                        type='number'
                                                        name="Year"

                                                    />
                                                </div>
                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"

                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"

                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                >
                                                    Save
                                                </button>
                                            </div>

                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={image1} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >

                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'

                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Second Year Journey</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                                        {selectedHeroImage ? (
                                                            <img
                                                                src={selectedHeroImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputFaq"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>


                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Year' className='  font-[600] outline-none  text-[16px] flex w-[100%] h-[100%]'
                                                        type='number'
                                                        name="Year"

                                                    />
                                                </div>
                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"

                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"

                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                >
                                                    Save
                                                </button>
                                            </div>

                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={image1} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >

                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'

                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Third Year Journey</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                                        {selectedHeroImage ? (
                                                            <img
                                                                src={selectedHeroImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputFaq"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>


                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Year' className='  font-[600] outline-none  text-[16px] flex w-[100%] h-[100%]'
                                                        type='number'
                                                        name="Year"

                                                    />
                                                </div>
                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"

                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"

                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                >
                                                    Save
                                                </button>
                                            </div>

                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={image1} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >

                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'

                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Four Year Journey</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                                        {selectedHeroImage ? (
                                                            <img
                                                                src={selectedHeroImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputFaq"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>


                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Year' className='  font-[600] outline-none  text-[16px] flex w-[100%] h-[100%]'
                                                        type='number'
                                                        name="Year"

                                                    />
                                                </div>
                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"

                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"

                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                >
                                                    Save
                                                </button>
                                            </div>

                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={image1} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >

                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'

                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                    </div>
                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Core Values</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[300px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex  flex-col  gap-2">
                                                    <div className=' flex justify-between w-[84%] '>
                                                        <p>
                                                            main icon
                                                        </p>
                                                        <p>
                                                            hover icon
                                                        </p>
                                                    </div>
                                                    <div className=' flex w-[100%] gap-[10px]'>


                                                        <div
                                                            className="h-[100px] w-[150px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                            onClick={() => document.getElementById("imageInputFaq").click()}
                                                        >
                                                            {selectedHeroImage ? (
                                                                <img
                                                                    src={selectedHeroImage}
                                                                    alt="Selected"
                                                                    className="h-full w-full object-cover rounded-lg"
                                                                />
                                                            ) : (
                                                                <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                            )}
                                                            <input
                                                                id="imageInputFaq"
                                                                type="file"
                                                                accept="image/*"
                                                                style={{ display: "none" }}
                                                                onChange={handleImageChange}
                                                            />
                                                        </div>
                                                        <div
                                                            className="h-[100px] w-[150px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                            onClick={() => document.getElementById("imageInputFaq").click()}
                                                        >
                                                            {selectedHeroImage ? (
                                                                <img
                                                                    src={selectedHeroImage}
                                                                    alt="Selected"
                                                                    className="h-full w-full object-cover rounded-lg"
                                                                />
                                                            ) : (
                                                                <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                            )}
                                                            <input
                                                                id="imageInputFaq"
                                                                type="file"
                                                                accept="image/*"
                                                                style={{ display: "none" }}
                                                                onChange={handleImageChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"

                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"

                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                >
                                                    Save
                                                </button>
                                            </div>

                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>
                                                <div className="flex  flex-col  gap-2">
                                                    <div className=' flex justify-between w-[84%] '>
                                                        <p>
                                                            main icon
                                                        </p>
                                                        <p>
                                                            hover icon
                                                        </p>
                                                    </div>
                                                    <div className=' flex w-[100%] gap-[10px]'>


                                                        <div
                                                            className="h-[100px] w-[150px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                            onClick={() => document.getElementById("imageInputFaq").click()}
                                                        >

                                                            <img
                                                                src={image1}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />

                                                        </div>
                                                        <div
                                                            className="h-[100px] w-[150px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                            onClick={() => document.getElementById("imageInputFaq").click()}
                                                        >

                                                            <img
                                                                src={image2}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />

                                                        </div>
                                                    </div>
                                                </div>



                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >

                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'

                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                    </div>
                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Life At infinite square</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                                        {selectedHeroImage ? (
                                                            <img
                                                                src={selectedHeroImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputFaq"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>




                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                >
                                                    Save
                                                </button>
                                            </div>

                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={image1} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'

                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                    </div>


                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> In the Spotlight</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[100px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                                        {selectedHeroImage ? (
                                                            <img
                                                                src={selectedHeroImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputFaq"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"

                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"

                                                >

                                                </textarea>

                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='News Link' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"

                                                    />
                                                </div>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                >
                                                    Save
                                                </button>
                                            </div>

                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[100px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={image1} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>



                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"


                                                >

                                                </div>
                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >

                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'

                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                    </div>

                                    <div className="flex flex-col  w-[100%] gap-5">

                                        <div className="flex flex-col gap-5">
                                            <p className="font-semibold text-2xl">Blogs </p>

                                            <div className="flex  flex-wrap gap-5">
                                                <div className='  gap-[10px] flex flex-col w-[900px] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                                        {selectedHeroImage ? (
                                                            <img
                                                                src={selectedHeroImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputFaq"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                    <input
                                                        className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                        type="text"
                                                        placeholder="Link"
                                                        name="title"

                                                    />


                                                    <JoditEditor
                                                        ref={editor}
                                                        // value={blogContent}
                                                        // config={config}
                                                        tabIndex={2} // tabIndex of textarea
                                                        onBlur={(newContent) => setBlogContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                    />

                                                    <button
                                                        className="w-[100%] h-[35px] rounded-lg bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"

                                                    >
                                                        Save
                                                    </button>



                                                </div>
                                                <div className='  gap-[10px] flex flex-col w-[900px] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                              
                                                            <img
                                                                src={image2}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                            
                                                    </div>
                                                    <div
                                                        className="w-full border h-[50px] items-center flex outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                    >
                                                        link
                                                    </div>

                                                    <div
                                                        className="w-full border h-[140px] items-center flex outline-none border-[#005c95] rounded-lg p-2 text-[17px]"


                                                    >


                                                    </div>
                                                    <div className=' w-[100%] flex justify-end'>
                                                        <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                            <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#005c95] text-[#fff] justify-center'
                                                            >
                                                                <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                            </button>
                                                            <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                            >
                                                                <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                            </button>
                                                        </div>
                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div></div>
                    </div>
                </div>
            </div>
            {/* 
            <NextUIModal isOpen={selectedmodalopen} onOpenChange={handleModalclose}>
                <ModalContent className="md:max-w-[350px] max-w-[333px] relative  flex justify-center !py-0 mx-auto  h-[300px] shadow-delete ">
                    {(handleModalclose) => (
                        <>
                            <div className="relative w-[100%] h-[100%] ">
                                <div className="relative  w-[100%] h-[100%]">
                                    <div className="w-[100%] flex gap-7 flex-col">
                                        <div className="w-[100%] mt-[30px] p-[10px] mx-auto flex justify-center s">
                                            <i className=" text-[80px] text-[red] shadow-delete-icon rounded-full fa-solid fa-circle-xmark"></i>
                                        </div>
                                        <div className=" mx-auto justify-center flex text-[28px] font-[500]  font-Montserrat ">
                                            <p>Are you sure ?</p>
                                        </div>
                                        <div className="absolute bottom-0 flex w-[100%]">
                                            <div
                                                className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[red] rounded-bl-[10px] text-[#fff] font-[600]  font-Montserrat  text-[20px]"
                                                onClick={handleDelete}
                                            >
                                                <p>Delete</p>
                                            </div>
                                            <div
                                                className="w-[50%] cursor-pointer flex justify-center items-center py-[10px]  bg-[#26b955] rounded-br-[10px] text-[#fff] font-[600]  font-Montserrat  text-[20px]"
                                                onClick={handleModalclose}
                                            >
                                                <p>Cancel</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </ModalContent>
            </NextUIModal>

            <NextUIModal
                isOpen={isBlogmodalopen}

            >
                <ModalContent className="md:max-w-[1000px] max-w-[850px] relative flex justify-center !p-[20px] mx-auto h-[680px] shadow-delete">
                    <div className=" flex justify-center bg-white z-[10] rounded-tr-[10px] cursor-pointer gap-[5px] px-[10px] font-Poppins border-l-[1px]  rounded-bl-[5px] border-b-[1px] border-[#fc3b3b] absolute top-[0px] right-0 items-center py-[5px] text-red-600 text-[17px]" onClick={handleBlogDetailsclose}>
                        <i className="fa-solid fa-circle-xmark"></i>
                        Close
                    </div>

                    <div className="relative w-[100%] p-[10px] h-[100%]">
                        <div className="flex gap-[20px] flex-col w-[100%]">
                            <div
                                className="h-[240px] w-[100%] border-[#005c95] border-[1.8px] justify-center items-center rounded-[8px] flex cursor-pointer"
                                onClick={() => document.getElementById("blogImageInput").click()}
                            >
                                {selectedBlogDetailsImage ? (
                                    <img
                                        src=""
                                        alt="Selected"
                                        className="h-full w-full object-cover rounded-[8px]"
                                    />
                                ) : (
                                    <img
                                        src={selectedBlog?.image}
                                        alt="Selected"
                                        className="h-full w-full object-cover rounded-[8px]"
                                    />
                                )}
                                <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                <input
                                    id="blogImageInput"
                                    type="file"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handleBlogDetailsImageChange}
                                />
                            </div>


                            <JoditEditor
                                ref={editor}
                                // value={blogContent}
                                // config={config}
                                tabIndex={2} // tabIndex of textarea
                                onBlur={(newContent) => setBlogContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            />

                        </div>
                        <div
                            className="w-[100%] h-[45px] mt-[30px] text-[20px] rounded-md mx-auto cursor-pointer flex justify-center items-center text-[#fff]  font-Poppins  font-[600]  bg-[#005f94]  active:scale-95 transition-transform duration-150"
                            onClick={handleBlogDetailsSubmit}
                        >
                            <p>Save</p>
                        </div>
                    </div>
                </ModalContent>
            </NextUIModal> */}



        </>
    )
}
