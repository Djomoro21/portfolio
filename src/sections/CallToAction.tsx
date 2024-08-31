'use client'
import Image from 'next/image';
import ArrowRight from '@/assets/arrow-right.svg';
import Spring from '@/assets/spring.png';
import Star from '@/assets/star.png';
import { motion, useScroll, useTransform} from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {

  const sectionRef= useRef(null);
  const {scrollYProgress}=useScroll({
    target: sectionRef,
    offset:["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [550, -150]);

  return (
  <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto ">
          <h2 className = "section-title mt-5">Sign Up for free today</h2>
          <p className = "section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track your
            progress and motivate your efforts.
          </p>
          <div className="flex justify-center gap-2 mt-[10px]">
              <button className="btn btn-primary">Get for FREE</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span> 
                <ArrowRight className="h-5 w-5"/>
              </button>
          </div>
        </div>
        <div className="relative">
          <motion.img src={Spring.src} height={262} width={362} alt="Spring Image" className="hidden md:block absolute -right-36 -top-32" style={{translateY,}}/>
          <motion.img src={Star.src} height={248}  width={322} alt="Star Image" className="hidden md:block absolute bottom-24 -left-36" style={{translateY,}}/>
        </div>
      </div>

  </section>);
};
