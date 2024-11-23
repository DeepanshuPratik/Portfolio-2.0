"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import { FormEvent, useRef, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import CustomSnackbar from "@/components/ui/snackBar";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '+91 7982054591' 
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'deepanshu.pratik@gmail.com' 
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Shakarpur, Delhi' 
  },
]

const Contact = () => {
  const [open, setOpen] = useState(false);
  const form = useRef(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpen(true);
    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            <CustomSnackbar
            open={open}
            message="Message sent successfully"
            severity="success"
            />
            // form?.current?.reset();
          },
          (error) => {
            <CustomSnackbar
            open={open}
            message="Failed to send email"
            severity="error"
            />
          }
        );
    }
  };
  return <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="py-6"
  >
    <div className="container mx-atuo">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        <div className="xl-w-[54%] order-2 xl:order-none">
          <form 
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
            <h3 className="text-4xl text-accent"> Let's work together</h3>
            <p className="text-white/70">Lorem ipsum 70</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input name="firstname" type="firstname" placeholder="Firstname" required/>
              <Input name="lastname" type="lastname" placeholder="Lastname" />
              <Input name="email" type="email" placeholder="Email address" required/>
              <Input name="phone" type="phone" placeholder="Phone number" required/>
            </div>
            <Select name="service" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Web development">Web development</SelectItem>
                    <SelectItem value="UI/UX development">UI/UX development</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Textarea name="message" className="h-[200px]" placeholder="Type your message here" required/>
            <Button size="md" className="max-w-40" type="submit">Send message</Button>
          </form>
        </div>
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item,index)=>{
              return <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/70">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
