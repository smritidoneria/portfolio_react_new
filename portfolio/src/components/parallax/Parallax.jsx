//for parallax motion, we will be using useRef to refer to our target and the useScrill and useTransform hook

import React, { useRef } from 'react'
import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"
const Parallax = ({type}) => {

    const ref=useRef()

    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"]
    })

    const textBg=useTransform(scrollYProgress,[0,1],["0%","500%"])
    const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"])



  return (
    <div className='parallax' 
        ref={ref}
        style={{
        background:
        type==="services"?
        "linear-gradient(180deg,#111132,#0c0c1d"
    :"linear-gradient(180deg,#111132,#505064"}}>
        <motion.h1  style={{y:textBg}}>{type==="services"?"what we do?":"what we did"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{y:yBg}}className="planets"></motion.div>
        <motion.div style={{x:yBg}}className="stars"></motion.div>
    </div>
  )
}

export default Parallax