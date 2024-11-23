"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import CustomModal from "@/components/ui/modal";

const services = [
  {
    num: "01",
    title: "Android Development",
    description:
      "Expertise in building feature-rich, high-performance Android apps with a focus on user-friendly interfaces and seamless performance. Proficient in Kotlin and Compose, delivering customized solutions tailored to meet your business needs.",
    href: "",
  },
  {
    num: "02",
    title: "AI Models",
    description:
      "Developing advanced AI models that bring innovation and automation to various industries. From machine learning to natural language processing, I create intelligent systems that enhance decision-making and optimize processes.",
    href: "",
  },
  {
    num: "03",
    title: "Web Development",
    description:
      "Creating responsive, modern websites and web applications with a focus on aesthetics, usability, and performance. Using the latest web technologies, I ensure a seamless experience across all devices.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Development",
    description:
      "Designing intuitive and visually appealing user interfaces with a focus on enhancing the user experience. I ensure that your digital products are not only beautiful but also functional and easy to navigate.",
    href: "",
  },
];

const projects = [
  {
    Heading: "Exploring the Future of Technology",
    Body: "This project dives into emerging technologies like AI, blockchain, and quantum computing, examining their impact on society.",
    Author: "John Doe",
    AuthorImage: "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    Images: [
      '/assets/mobile.jpeg',
      '/assets/mobile.jpeg'
    ],
  },
  {
    Heading: "Sustainable Energy Solutions",
    Body: "A comprehensive analysis of renewable energy sources and sustainable practices to combat climate change.",
    Author: "Jane Smith",
    AuthorImage: "https://example.com/images/jane_smith.jpg",
    Images: [
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg",
      "https://cdn.pixabay.com/photo/2024/10/17/16/14/waterfall-9128051_960_720.jpg"
      
    ],
  },
  {
    Heading: "Revitalizing Urban Spaces",
    Body: "An urban development project aimed at transforming public spaces for better community engagement.",
    Author: "Alice Johnson",
    AuthorImage: "https://example.com/images/alice_johnson.jpg",
    Images: [
      "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_960_720.jpg",
      "https://cdn.pixabay.com/photo/2024/10/17/16/14/waterfall-9128051_960_720.jpg"
    ],
  },
  {
    Heading: "Advancements in Health Tech",
    Body: "An exploration of how modern technology is revolutionizing healthcare and patient experiences.",
    Author: "Michael Lee",
    AuthorImage: "https://example.com/images/michael_lee.jpg",
    Images: [
      "https://example.com/images/project4_img1.jpg",
      "https://example.com/images/project4_img2.jpg",
    ],
  },
];

const Services = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        projects={projects}
      ></CustomModal>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex-1 flex flex-col justify-center gap-6 group"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      onClick={handleOpenModal}
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/70">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
