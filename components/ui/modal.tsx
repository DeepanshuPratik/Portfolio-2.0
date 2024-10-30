import React, { ReactNode, useState } from 'react';
import { Modal, Box, Typography, Button, Slider, IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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
    maxWidth: 600,
    maxHeight: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};



const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRightIcon />,
    prevArrow: <ArrowLeftIcon />,
};

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, images }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex: number) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };
    return <Modal open={open} onClose={onClose}>
        <Box sx={style}>
            <IconButton
                onClick={handlePrev}
                sx={{ position: 'absolute', left: 16 }}
                aria-label="previous image"
            >
                <ArrowLeftIcon />
            </IconButton>

            <Box component="img" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`}
                sx={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 1 }} />

            <IconButton
                onClick={handleNext}
                sx={{ position: 'absolute', right: 16 }}
                aria-label="next image"
            >
                <ArrowRightIcon />
            </IconButton>
        </Box>
    </Modal>
};

export default CustomModal;
