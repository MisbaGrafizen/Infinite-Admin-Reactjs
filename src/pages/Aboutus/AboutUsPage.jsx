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
import { ApiDelete, ApiGet, ApiPost, ApiPut } from '../../helper/axios';
import cloudinaryUpload from '../../helper/cloudinaryUpload';

export default function AboutUsPage() {
    const [selectedBlogImage, setSelectedBlogImage] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cloudImage, setCloudImage] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [blogIdToDelete, setBlogIdToDelete] = useState(null);
    const [selectedmodalopen, setModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [aboutUs, setAboutUs] = useState([]);
    const [selectedAboutUs, setSelectedAboutUs] = useState(null);
    const [aboutIdToDelete, setAboutIdToDelete] = useState(null);
    const [firstYear, setFirstYear] = useState([]);
    const [selectedFirstYear, setSelectedFirstYear] = useState(null);
    const [firstYearIdToDelete, setFirstYearIdToDelete] = useState(null);
    const [firstYearTitle, setFirstYearTitle] = useState("");
    const [firstYearDescription, setFirstYearDescription] = useState("");
    const [firstYearYear, setFirstYearYear] = useState("");
    const [firstYearImage, setFirstYearImage] = useState("");
    const [secondYear, setSecondYear] = useState([]);
    const [selectedSecondYear, setSelectedSecondYear] = useState(null);
    const [secondYearIdToDelete, setSecondYearIdToDelete] = useState(null);
    const [secondYearTitle, setSecondYearTitle] = useState("");
    const [secondYearDescription, setSecondYearDescription] = useState("");
    const [secondYearYear, setSecondYearYear] = useState("");
    const [secondYearImage, setSecondYearImage] = useState("");
    const [thirdYear, setThirdYear] = useState([]);
    const [selectedThirdYear, setSelectedThirdYear] = useState(null);
    const [thirdYearIdToDelete, setThirdYearIdToDelete] = useState(null);
    const [thirdYearTitle, setThirdYearTitle] = useState("");
    const [thirdYearDescription, setThirdYearDescription] = useState("");
    const [thirdYearYear, setThirdYearYear] = useState("");
    const [thirdYearImage, setThirdYearImage] = useState("");
    const [fourthYear, setFourthYear] = useState([]);
    const [selectedFourthYear, setSelectedFourthYear] = useState(null);
    const [fourthYearIdToDelete, setFourthYearIdToDelete] = useState(null);
    const [fourthYearTitle, setFourthYearTitle] = useState("");
    const [fourthYearDescription, setFourthYearDescription] = useState("");
    const [fourthYearYear, setFourthYearYear] = useState("");
    const [fourthYearImage, setFourthYearImage] = useState("");
    const [coreValues, setCoreValues] = useState([]);
    const [selectedCoreValue, setSelectedCoreValue] = useState(null);
    const [coreValueIdToDelete, setCoreValueIdToDelete] = useState(null);
    const [coreValueTitle, setCoreValueTitle] = useState("");
    const [coreValueDescription, setCoreValueDescription] = useState("");
    const [coreValueMainIcon, setCoreValueMainIcon] = useState("");
    const [coreValueHoverIcon, setCoreValueHoverIcon] = useState("");
    const [gallery, setGallery] = useState([]);
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [galleryIdToDelete, setGalleryIdToDelete] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [spotlight, setSpotlight] = useState([]);
    const [selectedSpotlight, setSelectedSpotlight] = useState(null);
    const [spotlightIdToDelete, setSpotlightIdToDelete] = useState(null);
    const [spotlightTitle, setSpotlightTitle] = useState("");
    const [spotlightDescription, setSpotlightDescription] = useState("");
    const [spotlightImage, setSpotlightImage] = useState("");
    const [spotlightLink, setSpotlightLink] = useState("");

    const navigate = useNavigate();
    const editor = useRef(null);
    const placeholder = "Start typing...";
    const config = useMemo(
        () => ({
          readonly: false,
          placeholder: placeholder || "Start typings...",
        }),
        [placeholder]
      );
    
      
          useEffect(() => {
              const fetchAboutUs = async () => {
                  try {
                      setLoading(true);
                      
                      const aboutUsResponse = await ApiGet("/admin/about-us");
                      console.log("AboutUs API Response:", aboutUsResponse);
                      setAboutUs(aboutUsResponse.AboutUs);
      
                      const FirstYearResponse = await ApiGet("/admin/first-year");
                      console.log("First Year API Response:", FirstYearResponse);
                      setFirstYear(FirstYearResponse.AboutUs);

                      const secondYearResponse = await ApiGet("/admin/second-year");
                      console.log("Second Year API Response:", secondYearResponse);
                      setSecondYear(secondYearResponse.AboutUs);

                      const thirdYearResponse = await ApiGet("/admin/third-year");
                      console.log("Third Year API Response:", thirdYearResponse);
                      setThirdYear(thirdYearResponse.AboutUs);
                      
                      const fourthYearResponse = await ApiGet("/admin/fourth-year");
                      console.log("Fourth Year API Response:", fourthYearResponse);
                      setFourthYear(fourthYearResponse.AboutUs);

                      const coreValueResponse = await ApiGet("/admin/core-value");
                      console.log("Core Value API Response:", coreValueResponse);
                      setCoreValues(coreValueResponse.coreValue);

                      const galleryResponse = await ApiGet("/admin/gallery");
                      console.log("Gallery API Response:", galleryResponse);
                      setGallery(galleryResponse.data);

                      const spotlightResponse = await ApiGet("/admin/spotlite");
                      console.log("Gallery API Response:", spotlightResponse);
                      setSpotlight(spotlightResponse.data);

                      const blogsResponse = await ApiGet("/admin/blog");
                      console.log("Blogs API Response:", blogsResponse);
      
                      if (blogsResponse?.blog && Array.isArray(blogsResponse.blog)) {
                          setBlogs(blogsResponse.blog);
                      } else {
                          console.error("Unexpected Blogs Response:", blogsResponse);
                          setError("Failed to load blogs. Unexpected response format.");
                      }
      
                  } catch (err) {
                      console.error("Error fetching About Us content:", err);
                      setError("Failed to load About Us content.");
                      setLoading(false);
                  }
              };
      
              fetchAboutUs();
          }, []);

    const handleBlogImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded blog image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSelectedBlogImage(imageUrl);
        }
    };

    const handleFirstYearImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded first image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setFirstYearImage(imageUrl);
        }
    };

    const handleSecondYearImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded second image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSecondYearImage(imageUrl);
        }
    };

    const handleThirdYearImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded third image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setThirdYearImage(imageUrl);
        }
    };

    const handleFourthYearImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded fourth image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setFourthYearImage(imageUrl);
        }
    };

    const handleMainIconChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded main icon URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setCoreValueMainIcon(imageUrl);
        }
    };

    const handleHoverIconChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded hover icon URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setCoreValueHoverIcon(imageUrl);
        }
    };

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded second image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const handleSpotlightImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded second image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSpotlightImage(imageUrl);
        }
    };


    const handleBlogSubmit = async () => {
        try {
            const payload = {
                title: blogTitle,
                description: blogContent,
                image: cloudImage || selectedBlogImage,
            };
            console.log('payload', payload)

            if (selectedBlog) {
                await ApiPut(`/admin/blog/${selectedBlog._id}`, payload);
            } else {
                // if (!blogTitle || !blogDescription || !cloudImage) {
                //     alert(
                //         "All fields are required. Please fill in all fields before submitting."
                //     );
                //     return;
                // }

                await ApiPost("/admin/blog", payload);
            }

            const blogsResponse = await ApiGet("/admin/blog");
            setBlogs(blogsResponse?.blog || []);
            resetBlogForm();
        } catch (err) {
            console.error("Error submitting blog:", err);
            setError("Failed to submit blog.");
        }
    };

    const handleAboutUsSubmit = async () => {
        try {
            const payload = {
                title: title,
                description: description,
            };
            console.log('payload', payload)

            if (selectedAboutUs) {
                await ApiPut(`/admin/about-us/${selectedAboutUs._id}`, payload);
            } else {
                await ApiPost("/admin/about-us", payload);
            }

            const aboutUsResponse = await ApiGet("/admin/about-us");
            setAboutUs(aboutUsResponse?.AboutUs || []);
            resetAboutUsForm();
        } catch (err) {
            console.error("Error submitting about us:", err);
            setError("Failed to submit about us.");
        }
    };

    const handleFirstYearSubmit = async () => {
        try {
            const payload = {
                title: firstYearTitle,
                description: firstYearDescription,
                image: cloudImage || firstYearImage,
                year: firstYearYear,
            };
            console.log('payload', payload)

            if (selectedFirstYear) {
                await ApiPut(`/admin/first-year/${selectedFirstYear._id}`, payload);
            } else {
                await ApiPost("/admin/first-year", payload);
            }

            const FirstYearResponse = await ApiGet("/admin/first-year");
            setFirstYear(FirstYearResponse?.AboutUs || []);
            resetFirstYearorm();
        } catch (err) {
            console.error("Error submitting first year:", err);
            setError("Failed to submit first year.");
        }
    };

    const handleSecondYearSubmit = async () => {
        try {
            const payload = {
                title: secondYearTitle,
                description: secondYearDescription,
                image: cloudImage || secondYearImage,
                year: secondYearYear,
            };
            console.log('payload', payload)

            if (selectedSecondYear) {
                await ApiPut(`/admin/second-year/${selectedSecondYear._id}`, payload);
            } else {
                await ApiPost("/admin/second-year", payload);
            }

            const secondYearResponse = await ApiGet("/admin/second-year");
            setSecondYear(secondYearResponse?.AboutUs || []);
            resetSecondYearForm();
        } catch (err) {
            console.error("Error submitting sedcond year:", err);
            setError("Failed to submit sedcond year.");
        }
    };

    const handleThirdYearSubmit = async () => {
        try {
            const payload = {
                title: thirdYearTitle,
                description: thirdYearDescription,
                image: cloudImage || thirdYearImage,
                year: thirdYearYear,
            };
            console.log('payload', payload)

            if (selectedThirdYear) {
                await ApiPut(`/admin/third-year/${selectedThirdYear._id}`, payload);
            } else {
                await ApiPost("/admin/third-year", payload);
            }

            const thirdYearResponse = await ApiGet("/admin/third-year");
            setThirdYear(thirdYearResponse?.AboutUs || []);
            resetThirdYearForm();
        } catch (err) {
            console.error("Error submitting third year:", err);
            setError("Failed to submit third year.");
        }
    }; 

    const handleFourthYearSubmit = async () => {
        try {
            const payload = {
                title: fourthYearTitle,
                description: fourthYearDescription,
                image: cloudImage || fourthYearImage,
                year: fourthYearYear,
            };
            console.log('payload', payload)

            if (selectedFourthYear) {
                await ApiPut(`/admin/fourth-year/${selectedFourthYear._id}`, payload);
            } else {
                await ApiPost("/admin/fourth-year", payload);
            }

            const fourthYearResponse = await ApiGet("/admin/fourth-year");
            setFourthYear(fourthYearResponse?.AboutUs || []);
            resetFourthYearForm();
        } catch (err) {
            console.error("Error submitting third year:", err);
            setError("Failed to submit third year.");
        }
    };

    const handleCoreValueSubmit = async () => {
        try {
            const payload = {
                title: coreValueTitle,
                description: coreValueDescription,
                mainIcon: cloudImage || coreValueMainIcon,
                hoverIcon: cloudImage || coreValueHoverIcon,
            };
            console.log('payload', payload)

            if (selectedCoreValue) {
                await ApiPut(`/admin/core-value/${selectedCoreValue._id}`, payload);
            } else {
                await ApiPost("/admin/core-value", payload);
            }

            const coreValueResponse = await ApiGet("/admin/core-value");
            setCoreValues(coreValueResponse?.coreValue || []);
            resetCoreValueForm();
        } catch (err) {
            console.error("Error submitting core value:", err);
            setError("Failed to submit core value.");
        }
    }; 

    const handleGallerySubmit = async () => {
        try {
            const payload = {
                image: cloudImage || selectedImage,
            };
            console.log('payload', payload)

            if (selectedGallery) {
                await ApiPut(`/admin/gallery/${selectedGallery._id}`, payload);
            } else {
                await ApiPost("/admin/gallery", payload);
            }

            const galleryResponse = await ApiGet("/admin/gallery");
            setSelectedGallery(galleryResponse?.data || []);
            resetGalleryForm();
        } catch (err) {
            console.error("Error submitting about us:", err);
            setError("Failed to submit about us.");
        }
    };

    const handleSpotlightSubmit = async () => {
        try {
            const payload = {
                name: spotlightTitle,
                description: spotlightDescription,
                image: cloudImage || spotlightImage,
                link: spotlightLink,
            };
            console.log('payload', payload)

            if (selectedSpotlight) {
                await ApiPut(`/admin/spotlite/${selectedSpotlight._id}`, payload);
            } else {
                await ApiPost("/admin/spotlite", payload);
            }

            const spotlightResponse = await ApiGet("/admin/spotlite");
            setSpotlight(spotlightResponse?.data || []);
            resetSpotlightForm();
        } catch (err) {
            console.error("Error submitting core value:", err);
            setError("Failed to submit core value.");
        }
    }; 


    const resetBlogForm = () => {
        setBlogTitle("");
        setBlogContent("");
        setSelectedBlogImage(null);
        setSelectedBlog(null);
    };

    const resetAboutUsForm = () => {
        setTitle("");
        setDescription("");
        setSelectedAboutUs(null);
    }

    const resetGalleryForm = () => {
        setSelectedImage(null);
        setSelectedGallery(null);
    }

    const resetFirstYearorm = () => {
        setFirstYearTitle("");
        setFirstYearDescription("");
        setFirstYearYear("");
        setFirstYearImage(null);
        setSelectedFirstYear(null);
    }

    const resetSecondYearForm = () => {
        setSecondYearTitle("");
        setSecondYearDescription("");
        setSecondYearYear("");
        setSecondYearImage(null);
        setSelectedSecondYear(null);
    }


    const resetThirdYearForm = () => {
        setThirdYearTitle("");
        setThirdYearDescription("");
        setThirdYearYear("");
        setThirdYearImage(null);
        setSelectedThirdYear(null);
    }


    const resetFourthYearForm = () => {
        setFourthYearTitle("");
        setFourthYearDescription("");
        setThirdYearYear("");
        setFourthYearImage(null);
        setSelectedFourthYear(null);
    }


    const resetCoreValueForm = () => {
        setCoreValueTitle("");
        setCoreValueDescription("");
        setCoreValueMainIcon(null);
        setCoreValueHoverIcon(null);
        setSelectedCoreValue(null);
    }



    const resetSpotlightForm = () => {
        setSpotlightTitle("");
        setSpotlightDescription("");
        setSpotlightLink("");
        setSpotlightImage(null);
        setSelectedSpotlight(null);
    }


    const handleEditBlog = (blog) => {
        setBlogTitle(blog.title);
        setBlogDescription(blog.description);
        setSelectedBlogImage(blog.image);
        setSelectedBlog(blog);
    };


    const handleEditAboutUs = (aboutUs) => {
        setTitle(aboutUs.title);
        setDescription(aboutUs.description);
        setSelectedAboutUs(aboutUs);
    };


    const handelEditGallery = (gallery) => {
        setSelectedImage(gallery.description);
        setSelectedGallery (gallery);
    };

    const handleEditFirstYear = (first) => {
        setFirstYearTitle(first.title);
        setFirstYearDescription(first.description);
        setFirstYearImage(first.image);
        setFirstYearYear(first.year);
        setSelectedFirstYear(first);
    };

    const handleEditSecondYear = (second) => {
        setSecondYearTitle(second.title);
        setSecondYearDescription(second.description);
        setSecondYearImage(second.image);
        setSecondYearYear(second.year);
        setSelectedSecondYear(second);
    };

    const handleEditThirdYear = (third) => {
        setThirdYearTitle(third.title);
        setThirdYearDescription(third.description);
        setThirdYearImage(third.image);
        setThirdYearYear(third.year);
        setSelectedThirdYear(third);
    };


    const handleEditFourthYear = (fourth) => {
        setFourthYearTitle(fourth.title);
        setFourthYearDescription(fourth.description);
        setFourthYearImage(fourth.image);
        setFourthYearYear(fourth.year);
        setSelectedFourthYear(fourth);
    };


    const handleEditCoreValue = (coreValue) => {
        setCoreValueTitle(coreValue.title);
        setCoreValueDescription(coreValue.description);
        setCoreValueMainIcon(coreValue.mainIcon);
        setCoreValueHoverIcon(coreValue.hoverIcon);
        setSelectedCoreValue(coreValue);
    };


    const handleEditSpotlight = (spotlight) => {
        setSpotlightTitle(spotlight.title);
        setSpotlightDescription(spotlight.description);
        setSpotlightLink(spotlight.link);
        setSpotlightImage(spotlight.image);
        setSelectedSpotlight(spotlight);
    };

    // const handleBlogDetails = (blog) => {
    //     setSelectedBlog(blog);
    //     setBlogModalOpen(true)
    // }

    // const handleModalOpen = (blogId = null, faqId = null, visaId = null, testimonialId = null, imageId = null) => {
    //     setBlogIdToDelete(blogId);
    //     setFaqIdToDelete(faqId);
    //     setExpertIdToDelete(visaId);
    //     setTestimonialIdToDelete(testimonialId);
    //     setGalleryIdToDelete(imageId)
    //     setModalOpen(true);
    // };


    // console.log('selectedBlog?._id', selectedBlog?._id)
    // const handleBlogDetailsSubmit = async () => {
    //     if (!selectedBlog?._id || !blogContent) {
    //         alert("All fields are required.");
    //         return;
    //     }

    //     const payload = {
    //         blogId: selectedBlog?._id,
    //         image: selectedBlogDetailsImage || selectedBlog.image,
    //         sections: [{ text: blogContent }],
    //     };
    //     console.log('payload', payload)

    //     try {
    //         const response = await ApiPost("/admin/blog-detail", payload);
    //         console.log('response', response)
    //         alert(response.message || "Blog Details Added Successfully!");
    //         setBlogModalOpen(false);
    //         setSelectedBlog("");
    //         setContent("");
    //     } catch (error) {
    //         console.error("Error adding blog details:", error);
    //         alert("Failed to add blog details.");
    //     }
    // };


    const handleDeleteBlog = async (blogId) => {
        try {
            await ApiDelete(`/admin/blog/${blogId}`);

            setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));

            setModalOpen(false);
            // const blogsResponse = await ApiGet("/admin/blog");
            // setBlogs(blogsResponse || []);
        } catch (err) {
            console.error("Error deleting blog:", err);
            setError("Failed to delete blog.");
        }
    };

    const handleDeleteAboutUs = async (aboutId) => {
        try {
            await ApiDelete(`/admin/about-us/${aboutId}`);

            setAboutUs((prevAbout) => prevAbout.filter((about) => about._id !== aboutId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting blog:", err);
            setError("Failed to delete blog.");
        }
    };

    const handleDeleteFirstYear = async (firstId) => {
        try {
            await ApiDelete(`/admin/first-year/${firstId}`);

            setFirstYear((preFirst) => preFirst.filter((first) => first._id !== firstId));

            setModalOpen(false);
  
        } catch (err) {
            console.error("Error deleting blog:", err);
            setError("Failed to delete blog.");
        }
    };


    const handleDeleteSecondYear = async (secondId) => {
        try {
            await ApiDelete(`/admin/second-year/${secondId}`);

            setSecondYear((preSecond) => preSecond.filter((second) => second._id !== secondId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting blog:", err);
            setError("Failed to delete blog.");
        }
    };

    const handleDeleteThirdYear = async (thirdId) => {
        try {
            await ApiDelete(`/admin/third-year/${thirdId}`);

            setThirdYear((preThird) => preThird.filter((third) => third._id !== thirdId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting blog:", err);
            setError("Failed to delete blog.");
        }
    };

    const handleDeleteFourthYear = async (fourthId) => {
        try {
            await ApiDelete(`/admin/fourth-year/${fourthId}`);

            setFourthYear((preFourth) => preFourth.filter((fourth) => fourth._id !== fourthId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting fourth year:", err);
            setError("Failed to delete fourth year.");
        }
    };


    const handleDeleteCoreValue = async (coreId) => {
        try {
            await ApiDelete(`/admin/core-value/${coreId}`);

            setCoreValues((preCoreValue) => preCoreValue.filter((coreValue) => coreValue._id !== coreId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting fourth year:", err);
            setError("Failed to delete fourth year.");
        }
    };

    const handleDeleteGallery = async (imageId) => {
        try {
            await ApiDelete(`/admin/gallery/${imageId}`);

            setGallery((preGallery) => preGallery.filter((gallery) => gallery._id !== imageId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting gallery image:", err);
            setError("Failed to delete gallery image.");
        }
    };

    const handleDeleteSpotlight = async (spotlightId) => {
        try {
            await ApiDelete(`/admin/spotlite/${spotlightId}`);

            setSpotlight((preSpotlight) => preSpotlight.filter((spotlight) => spotlight._id !== spotlightId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting gallery image:", err);
            setError("Failed to delete gallery image.");
        }
    };


    const handleModalOpen = (aboutId = null, firstId = null, secondId = null, thirdId  = null, fourthId = null, coreId = null, galleryId = null, spotlightId = null, blogId = null) => {
        setAboutIdToDelete(aboutId);
        setFirstYearIdToDelete(firstId);
        setSecondYearIdToDelete(secondId);
        setThirdYearIdToDelete(thirdId);
        setFourthYearIdToDelete(fourthId);
        setCoreValueIdToDelete(coreId);
        setGalleryIdToDelete(galleryId);
        setSpotlightIdToDelete(spotlightId);
        setBlogIdToDelete(blogId)
        setModalOpen(true);
      };
    


    const handleDelete = () => {
        if (aboutIdToDelete) {
            handleDeleteAboutUs(aboutIdToDelete);
        } else if (firstYearIdToDelete) {
            handleDeleteFirstYear(firstYearIdToDelete);
        } else if (secondYearIdToDelete) {
            handleDeleteSecondYear(secondYearIdToDelete);
        } else if (thirdYearIdToDelete) {
            handleDeleteThirdYear(thirdYearIdToDelete);
        } else if (fourthYearIdToDelete) {
            handleDeleteFourthYear(fourthYearIdToDelete);
        } else if (coreValueIdToDelete) {
            handleDeleteCoreValue(coreValueIdToDelete);
        } else if (galleryIdToDelete) {
            handleDeleteGallery(galleryIdToDelete);
        } else if (spotlightIdToDelete) {
            handleDeleteSpotlight(spotlightIdToDelete);
        } else if (blogIdToDelete) {
            handleDeleteBlog(blogIdToDelete);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleModalclose = () => {
        setModalOpen(false);
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
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                />


                                                <JoditEditor
                                                    ref={editor}
                                                    value={description}
                                                    config={config}
                                                    tabIndex={2} // tabIndex of textarea
                                                    onBlur={(newContent) => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                                                />

                                                <button
                                                    className="w-[100%] h-[35px] rounded-lg bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleAboutUsSubmit}
                                                >
                                                    Save
                                                </button>



                                            </div>
                                            {aboutUs? (
                                            <div className='  gap-[10px] flex flex-col w-[900px] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>

                                                <div
                                                    className="w-full border h-[50px] items-center flex outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                >
                                                    {aboutUs?.title}
                                                </div>

                                                <div
                                                    className="w-full border h-[180px] overflow-y-auto items-center flex outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                >
                                                {aboutUs?.description}
                                                </div>
                                                <div className=' w-[100%] flex justify-end'>
                                                    <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                        <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#005c95] text-[#fff] justify-center'
                                                        onClick={() => handleEditAboutUs(aboutUs)}
                                                        >
                                                            <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                        </button>
                                                        <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                        onClick={() => handleModalOpen(aboutUs._id, null, null, null, null, null, null, null, null)}
                                                        >
                                                            <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <p>Loading About Us...</p>
                                        )}
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
                                                        {firstYearImage ? (
                                                            <img
                                                                src={firstYearImage}
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
                                                            onChange={handleFirstYearImageChange}
                                                        />
                                                    </div>
                                                </div>


                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Year' className='  font-[600] outline-none  text-[16px] flex w-[100%] h-[100%]'
                                                        type='number'
                                                        name="Year"
                                                        value={firstYearYear}
                                                        onChange={(e) => setFirstYearYear(e.target.value)}
                                                    />
                                                </div>
                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"
                                                        value={firstYearTitle}
                                                        onChange={(e) => setFirstYearTitle(e.target.value)}
                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                    value={firstYearDescription}
                                                    onChange={(e) => setFirstYearDescription(e.target.value)}
                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleFirstYearSubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            {(Array.isArray(firstYear) ? firstYear : [firstYear]).map((item, index) => (
                                                <div key={index} className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={item?.image} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.year}
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.title}
                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >
                                                {item?.description}
                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    onClick={() => handleEditFirstYear(item)}
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                     onClick={() => handleModalOpen( null, item._id, null, null, null, null, null, null, null)}

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        ))}
                                        </div>
                                    </div>

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Second Year Journey</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputSecond").click()}
                                                    >
                                                        {secondYearImage ? (
                                                            <img
                                                                src={secondYearImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputSecond"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleSecondYearImageChange}
                                                        />
                                                    </div>
                                                </div>


                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Year' className='  font-[600] outline-none  text-[16px] flex w-[100%] h-[100%]'
                                                        type='number'
                                                        name="Year"
                                                        value={secondYearYear}
                                                        onChange={(e) => setSecondYearYear(e.target.value)}
                                                    />
                                                </div>
                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"
                                                        value={secondYearTitle}
                                                        onChange={(e) => setSecondYearTitle(e.target.value)}
                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                    value={secondYearDescription}
                                                    onChange={(e) => setSecondYearDescription(e.target.value)}
                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleSecondYearSubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            {(Array.isArray(secondYear) ? secondYear : [secondYear]).map((item, index) => (
                                            <div key={index} className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={item?.image} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.year}
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.title}
                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >
                                                {item?.description}
                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    onClick={() => handleEditSecondYear(item)}
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                     onClick={() => handleModalOpen( null, null, item._id, null, null, null, null, null, null)}
                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Third Year Journey</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputThird").click()}
                                                    >
                                                        {thirdYearImage ? (
                                                            <img
                                                                src={thirdYearImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputThird"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleThirdYearImageChange}
                                                        />
                                                    </div>
                                                </div>


                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Year' className='  font-[600] outline-none  text-[16px] flex w-[100%] h-[100%]'
                                                        type='number'
                                                        name="Year"
                                                        value={thirdYearYear}
                                                        onChange={(e) => setThirdYearYear(e.target.value)}
                                                    />
                                                </div>
                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"
                                                        value={thirdYearTitle}
                                                        onChange={(e) => setThirdYearTitle(e.target.value)}
                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                    value={thirdYearDescription}
                                                    onChange={(e) => setThirdYearDescription(e.target.value)}
                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleThirdYearSubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            {(Array.isArray(thirdYear) ? thirdYear : [thirdYear]).map((item, index) => (
                                            <div key={index} className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={item?.image} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.year}
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.title}
                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >
                                                {item?.description}
                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    onClick={() => handleEditThirdYear(item)}
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                     onClick={() => handleModalOpen( null, null, null, item._id, null, null, null, null, null)}
                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Four Year Journey</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFourth").click()}
                                                    >
                                                        {fourthYearImage ? (
                                                            <img
                                                                src={fourthYearImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputFourth"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleFourthYearImageChange}
                                                        />
                                                    </div>
                                                </div>


                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Year' className='  font-[600] outline-none  text-[16px] flex w-[100%] h-[100%]'
                                                        type='number'
                                                        name="Year"
                                                        value={fourthYearYear}
                                                        onChange={(e) => setFourthYearYear(e.target.value)}
                                                    />
                                                </div>
                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"
                                                        value={fourthYearTitle}
                                                        onChange={(e) => setFourthYearTitle(e.target.value)}
                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                    value={fourthYearDescription}
                                                    onChange={(e) => setFourthYearDescription(e.target.value)}
                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleFourthYearSubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            {(Array.isArray(fourthYear) ? fourthYear : [fourthYear]).map((item, index) => (
                                            <div key={index} className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={item?.image} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.year}
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.title}
                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                >
                                                {item?.description}
                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    onClick={() => handleEditFourthYear(item)}
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                     onClick={() => handleModalOpen( null, null, null, null, item._id, null, null, null, null)}

                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>
                                            ))}
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
                                                            onClick={() => document.getElementById("imageInputMainIcon").click()}
                                                        >
                                                            {coreValueMainIcon ? (
                                                                <img
                                                                    src={coreValueMainIcon}
                                                                    alt="Selected"
                                                                    className="h-full w-full object-cover rounded-lg"
                                                                />
                                                            ) : (
                                                                <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                            )}
                                                            <input
                                                                id="imageInputMainIcon"
                                                                type="file"
                                                                accept="image/*"
                                                                style={{ display: "none" }}
                                                                onChange={handleMainIconChange}
                                                            />
                                                        </div>
                                                        <div
                                                            className="h-[100px] w-[150px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                            onClick={() => document.getElementById("imageInputHoverIcon").click()}
                                                        >
                                                            {coreValueHoverIcon ? (
                                                                <img
                                                                    src={coreValueHoverIcon}
                                                                    alt="Selected"
                                                                    className="h-full w-full object-cover rounded-lg"
                                                                />
                                                            ) : (
                                                                <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                            )}
                                                            <input
                                                                id="imageInputHoverIcon"
                                                                type="file"
                                                                accept="image/*"
                                                                style={{ display: "none" }}
                                                                onChange={handleHoverIconChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"
                                                        value={coreValueTitle}
                                                        onChange={(e) => setCoreValueTitle(e.target.value)}
                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                    value={coreValueDescription}
                                                    onChange={(e) => setCoreValueDescription(e.target.value)}
                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleCoreValueSubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            {coreValues?.map((item, index) => (
                                            <div key={index} className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>
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
                                                                src={item?.mainIcon}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />

                                                        </div>
                                                        <div
                                                            className="h-[100px] w-[150px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                            onClick={() => document.getElementById("imageInputFaq").click()}
                                                        >

                                                            <img
                                                                src={item?.hoverIcon}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.title}
                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                >
                                                {item?.description}
                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    onClick={() => handleEditCoreValue(item)}
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                     onClick={() => handleModalOpen( null, null, null, null, null, item._id, null, null, null)}
                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        ))}
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
                                                        onClick={() => document.getElementById("imageInputGallery").click()}
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
                                                            id="imageInputGallery"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleImageChange}
                                                        />
                                                    </div>
                                                </div>




                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleGallerySubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            {gallery?.map((item, index) => (
                                            <div key={index} className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[200px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={item?.image} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>

                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    onClick={() => handelEditGallery(item)}
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                     onClick={() => handleModalOpen( null, null, null, null, null, null, item._id, null, null)}
                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        ))}
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
                                                        onClick={() => document.getElementById("imageInputSpotlight").click()}
                                                    >
                                                        {spotlightImage ? (
                                                            <img
                                                                src={spotlightImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputSpotlight"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleSpotlightImageChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="title"
                                                        value={spotlightTitle}
                                                        onChange={(e) => setSpotlightTitle(e.target.value)}
                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                    value={spotlightDescription}
                                                    onChange={(e) => setSpotlightDescription(e.target.value)}
                                                >

                                                </textarea>

                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='News Link' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                        type='text'
                                                        name="link"
                                                        value={spotlightLink}
                                                        onChange={(e) => setSpotlightLink(e.target.value)}
                                                    />
                                                </div>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleSpotlightSubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            {spotlight?.map((item, index) => (
                                            <div key={index} className=' flex flex-col gap-[10px] w-[320px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[100px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">

                                                        <img src={item?.image} alt="Selected" className="w-[100%] h-[100%] object-cover " />

                                                    </div>
                                                </div>



                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.name}
                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[130px] text-[13px]">
                                                {item?.description}
                                                </div>
                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {item?.link}
                                                </div>
                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    onClick={() => handleEditSpotlight(item)}
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                     onClick={() => handleModalOpen( null, null, null, null, null, null, null, item._id, null)}
                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        ))}
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
                                                        onClick={() => document.getElementById("imageInputBlog").click()}
                                                    >
                                                        {selectedBlogImage ? (
                                                            <img
                                                                src={selectedBlogImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
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
                                                    <input
                                                        className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                        type="text"
                                                        placeholder="Link"
                                                        name="title"
                                                        value={blogTitle}
                                                        onChange={(e) => setBlogTitle(e.target.value)}
                                                    />


                                                    <JoditEditor
                                                        ref={editor}
                                                        value={blogContent}
                                                        config={config}
                                                        tabIndex={2} // tabIndex of textarea
                                                        onBlur={(newContent) => setBlogContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                    />

                                                    <button
                                                        className="w-[100%] h-[35px] rounded-lg bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                        onClick={handleBlogSubmit}
                                                    >
                                                        Save
                                                    </button>



                                                </div>
                                                {blogs?.map((item, index) => (
                                                <div key={index} className='  gap-[10px] flex flex-col w-[900px] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                <div
                                                        className="h-[200px] w-[100%] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputFaq").click()}
                                                    >
                                              
                                                            <img
                                                                src={item?.image}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                            
                                                    </div>
                                                    <div
                                                        className="w-full border h-[50px] items-center flex outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                    >
                                                        {item?.title}
                                                    </div>

                                                    <div
                                                        className="w-full border h-[140px] items-center flex outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                    >
                                                    {item?.description}
                                                    </div>
                                                    <div className=' w-[100%] flex justify-end'>
                                                        <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                            <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#005c95] text-[#fff] justify-center'
                                                            onClick={() => handleEditBlog(item)}
                                                            >
                                                                <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                            </button>
                                                            <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                            onClick={() => handleModalOpen( null, null, null, null, null, null, null, null, item._id)}
                                                            >
                                                                <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                            </button>
                                                        </div>
                                                    </div>



                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div></div>
                    </div>
                </div>
            </div>
            
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
{/* 
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
