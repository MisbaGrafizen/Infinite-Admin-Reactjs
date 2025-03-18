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
import { addVisaGateway, getVisaGateways } from '../../redux/action/landingManagement';
import { useDispatch, useSelector } from 'react-redux';

export default function LandingPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("OptionA");
    const [selectedImage, setSelectedImage] = useState(null);
    const [isBlogmodalopen, setBlogModalOpen] = useState(false);
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selectedBlogImage, setSelectedBlogImage] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [blogTitle, setBlogTitle] = useState("");
    const [blogDescription, setBlogDescription] = useState("");
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [selectedFaq, setSelectedFaq] = useState(null);
    const [rating, setRating] = useState(0);
    const [blogIdToDelete, setBlogIdToDelete] = useState(null);
    const [cloudImage, setCloudImage] = useState("");
    const [blogContent, setBlogContent] = useState("");
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [selectedmodalopen, setModalOpen] = useState(false);
    const [faqIdToDelete, setFaqIdToDelete] = useState(null);
    const [faqs, setFaqs] = useState([]);
    const [selectedFaqImage, setSelectedFaqImage] = useState(null);
    const [name, setName] = useState("");
    const [visaDescription, setVisaDescription] = useState("");
    const [role, setRole] = useState("");
    const [selectedVisaImage, setSelectedVisaImage] = useState(null);
    const [experts, setExperts] = useState([]);
    const [expertIdToDelete, setExpertIdToDelete] = useState(null);
    const [selectedVisa, setSelectedVisa] = useState(null);
    const [testimonialName, setTestimonialName] = useState("");
    const [testimonialDescription, setTestimonialDescription] = useState("");
    const [selectedTestimonial, setSelectedTestimonial] = useState(null);
    const [testimonials, setTestimonials] = useState([]);
    const [testimonialIdToDelete, setTestimonialIdToDelete] = useState(null);
    const [selectedTestimonialImage, setSelectedTestimonialImage] = useState(null);
    const [formData, setFormData] = useState({ name: "", type: "visa-free", image: null });
    const [gateways, setGateways] = useState([]);
    const [image, setImage] = useState(null);
    const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
    const [gallery, setGallery] = useState([]);
    const [galleryidToDelete, setGalleryIdToDelete] = useState(null);
    const [selectedBlogDetailsImage, setSelectedBlogDetailsImage] = useState(null);
    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [themes, setThemes] = useState([]);
    const [selectedTheme, setSelectedTheme] = useState(null);
    const [themeName, setThemeName] = useState("");
    const [themeImage, setThemeImage] = useState(null);
    const [selectedServiceImage, setSelectedServiceImage] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [services, setServices] = useState([]);
    const [serviceIdToDelete, setServiceIdToDelete] = useState(null);
    const [serviceTitle, setServiceTitle] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [themePackages, setThemePackages] = useState("");
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState(null);
    const [selectedHeroImage, setSelectedHeroImage] = useState(null);
    const [heroImage, setHeroImage] = useState("");
    const [selectedHero, setSelectedHero] = useState(null);
    const [calculations, setCalculations] = useState([]);
    const [selectedCalculation, setSelectedCalculation] = useState(null);
    const [calculationNumber, setCalculationNumber] = useState("");
    const [calculationDescription, setCalculationDescription] = useState("");
    const [selectedCalculationIcon, setSelectedCalculationIcon] = useState(null);
    const [visions, setVisions] = useState([]);
    const [selectedVision, setSelectedVision] = useState(null);
    const [visionName, setVisionName] = useState("");
    const [visionDescription, setVisionDescription] = useState("");
    const [selectedVisionImage, setSelectedVisionImage] = useState(null);
    const [banners, setBanners] = useState([]);
    const [selectedBanner, setSelectedBanner] = useState(null);
    const [ bannerImage, setBannerImage] = useState(null);


    const dispatch = useDispatch();

    const visaGateways = useSelector((state) => state.landing.visaGateways);


    const editor = useRef(null);
    const placeholder = "Start typing...";


    useEffect(() => {
        dispatch(getVisaGateways());
    }, [dispatch]);

    useEffect(() => {
        const fetchAboutUs = async () => {
            try {
                setLoading(true);
                // const aboutUsResponse = await ApiGet("/admin/about-us");
                // console.log("About Us Response:", aboutUsResponse);

                // if (aboutUsResponse?.AboutUs?.length > 0) {
                //     const aboutUsData = aboutUsResponse.AboutUs[0];
                //     setId(aboutUsData._id || null);
                //     setTitle(aboutUsData.title || "");
                //     setContent(aboutUsData.content || "");
                //     setImage(aboutUsData.image || null);

                //     console.log("State Updated with:", {
                //         id: aboutUsData._id || null,
                //         title: aboutUsData.title || "",
                //         content: aboutUsData.content || "",
                //         image: aboutUsData.image || null,
                //     });
                // }

                const blogsResponse = await ApiGet("/admin/blog");
                console.log("Blogs API Response:", blogsResponse);

                if (blogsResponse?.blog && Array.isArray(blogsResponse.blog)) {
                    setBlogs(blogsResponse.blog);
                } else {
                    console.error("Unexpected Blogs Response:", blogsResponse);
                    setError("Failed to load blogs. Unexpected response format.");
                }

                const serviceResponse = await ApiGet("/admin/service");
                console.log("serviceResponse", serviceResponse);
                setServices(
                    Array.isArray(serviceResponse?.data) ? serviceResponse.data : []
                );

                const productResponse = await ApiGet("/admin/categories");
                setProducts(productResponse.category || []);

                const heroSectionResponse = await ApiGet("/admin/hero-section");
                setHeroImage(heroSectionResponse.heroSection || []);

                const countingResponse = await ApiGet("/admin/calculation");
                setCalculations(countingResponse.data || []);

                const visionResponse = await ApiGet("/admin/section");
                setVisions(visionResponse.data || []);

                const themeResponse = await ApiGet("/admin/banner");
                setBanners(themeResponse.data || []);

                setLoading(false);
            } catch (err) {
                console.error("Error fetching About Us content:", err);
                setError("Failed to load About Us content.");
                setLoading(false);
            }
        };

        fetchAboutUs();
    }, []);

    console.log('blogs', blogs)


    const handleInputChange = (e) => {
        setFormData({ ...formData, name: e.target.value });
    };



    // const handleSubmit = async () => {
    //     if (!formData.name || !formData.image) {
    //         alert("Please fill all fields.");
    //         return;
    //     }
    //     const response = await dispatch(addVisaGateway(formData));
    //     if (response) {
    //         setFormData({ name: "", type: activeTab === "VisaFree" ? "visa-free" : "visa-arrival", image: null });
    //         setSelectedImage(null);
    //     }
    // };

    const handleSubmit = async () => {
        if (!formData.name || !formData.image) {
            alert("Please fill all fields.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("type", activeTab === "VisaFree" ? "visa-free" : "visa-arrival");
        formDataToSend.append("image", formData.image); // Ensure file is sent correctly

        console.log("Submitting Form Data:", formDataToSend);

        try {
            const response = await dispatch(addVisaGateway(formDataToSend));
            console.log('response', response)

            if (response.visaGateway) {
                alert("Data added successfully");
                setFormData({ name: "", type: activeTab === "VisaFree" ? "visa-free" : "visa-arrival", image: null });
                setSelectedImage(null);
            }
            window.location.reload();
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    // const handleDelete = async (id) => {
    //     await dispatch(deleteVisaGateway(id));
    // };


    const handleBack = () => {
        navigate(-1);
    };

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

    const handleCalculationImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded icon URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSelectedCalculationIcon(imageUrl);
        }
    };


    const handleProductImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded blog image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setProductImage(imageUrl);
        }
    };

    const handleVisionImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded blog image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSelectedVisionImage(imageUrl);
        }
    };



    const handleBannerImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded blog image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setBannerImage(imageUrl);
        }
    };

    const handleTestimonialImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded service image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSelectedTestimonialImage(imageUrl);
        }
    };


    const handleHeroImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSelectedHeroImage(imageUrl);
        }
    };

    const handleServiceImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded service image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSelectedServiceImage(imageUrl);
        }
    };



    const handleExpertImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file);
            console.log("Uploaded blog image URL:", cloudImg);
            setCloudImage(cloudImg);
            const imageUrl = URL.createObjectURL(file);
            setSelectedVisaImage(imageUrl);
        }
    };

    const handleBlogDetailsclose = () => {
        setBlogModalOpen(false)
    }

    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        try {
            // Upload image using your custom Cloudinary function
            const cloudImg = await cloudinaryUpload(file);

            console.log("Uploaded Image URL:", cloudImg);

            // Set form data with the uploaded image and dynamic type
            setFormData((prev) => ({
                ...prev,
                image: cloudImg,
                type: activeTab === "VisaFree" ? "visa-free" : "visa-arrival",
            }));

            // Local preview of the image
            setSelectedImage(URL.createObjectURL(file));
        } catch (error) {
            console.error("Image upload failed:", error);
        }
    };



    const handleStarClick = (index) => {
        setRating(index + 1); // Set rating based on clicked star index
    };


    const handleModalclose = () => {
        setModalOpen(false);
    };




    const handleBlogSubmit = async () => {
        try {

            const payload = {
                title: blogTitle,
                description: blogDescription,
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

    const handleServiceSubmit = async () => {
        try {

            const payload = {
                title: serviceTitle,
                description: serviceDescription,
                icon: cloudImage || selectedServiceImage,
            };
            console.log('payload', payload)

            if (selectedService) {
                await ApiPut(`/admin/service/${selectedService._id}`, payload);
            } else {
                await ApiPost("/admin/service", payload);
            }

            const seerviceResponse = await ApiGet("/admin/service");
            setServices(seerviceResponse?.data || []);
            resetServiceForm();
        } catch (err) {
            console.error("Error submitting blog:", err);
            setError("Failed to submit blog.");
        }
    };

    const handleVisionSubmit = async () => {
        try {

            const payload = {
                title: visionName,
                description: visionDescription,
                image: cloudImage || selectedVisionImage,
            };
            console.log('payload', payload)

            if (selectedVision) {
                await ApiPut(`/admin/section/${selectedVision._id}`, payload);
            } else {
                await ApiPost("/admin/section", payload);
            }

            const visionResponse = await ApiGet("/admin/section");
            setVisions(visionResponse?.data || []);
            resetVisionForm();
        } catch (err) {
            console.error("Error submitting blog:", err);
            setError("Failed to submit blog.");
        }
    };

    const handleProductSubmit = async () => {
        try {

            const payload = {
                name: productName,
                image: cloudImage || productImage,
            };
            console.log('payload', payload)

            if (selectedProduct) {
                await ApiPut(`/admin/category/${selectedProduct._id}`, payload);
            } else {
                await ApiPost("/admin/category", payload);
            }

            const productResponse = await ApiGet("/admin/categories");
            setProducts(productResponse?.category || []);
            resetProductForm();
        } catch (err) {
            console.error("Error submitting product:", err);
            setError("Failed to submit product.");
        }
    };

    const handleHeroImageSubmit = async () => {
        try {

            const payload = {
                image: cloudImage || selectedHeroImage,
            };
            console.log('payload', payload)

            if (selectedHero) {
                await ApiPut(`/admin/hero-section/${selectedHero._id}`, payload);
            } else {
                await ApiPost("/admin/hero-section", payload);
            }

            const heroSectionResponse = await ApiGet("/admin/hero-section");
            setHeroImage(heroSectionResponse?.heroSection || []);
            resetHeroSectionForm();
        } catch (err) {
            console.error("Error submitting blog:", err);
            setError("Failed to submit blog.");
        }
    };

    const handleCountingSubmit = async () => {
        try {

            const payload = {
                number: calculationNumber,
                description: calculationDescription,
                icon: cloudImage || selectedCalculationIcon,
            };
            console.log('payload', payload)

            if (selectedCalculation) {
                await ApiPut(`/admin/calculation/${selectedCalculation._id}`, payload);
            } else {
                await ApiPost("/admin/calculation", payload);
            }

            const countingResponse = await ApiGet("/admin/calculation");
            setCalculations(countingResponse?.data || []);
            resetCalculationForm();
        } catch (err) {
            console.error("Error submitting blog:", err);
            setError("Failed to submit blog.");
        }
    };


    const handleBannerImageSubmit = async () => {
        try {

            const payload = {
                image: cloudImage || bannerImage,
            };
            console.log('payload', payload)

            if (selectedBanner) {
                await ApiPut(`/admin/banner/${selectedBanner._id}`, payload);
            } else {
                await ApiPost("/admin/banner", payload);
            }

            const bannerResponse = await ApiGet("/admin/banner");
            setBanners(bannerResponse?.image || []);
            setBanners(null);
            setSelectedBanner(null);
        } catch (err) {
            console.error("Error submitting blog:", err);
            setError("Failed to submit blog.");
        }
    };


    const handleTestimonialSubmit = async () => {
        try {

            const payload = {
                name: testimonialName,
                description: testimonialDescription,
                image: cloudImage || selectedTestimonialImage,
            };
            console.log('payload', payload)

            if (selectedTestimonial) {
                await ApiPut(`/admin/testimonial/${selectedTestimonial._id}`, payload);
            } else {

                await ApiPost("/admin/testimonial", payload);
            }

            const testimonialResponse = await ApiGet("/admin/testimonials");
            setBlogs(testimonialResponse?.testimonial || []);
            resetTestimonialForm();
        } catch (err) {
            console.error("Error submitting blog:", err);
            setError("Failed to submit blog.");
        }
    };

    const handleVisaExpertSubmit = async () => {
        try {

            const payload = {
                name: name,
                description: visaDescription,
                role: role,
                image: cloudImage || selectedVisaImage,
            };
            console.log('payload', payload)

            if (selectedVisa) {
                await ApiPut(`/admin/visa-expert/${selectedVisa._id}`, payload);
            } else {
                await ApiPost("/admin/visa-expert", payload);
            }

            const productResponse = await ApiGet("/admin/visa-experts");
            setBlogs(productResponse?.blog || []);
            resetVisaExpertForm();
        } catch (err) {
            console.error("Error submitting blog:", err);
            setError("Failed to submit blog.");
        }
    };


    const handleBlogDetailsImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const cloudImg = await cloudinaryUpload(file); // Upload image to Cloudinary
            console.log("Uploaded blog details image URL:", cloudImg);
            setSelectedBlogDetailsImage(cloudImg);
        }
    };

    const handleBlogDetails = (blog) => {
        setSelectedBlog(blog);
        setBlogModalOpen(true)
    }

    const handleModalOpen = (blogId = null, faqId = null, visaId = null, testimonialId = null, imageId = null) => {
        setBlogIdToDelete(blogId);
        setFaqIdToDelete(faqId);
        setExpertIdToDelete(visaId);
        setTestimonialIdToDelete(testimonialId);
        setGalleryIdToDelete(imageId)
        setModalOpen(true);
    };


    console.log('selectedBlog?._id', selectedBlog?._id)
    const handleBlogDetailsSubmit = async () => {
        if (!selectedBlog?._id || !blogContent) {
            alert("All fields are required.");
            return;
        }

        const payload = {
            blogId: selectedBlog?._id,
            image: selectedBlogDetailsImage || selectedBlog.image,
            sections: [{ text: blogContent }],
        };
        console.log('payload', payload)

        try {
            const response = await ApiPost("/admin/blog-detail", payload);
            console.log('response', response)
            alert(response.message || "Blog Details Added Successfully!");
            setBlogModalOpen(false);
            setSelectedBlog("");
            setContent("");
        } catch (error) {
            console.error("Error adding blog details:", error);
            alert("Failed to add blog details.");
        }
    };


    const handleFaqSubmit = async () => {
        try {

            const formData = {
                question: question,
                answer: answer,
                image: cloudImage || selectedFaqImage,
            };

            if (selectedFaq) {
                await ApiPut(`/admin/faq/${selectedFaq._id}`, formData);
            } else {
                if (!question || !answer) {
                    alert(
                        "All fields are required. Please fill in all fields before submitting."
                    );
                    return;
                }
                await ApiPost("/admin/faq", formData);
            }

            const serviceResponse = await ApiGet("/admin/faqs");
            setFaqs(serviceResponse || []);
            resetFaqForm();
            //   window.location.reload();
        } catch (err) {
            console.error("Error submitting banner:", err);
            setError("Failed to submit banner.");
        }
    };


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

    const handleDeleteGalleryImage = async (imageId) => {
        try {
            await ApiDelete(`/admin/image/${imageId}`);

            setGallery((prevGallery) => prevGallery.filter((gallery) => gallery._id !== imageId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting gallery:", err);
            setError("Failed to delete gallery.");
        }
    };


    const handleDeleteFaq = async (faqId) => {
        try {
            await ApiDelete(`/admin/faq/${faqId}`);

            setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq._id !== faqId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting faq:", err);
            setError("Failed to delete faq.");
        }
    };


    const handleDeleteVisaExpert = async (visaId) => {
        try {
            await ApiDelete(`/admin/visa-expert/${visaId}`);

            setExperts((prevExpert) => prevExpert.filter((visa) => visa._id !== visaId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting expert:", err);
            setError("Failed to delete expert.");
        }
    };


    const handleDeleteTestimonial = async (testimonialId) => {
        try {
            await ApiDelete(`/admin/testimonial/${testimonialId}`);

            setTestimonials((prevTestimonial) => prevTestimonial.filter((testimonial) => testimonial._id !== testimonialId));

            setModalOpen(false);
        } catch (err) {
            console.error("Error deleting testimonial:", err);
            setError("Failed to delete testimonial.");
        }
    };


    const resetBlogForm = () => {
        setBlogTitle("");
        setBlogDescription("");
        setSelectedBlogImage(null);
        setSelectedBlog(null);
    };


    const resetCalculationForm = () => {
        setCalculationDescription("");
        setCalculationNumber("");
        setSelectedCalculationIcon(null);
        setSelectedCalculation(null);
    };

    const resetVisionForm = () => {
        setVisionDescription("");
        setVisionName("");
        setSelectedVisionImage(null);
        setSelectedVision(null);
    };


    const resetProductForm = () => {
        setProductName("");
        setProductImage(null);
        setSelectedProduct(null);
    };

    const resetServiceForm = () => {
        setServiceTitle("");
        setServiceDescription("");
        setSelectedServiceImage(null);
        setSelectedService(null);
    };

    const resetVisaExpertForm = () => {
        setName("");
        setVisaDescription("");
        setRole("");
        setSelectedVisaImage(null);
        setSelectedVisa(null);
    };

    const resetTestimonialForm = () => {
        setTestimonialName("");
        setTestimonialDescription("");
        setRating("");
        setSelectedTestimonialImage(null);
        setSelectedTestimonial(null);
    };

    const resetFaqForm = () => {
        setQuestion("");
        setAnswer("");
        setSelectedFaqImage("");
        setSelectedFaq(null);
    };

    const resetHeroSectionForm = () => {
        setSelectedHeroImage("");
        setSelectedHero(null);
    };

    const handleEditBlog = (blog) => {
        setBlogTitle(blog.title);
        setBlogDescription(blog.description);
        setSelectedBlogImage(blog.image);
        setSelectedBlog(blog);
    };

    const handleEditGalleryImage = (galleryImage) => {
        setImage(galleryImage.image);
        setSelectedGalleryImage(galleryImage);
    };


    const handleEditFaq = (faq) => {
        setQuestion(faq.title);
        setAnswer(faq.description);
        setSelectedFaqImage(faq.image);
        setSelectedFaq(faq);
    };

    const handleEditVisaExpert = (visa) => {
        setName(visa.name);
        setVisaDescription(visa.description);
        setRole(visa.role);
        setSelectedVisaImage(visa.image);
        setSelectedVisa(visa);
    };

    const handleEditTestimonial = (testimonial) => {
        setTestimonialName(testimonial.title);
        setTestimonialDescription(testimonial.description);
        setRating(testimonial.rating);
        setSelectedTestimonialImage(testimonial.image);
        setSelectedTestimonial(testimonial);
    };

    const handleDelete = () => {
        if (blogIdToDelete) {
            handleDeleteBlog(blogIdToDelete);
        } else if (faqIdToDelete) {
            handleDeleteFaq(faqIdToDelete);
        } else if (expertIdToDelete) {
            handleDeleteVisaExpert(expertIdToDelete);
        } else if (testimonialIdToDelete) {
            handleDeleteTestimonial(testimonialIdToDelete);
        } else if (galleryidToDelete) {
            handleDeleteGalleryImage(galleryidToDelete)
        }
    };


    const filteredGateways = (Array.isArray(gateways) ? gateways : [])?.filter(gateway =>
        activeTab === "VisaFree" ? gateway.type === "visa-free" : gateway.type === "visa-arrival"
    );


    console.log('filteredGateways', filteredGateways)

    const handleThemeImageChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        try {
            const uploadedImage = await cloudinaryUpload(file);
            setThemeImage(uploadedImage);
        } catch (error) {
            console.error("Image upload failed:", error);
        }
    };

    const handleThemeSubmit = async () => {
        if (!themeName || !themeImage || !themePackages) {
            alert("All fields are required.");
            return;
        }

        const payload = { name: themeName, image: themeImage, packages: themePackages };

        try {
            if (selectedTheme) {
                await ApiPut(`/admin/theme/${selectedTheme._id}`, payload);
            } else {
                await ApiPost("/admin/theme", payload);
            }
            const themeResponse = await ApiGet("/admin/themes");
            setThemes(themeResponse);
            resetThemeForm();
        } catch (error) {
            console.error("Error submitting theme:", error);
        }
    };

    const handleEditTheme = (theme) => {
        setThemeName(theme.name);
        setThemeImage(theme.image);
        setThemePackages(theme.packages);
        setSelectedTheme(theme);
    };

    const handleDeleteTheme = async (themeId) => {
        try {
            await ApiDelete(`/admin/theme/${themeId}`);
            setThemes((prevThemes) => prevThemes.filter((theme) => theme._id !== themeId));
        } catch (error) {
            console.error("Error deleting theme:", error);
        }
    };

    const resetThemeForm = () => {
        setThemeName("");
        setThemeImage(null);
        setThemePackages("");
        setSelectedTheme(null);
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
                                        <p className="font-semibold text-2xl">Hero Slider </p>

                                        <div className="flex  flex-wrap gap-5">
                                            <div className=' gap-[10px] flex w-fit flex-col p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                <div
                                                    className="h-[170px] w-[170px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
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
                                                        onChange={handleHeroImageChange}
                                                    />
                                                </div>

                                                <button
                                                    className="w-[100%] h-[35px] rounded-lg bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleHeroImageSubmit}
                                                >
                                                    Save
                                                </button>



                                            </div>
                                            {Array.isArray(heroImage) && heroImage.map((item, index) => (
                                                <div key={index} className=' gap-[10px] flex w-fit flex-col p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                <div
                                                    className="h-[170px] w-[170px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                    onClick={() => document.getElementById("imageInputBlFaq").click()}
                                                >

                                                    <img
                                                        src={item?.image}
                                                        alt="Selected"
                                                        className="h-full w-full object-cover rounded-lg"
                                                    />

                                                </div>


                                                <div className=' flex gap-[10px] justify-end w-[100%]'>
                                                    <button className='  flex  h-[35px]  w-[70%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'>
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[35px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'>
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div>


                                <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex flex-col gap-5">
                                        <p className="font-semibold text-2xl">Founder Vison</p>

                                        <div className="flex  flex-col gap-5">
                                            <div className=' gap-[10px] flex w-[100%] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                <div
                                                    className="h-[250px] w-[250px] border-[#005c95] border rounded-lg flex items-center justify-center cursor-pointer"
                                                    onClick={() => document.getElementById("imageInputVision").click()}
                                                >
                                                    {selectedVisionImage ? (
                                                        <img
                                                            src={selectedVisionImage}
                                                            alt="Selected"
                                                            className="h-full w-full object-cover rounded-lg"
                                                        />
                                                    ) : (
                                                        <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                    )}
                                                    <input
                                                        id="imageInputVision"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: "none" }}
                                                        onChange={handleVisionImageChange}
                                                    />
                                                </div>


                                                <div className=' flex flex-col gap-[10px]  w-[80%]'>
                                                    <input
                                                        className="w-full border outline-none border-[#005c95] rounded-lg p-2 text-[17px]"
                                                        type="text"
                                                        placeholder="Title"
                                                        name="title"
                                                        value={visionName}
                                                        onChange={(e) => setVisionName(e.target.value)}
                                                    />
                                                    <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[150px] text-[13px]"
                                                        type="text"
                                                        placeholder="Description"
                                                        name="description"
                                                        value={visionDescription}
                                                        onChange={(e) => setVisionDescription(e.target.value)}
                                                    >

                                                    </textarea>
                                                    <div className=' flex justify-end w-[100%]'>
                                                        <button
                                                            className="w-[140px] h-[35px] rounded-lg bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                            onClick={handleVisionSubmit}
                                                        >
                                                            Save
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                            {visions?.map((item, index) => (
                                            <div key={index} className=' gap-[10px] flex w-[100%] p-[10px] border-[#005c95]  rounded-lg border-[1.3px] '>
                                                <div
                                                    className="h-[250px] w-[250px] border-[#005c95] overflow-hidden border rounded-lg flex items-center justify-center cursor-pointer"
                                                >
                                                    <img className=" flex w-[100%] object-cover   h-[100%]" src={item?.image} />
                                                </div>


                                                <div className=' flex flex-col gap-[10px]  w-[80%]'>
                                                    <h1
                                                        className="w-full border outline-none border-[#005c95] rounded-lg p-2  h-[50px] text-[17px]"

                                                    > {item?.title} </h1>
                                                    <div className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[180px] text-[13px]">
                                                    {item?.description}
                                                    </div>
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
                                        ))}
                                        </div>
                                    </div>


                                </div>
                                <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div>
                                <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Main Banner</p>
                                        <div className=' flex flex-wrap gap-[20px] w-[100%]'>


                                            <div className=' flex   w-fit gap-[9px] p-[10px] rounded-lg flex-col border-[1.2px] border-[#005c95]'>

                                                <div className=' flex gap-[20px] '>


                                                    <div
                                                        className="h-[250px] w-[620px] border-[#005c95] border rounded-lg  flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputExpert").click()}
                                                    >
                                                        {bannerImage ? (
                                                            <img
                                                                src={bannerImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputExpert"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleBannerImageChange}
                                                        />
                                                    </div>

                                                    <div
                                                        className="h-[250px] w-[380px] border-[#005c95] border rounded-lg  flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputExpert").click()}
                                                    >
                                                        {selectedVisaImage ? (
                                                            <img
                                                                src={selectedVisaImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-3xl text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputExpert"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleBannerImageChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className=' w-[100%] justify-end flex'>


                                                    <button
                                                        className="w-[120px] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                        onClick={handleBannerImageSubmit}
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                            {banners?.map((item, index) => (
                                            <div key={index} className=' flex   w-fit gap-[9px] p-[10px] rounded-lg flex-col border-[1.2px] border-[#005c95]'>

                                                <div className=' flex gap-[20px] '>
                                                    <div
                                                        className="h-[250px] w-[620px] border-[#005c95] border rounded-lg  flex items-center justify-center cursor-pointer"

                                                    > 
                                                        <img
                                                            src={item?.image}
                                                            alt="Selected"
                                                            className="h-full w-full object-cover rounded-lg"
                                                        />

                                                    </div>

                                                    {/* <div
                                                        className="h-[250px] w-[380px] border-[#005c95] border rounded-lg  flex items-center justify-center cursor-pointer"

                                                    >

                                                        <img
                                                            src={image1}
                                                            alt="Selected"
                                                            className="h-full w-full object-cover rounded-lg"
                                                        />


                                                    </div> */}
                                                </div>
                                                <div className=' w-[100%] justify-end gap-[10px] flex'>

                                                    <button className='  flex  h-[40px]  w-[120px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                                <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div>
                                <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Infisquare in Numbers</p>
                                        <div className=' flex flex-wrap gap-[20px] w-[100%]'>
                                            <div className=' flex  w-[260px] gap-[9px] p-[10px] rounded-lg flex-col border-[1.2px] border-[#005c95]'>
                                                <div
                                                    className="h-[160px] w-[100%] rounded-lg border-[#005c95] border flex items-center justify-center cursor-pointer"
                                                    onClick={() => document.getElementById("imageInputService").click()}
                                                >
                                                    {selectedCalculationIcon ? (
                                                        <img
                                                            src={selectedCalculationIcon}
                                                            alt="Selected"
                                                            className="h-full w-full object-cover rounded-lg"
                                                        />
                                                    ) : (
                                                        <i className="text-[16px] text-[#005c95] fa-solid fa-plus"></i>
                                                    )}
                                                    <input
                                                        id="imageInputService"
                                                        type="file"
                                                        accept="image/*"
                                                        style={{ display: "none" }}
                                                        onChange={handleCalculationImageChange}
                                                    />

                                                </div>
                                                <div className=' flex-col gap-[7px] flex w-[100%]'>
                                                    <input
                                                        className="w-full border outline-none h-[60px] border-[#005c95] rounded-lg p-2 text-[19px]"
                                                        type="number"
                                                        placeholder="Enter Number"
                                                        name="number"
                                                        value={calculationNumber}
                                                        onChange={(e) => setCalculationNumber(e.target.value)}
                                                    />

                                                </div>
                                                <div className=' flex-col gap-[7px] flex w-[100%]'>
                                                    <input
                                                        className="w-full border outline-none h-[40px] border-[#005c95] rounded-lg p-2 text-[14px]"
                                                        type="text"
                                                        placeholder="Title "
                                                        name="description"
                                                        value={calculationDescription}
                                                        onChange={(e) => setCalculationDescription(e.target.value)}
                                                    />

                                                </div>

                                                <button
                                                    className="w-full h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleCountingSubmit}
                                                >
                                                    Save
                                                </button>

                                            </div>
                                            {calculations?.map((item, index) => (
                                            <div key={index} className=' flex  w-[260px] gap-[9px] p-[10px] rounded-lg flex-col border-[1.2px] border-[#005c95]'>
                                                <div
                                                    className="h-[160px] w-[100%] rounded-lg border-[#005c95] border flex items-center justify-center cursor-pointer"

                                                >

                                                    <img
                                                        src={item?.icon}
                                                        alt="Selected"
                                                        className="h-full w-full object-cover rounded-lg"
                                                    />

                                                </div>
                                                <div className=' flex-col gap-[7px] flex w-[100%]'>
                                                    <div
                                                        className="w-full border  items-center flex outline-none h-[60px] border-[#005c95] rounded-lg p-2 text-[19px]"

                                                    >
                                                    {item?.number}
                                                    </div>

                                                </div>
                                                <div className=' flex-col gap-[7px] flex w-[100%]'>
                                                    <div
                                                        className="w-full border outline-none h-[40px] border-[#005c95] rounded-lg p-2 text-[14px]"
                                                    >{item?.description}</div>

                                                </div>

                                                <div className=' flex gap-[10px]  w-[100%]'>
                                                    <button className='  flex  h-[40px]  w-[80%] gap-[10px] text-[14px] rounded-lg      items-center bg-[#005c95] text-[#fff] justify-center'
                                                    >
                                                        <i className="fa-regular fa-pen-to-square text-[17px]"></i>
                                                    </button>
                                                    <button className='  flex  h-[40px]  w-[55px] gap-[10px] text-[14px] rounded-lg      items-center bg-[#ff3b31] text-[#fff] justify-center'
                                                    >
                                                        <i className=" fa-solid fa-trash  text-[17px]"></i>
                                                    </button>
                                                </div>

                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div>



                                <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div>
                                <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Product</p>
                                        <div className=' flex flex-wrap gap-[20px] w-[100%]'>


                                            <div className=' flex  w-[230px] gap-[9px] p-[10px] rounded-lg flex-col border-[1.2px] border-[#005c95]'>

                                                <div className=' flex flex-col gap-[20px] '>


                                                    <div
                                                        className="h-[190px] w-[100%] border-[#005c95] border  rounded-[8px] flex items-center justify-center cursor-pointer"
                                                        onClick={() => document.getElementById("imageInputGallery").click()}
                                                    >
                                                        {productImage ? (
                                                            <img
                                                                src={productImage}
                                                                alt="Selected"
                                                                className="h-full w-full object-cover rounded-lg"
                                                            />
                                                        ) : (
                                                            <i className="text-[16px] text-[#005c95] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            id="imageInputGallery"
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: "none" }}
                                                            onChange={handleProductImageChange}
                                                        />

                                                    </div>
                                                    <div className=' flex-col gap-[7px] flex w-[100%]'>
                                                        <input
                                                            className="w-full border outline-none h-[40px] border-[#005c95] rounded-lg p-2 text-[15px]"
                                                            type="text"
                                                            placeholder="Enter product"
                                                            name="name"
                                                            value={productName}
                                                            onChange={(e) => setProductName(e.target.value)}
                                                        />

                                                    </div>


                                                </div>

                                                <button
                                                    className="w-full h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleProductSubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>

                                            {products?.map((item, index) => (
                                            <div key={index} className=' flex  w-[230px] gap-[9px] p-[10px] rounded-lg flex-col border-[1.2px] border-[#005c95]'>

                                                <div className=' flex gap-[20px] '>
                                                    <img
                                                        className="h-[190px] w-[100%] border-[#005c95] border  rounded-[8px] flex items-center justify-center cursor-pointer"
                                                        src={item?.image}
                                                    />
                                                </div>
                                                <div className=' flex-col gap-[7px] flex w-[100%]'>
                                                    <div
                                                        className="w-full border outline-none h-[40px] border-[#005c95] rounded-lg p-2 text-[15px]"
                                                    >{item?.name}</div>

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
                                         ))}
                                        </div>
                                    </div>
                                </div>

                                <div className=' flex w-[100%]  border-t-[1.5px] border-dashed border-[#005c95]'>
                                </div>
                                <div className="flex flex-col  w-[100%] gap-5">

                                    <div className="flex  flex-col gap-5">
                                        <p className="font-semibold text-2xl"> Services</p>
                                        <div className=' flex gap-[20px]  flex-wrap'>
                                            <div className=' flex flex-col gap-[10px] w-[290px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>



                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[140px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">
                                                        {selectedServiceImage ? (
                                                            <img src={selectedServiceImage} alt="Selected" className="w-full h-full object-cover" />
                                                        ) : (
                                                            <i className="text-[20px] font-[800] text-[#1f5091] fa-solid fa-plus"></i>
                                                        )}
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                                            onChange={handleServiceImageChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className=' flex border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                    <input placeholder='Title' className='   outline-none  text-[15px] flex w-[100%] h-[100%]'
                                                    type='text'
                                                    name="title"
                                                    value={serviceTitle}
                                                    onChange={(e) => setServiceTitle(e.target.value)}
                                                    />
                                                </div>
                                                <textarea className="w-full border outline-none border-[#005c95]  rounded-lg p-2  h-[100px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="description"
                                                    value={serviceDescription}
                                                    onChange={(e) => setServiceDescription(e.target.value)}
                                                >

                                                </textarea>
                                                <button
                                                    className="w-[100%] h-[35px] rounded-md bg-[#005f94] text-white font-[500] cursor-pointer active:scale-95 transition-transform duration-150"
                                                    onClick={handleServiceSubmit}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                            {services?.map((service, index) => (
                                            <div key={index} className=' flex flex-col gap-[10px] w-[290px] border-[1.2px] p-[10px] border-[#1f5091] rounded-[8px]'>

                                                <div className="flex flex-col justify-center items-center gap-2">

                                                    <div className="relative flex w-[100%] h-[140px] border-[1.2px] justify-center items-center border-[#1f5091] rounded-[8px] overflow-hidden">
                                                    
                                                            <img src={service?.icon} alt="Selected" className="w-[100px] h-[100px] " />
                                                    
                                                    </div>
                                                </div>

                                                <div className=' flex items-center border-[1.2px] h-[40px] px-[6px] overflow-hidden w-[100%]  border-[#1f5091] rounded-[8px]' >
                                                {service?.title}
                                                </div>
                                                <div className="w-full border outline-none overflow-y-auto border-[#005c95]  rounded-lg p-2  h-[100px] text-[13px]"
                                                    type="text"
                                                    placeholder="Description"
                                                    name="answer"

                                                >
                                                {service?.description}
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
                                        ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
            </NextUIModal>
        </>
    );
}
