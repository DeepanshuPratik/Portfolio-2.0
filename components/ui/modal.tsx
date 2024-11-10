import React, { ReactNode, useState } from 'react';
import { Modal, Box, Typography, Button, Slider, IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface CustomModalProps {
    open: boolean;
    onClose: () => void;
    // children?: ReactNode;
    images: string[];
}

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    height: '60vh',
    maxWidth: 800,
    maxHeight: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};


const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, images }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };
    return <Modal open={open} onClose={onClose} >
        <>
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'fixed',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    zIndex: 1300,
                }}
                aria-label="previous image"
            >
                <div className="w-20 h-20 rounded-full flex justify-center items-center bg-white hover:bg-accent  transition-all duration-500">
                    <ArrowBackIosIcon />
                </div>
            </IconButton>
            <Box sx={style} >
                <Box className="flex items-center justify-center h-screen max-w-full max-h-full mx-auto">
                    <img src={images[currentIndex]} alt={`image ${currentIndex}`} className="max-w-full max-h-full" />
                </Box>
            </Box>

            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'fixed',
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)',
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
};

export default CustomModal;
