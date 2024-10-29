"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

function SimpleDialog(props: { onClose: any; open: any }) {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Download Alert</DialogTitle>
      <DialogContent dividers>
        <p>Are you sure you want to Download?</p>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="success">
          Download
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const projects: Array<String> = [];
const CarouselModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [project, setPoject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperClass) => {
    // get current index
    const currentIndex = swiper.activeIndex;
    setPoject(projects[currentIndex]);
  };
  return (
    <div>
      <SimpleDialog open={open} onClose={handleClose}></SimpleDialog>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className="xl:h-[520px] mb-12"
        onSlideChange={handleSlideChange}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <WorkSliderBtns
          containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
          btnStyles="xl:bg-accent rounded hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
          iconsStyles=""
        />
      </Swiper>
    </div>
  );
};

export default CarouselModal;
