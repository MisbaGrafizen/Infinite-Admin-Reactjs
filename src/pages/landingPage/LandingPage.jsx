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

export default function LandingPage() {
    const navigate = useNavigate();

    // State Variables
    const [activeTab, setActiveTab] = useState("OptionA");
    const [selectedBlogImage, setSelectedBlogImage] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isBlogmodalopen, setBlogModalOpen] = useState(false);

    // Text Editor
    const editor = useRef(null);
    const placeholder = "Start typing...";

    // Function to navigate back
    const handleBack = () => {
        navigate(-1);
    };

    // Blog Image Upload Handler
    const handleBlogImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedBlogImage(URL.createObjectURL(file));
        }
    };

    // Blog Submission Handler
    const handleBlogSubmit = () => {
        if (!blogTitle || !blogDescription || !selectedBlogImage) {
            alert("Please fill in all fields!");
            return;
        }

        const newBlog = {
            title: blogTitle,
            description: blogDescription,
            image: selectedBlogImage,
        };

        setBlogs([...blogs, newBlog]);
        setBlogTitle("");
        setBlogDescription("");
        setSelectedBlogImage(null);
    };

    // Blog Detail Modal Open
    const handleBlogDetails = (blog) => {
        setSelectedBlog(blog);
        setBlogModalOpen(true);
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
                                <div className="flex flex-col  w-[100%] gap-5">
                                    {/* Blog Section */}

                                    {/* Blog Upload Section */}
                                    <div className="pl-[20px] flex w-[98%] gap-[20px]">
                                        <div className="py-[20px] flex flex-col gap-[16px] px-[20px] overflow-y-auto h-[67vh] w-[100%] rounded-[19px] border-[1px] border-[#000000]">
                                            <div className="flex flex-col w-[100%] gap-5">
                                                <p className="font-semibold text-2xl">Blogs</p>
                                                <div className="flex flex-wrap gap-5">
                                                    {/* Blog Upload Section */}
                                                    <div className="flex flex-col gap-4 w-[450px]">
                                                        <div className="flex gap-4">
                                                            {/* Image Upload */}
                                                            <div
                                                                className="h-[150px] w-[200px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                                onClick={() => document.getElementById("imageInputBlog").click()}
                                                            >
                                                                {selectedBlogImage ? (
                                                                    <img src={selectedBlogImage} alt="Selected" className="h-full w-full object-cover rounded-lg" />
                                                                ) : (
                                                                    <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                                )}
                                                                <input
                                                                    id="imageInputBlog"
                                                                    type="file"
                                                                    accept="image/*"
                                                                    style={{ display: "none" }}
                                                                    onChange={handleBlogImageChange}
                                                                />
                                                            </div>

                                                            {/* Blog Title */}
                                                            <div className="w-full flex flex-col">
                                                                <input
                                                                    className="w-full border border-black rounded-lg p-2 text-lg"
                                                                    type="text"
                                                                    placeholder="Heading"
                                                                    value={blogTitle}
                                                                    onChange={(e) => setBlogTitle(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* Blog Description Input */}
                                                        <textarea
                                                            className="w-full border border-black rounded-lg p-2 h-[142px]"
                                                            placeholder="Description"
                                                            value={blogDescription}
                                                            onChange={(e) => setBlogDescription(e.target.value)}
                                                        />

                                                        {/* Submit Button */}
                                                        <button
                                                            className="w-full h-[35px] rounded-md bg-[#005f94] text-white font-semibold cursor-pointer"
                                                            onClick={handleBlogSubmit}
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>

                                                    {/* Render Blogs */}
                                                    {blogs.map((item, index) => (
                                                        <div key={index} className="flex flex-col h-[300px] gap-[10px] border-[#005c95] border-[1.8px] rounded-[10px] p-[10px] w-[470px]">
                                                            <div className="flex flex-col w-[100%] gap-[10px]">
                                                                <div className="flex w-[100%]">
                                                                    <div className="h-[150px] w-[150px] border-[#005c95] border-[1.8px] rounded-[8px] flex">
                                                                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                                                                    </div>
                                                                    <div className="flex flex-col w-[290px] gap-[10px] px-[10px]">
                                                                        <p className="text-[15px] font-[500]">{item.title}</p>
                                                                        <p className="text-[13px] font-[400]">{item.description}</p>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    className="w-full h-[35px] rounded-md bg-[#005f94] text-white font-semibold"
                                                                    onClick={() => handleBlogDetails(item)}
                                                                >
                                                                    View Details
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div>

                                <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex flex-col gap-5">
                                        <p className="font-semibold text-2xl">Faq's</p>

                                        <div className="flex  flex-col gap-5">
                                            <div className=' gap-[10px] flex w-[100%] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                <div
                                                    className="h-[70px] w-[70px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                    onClick={() => document.getElementById("imageInputBlFaq").click()}
                                                >
                                                    {selectedFaqImage ? (
                                                        <img
                                                            src={selectedFaqImage}
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
                                                        onChange={handleFaqImageChange}
                                                    />
                                                </div>


                                                <div className=' flex flex-col gap-[10px]  w-[95%]'>
                                                    <input
                                                        className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                        type="text"
                                                        placeholder="Question"
                                                        name="question"
                                                        value={question}
                                                        onChange={(e) => setQuestion(e.target.value)}
                                                    />
                                                    <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[100px] text-[13px]"
                                                        type="text"
                                                        placeholder="Answer"
                                                        name="answer"
                                                        value={answer}
                                                        onChange={(e) => setAnswer(e.target.value)}
                                                    >

                                                    </textarea>
                                                    <div className=' flex justify-end w-[100%]'>
                                                        <button
                                                            className="w-[140px] h-[35px] rounded-lg bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                            onClick={handleFaqSubmit}
                                                        >
                                                            Save
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                            {faqs.map((item, index) => (
                                                <div key={index} className=' gap-[10px] flex w-[100%] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                    <div
                                                        className="h-[70px] w-[70px] border-[#005c95] overflow-hidden border rounded-lg flex items-center justify-center cursor-pointer"
                                                    >
                                                        <img className=" flex w-[100%] object-cover   h-[100%]" src={item?.image} />
                                                    </div>


                                                    <div className=' flex flex-col gap-[10px]  w-[95%]'>
                                                        <h1
                                                            className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[17px]"

                                                        >  {item?.question}</h1>
                                                        <div className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[100px] text-[13px]">
                                                            {item?.answer}
                                                        </div>
                                                        <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                            <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#005c95] text-[#fff] justify-center'
                                                                onClick={() => handleEditFaq(item)}>
                                                                <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                            </button>
                                                            <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                                onClick={() => handleModalOpen(null, item?._id, null, null, null)}>
                                                                <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                            </button>
                                                        </div>

                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div> */}


                                {/* <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex flex-col gap-5">
                                        <p className="font-semibold text-2xl">Quick Visa Getaways</p>

                                        <div className="flex flex-col gap-[10px]">
                              \
                                            <div className="flex gap-[10px]">
                                                <button
                                                    className={`flex w-[130px] h-[37px] text-[15px] rounded-lg items-center justify-center 
            ${activeTab === "VisaFree" ? "bg-[#005f94] text-white" : "border-[1.2px] border-[#005f94] text-[#005f94]"}`}
                                                    onClick={() => setActiveTab("VisaFree")}
                                                >
                                                    Visa Free
                                                </button>

                                                <button
                                                    className={`flex w-[130px] h-[37px] text-[15px] rounded-lg items-center justify-center 
            ${activeTab === "VisaonArrival" ? "bg-[#005f94] text-white" : "border-[1.2px] border-[#005f94] text-[#005f94]"}`}
                                                    onClick={() => setActiveTab("VisaonArrival")}
                                                >
                                                    Visa on Arrival
                                                </button>
                                            </div>

                              
                                            {activeTab === "VisaFree" && (
                                                <>
                                                    <div className="flex w-[100%] flex-wrap gap-[20px]">
                                                        
                                                        <div className="flex w-[210px] border-[1.2px] rounded-lg border-[#005c95] p-[10px] flex-col gap-[10px]">
                                                            <div
                                                                className="h-[170px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                                onClick={() => document.getElementById("imageInput").click()}
                                                            >
                                                                {selectedImage ? (
                                                                    <img
                                                                        src={selectedImage}
                                                                        alt="Selected"
                                                                        className="h-full w-full object-cover rounded-lg"
                                                                    />
                                                                ) : (
                                                                    <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                                )}
                                                                <input
                                                                    id="imageInput"
                                                                    type="file"
                                                                    accept="image/*"
                                                                    style={{ display: "none" }}
                                                                    onChange={handleImageChange}
                                                                />
                                                            </div>

                                                            <input
                                                                className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[16px]"
                                                                type="text"
                                                                placeholder="Enter Name"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleInputChange}
                                                            />
                                                            <button
                                                                className="w-full h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                                onClick={handleSubmit}
                                                            >
                                                                Save
                                                            </button>
                                                        </div>

                                                        {filteredGateways?.map((gateway) => (
                                                            <div key={gateway?.id} className="flex w-[210px] border-[1.2px] rounded-lg border-[#005c95] p-[10px] flex-col gap-[10px]">
                                                                <div className="h-[170px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center">
                                                                    <img
                                                                        src={gateway?.image}
                                                                        alt="Selected"
                                                                        className="h-full w-full object-cover rounded-lg"
                                                                    />
                                                                </div>
                                                                <p className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[16px]">
                                                                    {gateway.name}
                                                                </p>
                                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                                    <button className='  flex  h-[40px]  w-[70%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'>
                                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                                    </button>
                                                                    <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'>
                                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}

                                            {activeTab === "VisaonArrival" && (
                                                <>
                                                    <div className="flex w-[100%] flex-wrap gap-[20px]">

                                                        <div className="flex w-[210px] border-[1.2px] rounded-lg border-[#005c95] p-[10px] flex-col gap-[10px]">
                                                            <div
                                                                className="h-[170px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                                onClick={() => document.getElementById("imageInput").click()}
                                                            >
                                                                {selectedImage ? (
                                                                    <img
                                                                        src={selectedImage}
                                                                        alt="Selected"
                                                                        className="h-full w-full object-cover rounded-lg"
                                                                    />
                                                                ) : (
                                                                    <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                                )}
                                                                <input
                                                                    id="imageInput"
                                                                    type="file"
                                                                    accept="image/*"
                                                                    style={{ display: "none" }}
                                                                    onChange={handleImageChange}
                                                                />
                                                            </div>

                                                            <input
                                                                className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[16px]"
                                                                type="text"
                                                                placeholder="Enter Name"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleInputChange}
                                                            />
                                                            <button
                                                                className="w-full h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                                onClick={handleSubmit}
                                                            >
                                                                Save
                                                            </button>
                                                        </div>

                                                        {filteredGateways?.map((gateway) => (
                                                            <div key={gateway?.id} className="flex w-[210px] border-[1.2px] rounded-lg border-[#005c95] p-[10px] flex-col gap-[10px]">
                                                                <div className="h-[170px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center">
                                                                    <img
                                                                        src={gateway?.image}
                                                                        alt="Selected"
                                                                        className="h-full w-full object-cover rounded-lg"
                                                                    />
                                                                </div>
                                                                <p className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[16px]">
                                                                    {gateway?.name}
                                                                </p>
                                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                                    <button className='  flex  h-[40px]  w-[70%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'>
                                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                                    </button>
                                                                    <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'>
                                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div> */}



                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <NextUIModal
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
    );
}
