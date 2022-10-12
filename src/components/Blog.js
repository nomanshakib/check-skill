import React from 'react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const Blog = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <section className="md:pt-36 flex justify-center flex-col max-w-[730px] m-auto text-center">
            <h1 className="text-3xl text-gray-600 font-bold relative mb-5 quiz-title pb-5 leading-none text-center sm:text-4xl">
                Question:
            </h1>
            <div className='pt-8 pb-16 text-left'>
                <Fragment>
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>
                        What is the purpose of the react router ?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] h-28'>
                        
                            
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>
                        How does context api work ?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] h-28'>
                        
                            
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>
                        What is useRef?
                        </AccordionHeader>
                        <AccordionBody className='text-[18px] h-32'>
                        
                            
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </div>
        </section>
    );
};

export default Blog;