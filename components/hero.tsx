"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import Link from 'next/link';
import Image from 'next/image';
import { filters, projectsData } from '@/lib/data';

export default function Hero() {
    const [isHovering, setIsHovering] = useState(false as boolean);
    const [hoverContent, setHoverContent] = useState([] as any[]);
    const [myFilters, setMyFilters] = useState(['all'] as string[]);

    function handleMouseOver({title, hoverImage, page}: {title: string, hoverImage: object, page: string}) {
        setIsHovering(true);
        setHoverContent([title, hoverImage, page!=""]);
    }

    function handleMouseOut() {
        setIsHovering(false);
    }

    function handleClickAll() {
        myFilters.includes('all') ? setMyFilters([]) : setMyFilters(['all'])
    }

    function handleClick(f: string) {
        myFilters.includes('all') ? setMyFilters([f]) :
        myFilters.includes(f) ? setMyFilters((old:any[string]) => (old.filter((item: string) => item != f))) : 
        myFilters.length === filters.length -1 ? setMyFilters(['all']) : setMyFilters((old:string[]) => [...old, f])
        console.log(myFilters)
    }

    function Filters() {
        return (<section className={`grid grid-cols-5 items-center -translate-x-1 gap-x-1 pb-3 font-abcfavorit text-basefavorit sm:text-lgfavorit sm:pb-4 min-w-min sm:items-start`}>
            <p 
                onClick={() => handleClickAll()}
                className={`underline cursor-pointer ${myFilters.includes('all') ? 'text-primary-0' : 'text-primary-400'} w-1/4 justify-self-center whitespace-nowrap transition transition-duration-[300ms]'`}
            >{myFilters.includes('all') ? 'all ❤︎' : 'all ♡'}</p>
                    
            {filters.map((f, index) => (
                <p 
                    onClick={() => handleClick(f)}
                    className={`underline cursor-pointer ${myFilters.includes(f) ? 'text-primary-0' : 'text-primary-400'} w-1/4 justify-self-center whitespace-nowrap transition transition-duration-[300ms]`} 
                    key={index}>{f}</p>
            ))}
        </section>)
    }

    return (
        <>
            <Filters />

            <section className='flex flex-wrap font-normal gap-x-0.5 justify-center sm:justify-start sm:gap-x-2.5'>
                {projectsData.map((project, index) => {

                    const content = <>
                        <p className='group-hover:text-secondary-0 text-[.5rem] text-primary-300 font-normal font-abcdiatype mt-1 sm:mt-0.5 transition duration-300 w-4 sm:w-4'>{`[${index+1 < 9 ? '0' : ''}${(index+1)}]`}</p>

                        <p className='group-hover:text-secondary-0 text-primary-100 mr-1.5 whitespace-nowrap hidden font-times group-odd:font-abcfavorit text-2xl sm:text-5xl group-odd:capitalize group-even:uppercase group-odd:sm:text-5xlfavorit group-odd:italic group-odd:sm:mt-1 sm:inline sm:mr-3 transition duration-300'>{project.title}</p>

                        <Image 
                            src={project.displayImage}
                            alt="project image"
                            className='sm:group-hover:invert-[100%] object-contain w-auto mt-1 mb-0 mr-1.5 sm:mb-2 transition duration-300'
                        />
                    </>;
                    
                    return (
                        project.page != "" ? 

                            <Link className={`group flex flex-row wrap transition h-[11.5rem] min-w-min ${myFilters.includes('all') || myFilters.some((r:string) => project.type.includes(r)) ? 'visible' : 'invisible'} sm:h-12 hover:bg-primary-100 hover:z-10`}
                                onMouseOver= {() => handleMouseOver(project)}
                                onMouseOut={handleMouseOut}
                                href={project.page}
                                target={project.page[0] == "/" ? "_self" : "_blank"}>

                                    {content}

                            </Link> 
                            
                            : 

                            <div className={`group flex flex-row wrap transition h-[11.5rem] min-w-min cursor-default ${myFilters.includes('all') || myFilters.some((r:string) => project.type.includes(r)) ? 'visible' : 'invisible'} sm:h-12 hover:bg-primary-100 hover:z-10`}
                            onMouseOver= {() => handleMouseOver(project)}
                            onMouseOut={handleMouseOut}>
                                {content}
                            </div>
                    )
                })}
            </section>

            <AnimatePresence>
                {isHovering && 
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ duration: 0.2 }}
                        >
                        <Image
                            src={hoverContent[1]}
                            alt="project image" 
                            className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto max-w-none h-[15rem] sm:h-[30rem]'
                        />

                        <p className={`px-1  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 uppercase whitespace-nowrap z-20 ${hoverContent[2] ? 'text-base font-times text-secondary-0' : 'text-basefavorit font-abcfavorit text-primary-100 bg-secondary-0' }`}>
                            {hoverContent[2] ? 'click to open' : "PAGE COMING SOON"}
                        </p>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

