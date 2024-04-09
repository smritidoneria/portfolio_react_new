import {useRef} from 'react'
import "./portfolio.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion"


const items=[
    {
        id:1,
        title:"dsbhfcghgh",
        img:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc:"fdgshgchbhbdhgbbfghvbhjf"
    },

    {
        id:2,
        title:"dsbhfcghgh",
        img:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc:"fdgshgchbhbdhgbbfghvbhjf"
    },

    {
        id:3,
        title:"dsbhfcghgh",
        img:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc:"fdgshgchbhbdhgbbfghvbhjf"
    },

    {
        id:4,
        title:"dsbhfcghgh",
        img:"https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1200",
        desc:"fdgshgchbhbdhgbbfghvbhjf"
    }
]

// in single function we are returning the item titles as section.function should always be start from upper case
const Single = ({ item }) => {
    const ref = useRef();


    const { scrollYProgress } = useScroll({ target: ref ,offset:["start start","end start"]});

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);

    console.log(item); // Add this line for debugging
    return (
        <section>
            <div className="container" ref={ref}>
                <div className="wrapper">
                    <div className="imageContainer">
                    <img src={item.img} alt="" />
                    </div>
            
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>see demo</button>
                </motion.div>
            </div>
            </div>
        </section>
    );
};


const Portfolio = () => {

    const ref=useRef();


    const {scrollYProgress}=useScroll({target:ref,offset:["start start","end end"]})
    const scaleX=useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    });


  return (
    
    <div className='portfolio' ref={ref}> 
    <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressbar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio