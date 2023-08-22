import React,{useEffect,useState} from 'react'

export default function Carousel({ images }) {
    console.log("inside carosule",images)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setPrevIndex(currentIndex);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
    
        return () => {
          clearInterval(interval);
        };

        
      }, [images.length], currentIndex);

      const handleDotClick = (index) => {
        setPrevIndex(currentIndex);
        setCurrentIndex(index);};
  return (
    <div className='relative  overflow-hidden'>
       <div className="flex transition-transform duration-300 ease-in-out transform " style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={()=>{console.log("image",image)}}
            className={`w-full flex-shrink-0 h-[300px] bg-cover bg-center `}
            style={{ backgroundImage: `url(${require(`../image/${image}`)})` }}
          ></div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-2 rounded-full ${
              index === currentIndex ? 'bg-indigo-500' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
