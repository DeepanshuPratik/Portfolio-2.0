import React, { ReactNode, useState } from "react";
import {
    Modal,
    Box,
    Button,
    Slider,
    IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from 'react-material-ui-carousel';


interface CarousalItem {
    Heading: string;
    Body: string;
    Author: string;
    AuthorImage: string;
    Images: string[];
}
interface CustomModalProps {
    open: boolean;
    onClose: () => void;
    // children?: ReactNode;
    projects: CarousalItem[];
}


const CustomModal: React.FC<CustomModalProps> = ({
    open,
    onClose,
    projects,
}) => {


const [currentIndex, setCurrentIndex] = useState<number>(0);

const handlePrev = () => {
    setCurrentIndex((prevIndex: number) =>
        prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
};
const handleNext = () => {
    setCurrentIndex((prevIndex: number) =>
        prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
};

return (
    <Modal open={open} onClose={onClose}>
        <>
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: "fixed",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    zIndex: 1300,
                }}
                aria-label="previous image"
            >
                <div className="w-20 h-20 rounded-full flex justify-center items-center bg-white hover:bg-accent transition-all duration-500">
                    <ArrowBackIosIcon />
                </div>
            </IconButton>

            {/* do not delete this code */}

            {/* <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[650px] md:h-[350px] max-w-[900px] bg-white shadow-lg p-4 rounded-lg overflow-y-auto">
                <Box className="flex items-center justify-center h-screen max-w-full max-h-full mx-auto">
                    <div className="flex flex-col md:flex-row w-full h-full p-4">
                        <div className="sm:w-full md:w-3/5 h-full flex items-center justify-center">
                            <Carousel
                                interval={3000}
                                animation="slide"
                                indicators={true}
                                stopAutoPlayOnHover={true}
                                navButtonsAlwaysVisible={false}
                                // className="w-full h-[303px]"
                                className="w-full h-full"
                                indicatorContainerProps={{
                                    className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10",
                                }}
                            >
                                {projects[currentIndex].Images.map((item, index) => (
                                    <div className="w-full h-[303px]"><img src={item} alt="" className="w-full h-full object-cover" /></div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="mx-5 mt-3 w-full md:w-3/5">
                            <h1 className="text-black font-extrabold text-xl">{projects[currentIndex].Heading}</h1>
                            <h2 className="text-black">{projects[currentIndex].Body}</h2>
                            <div className="flex flex-row items-center align-middle">
                                <img
                                    src={projects[currentIndex].AuthorImage}
                                    alt=""
                                    className="p-5 h-20 w-20 rounded-full"
                                />
                                <p className="w-3/5 text-black">
                                    {projects[currentIndex].Author}
                                </p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box> */}
                                                                                                
            <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] md:h-[80vh] max-w-[900px] bg-white shadow-lg p-4 rounded-lg overflow-y-auto">
                <Box className="flex items-center justify-center h-screen max-w-full max-h-full mx-auto">
                    <div className="flex flex-col md:flex-row w-full h-full p-4">
                        <div className="sm:w-full md:w-3/5 h-full flex items-center justify-center">
                            <Carousel
                                interval={3000}
                                animation="slide"
                                indicators={true}
                                stopAutoPlayOnHover={true}
                                navButtonsAlwaysVisible={false}
                                // className="w-full h-[303px]"
                                className="w-full h-full"
                                indicatorContainerProps={{
                                    className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10",
                                }}
                            >
                                {projects[currentIndex].Images.map((item, index) => (
                                    <div className="w-full h-full"><img src={item} alt="" className="w-full h-full object-cover" /></div>
                                    //h-full
                                ))}
                            </Carousel>
                        </div>
                        <div className="mx-5 mt-3 w-full md:w-3/5">
                            <h1 className="text-black font-extrabold text-xl">{projects[currentIndex].Heading}</h1>
                            <h2 className="text-black">{projects[currentIndex].Body}</h2>
                            <div className="flex flex-row items-center align-middle">
                                <img
                                    src={projects[currentIndex].AuthorImage}
                                    alt=""
                                    className="p-5 h-20 w-20 rounded-full"
                                />
                                <p className="w-3/5 text-black">
                                    {projects[currentIndex].Author}
                                </p>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: "fixed",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    zIndex: 1300,
                }}
                aria-label="next image"
            >
                <div className="w-20 h-20 rounded-full flex justify-center items-center bg-white hover:bg-accent  transition-all duration-500">
                    <ArrowForwardIosIcon />
                </div>
            </IconButton>
        </>
    </Modal>
);
};

export default CustomModal;
