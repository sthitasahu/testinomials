import React,{useState} from 'react'


const Testinomials = () => {
    const testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ];
    
    const [currentIndex,setCurrentIndex]=useState(0)
    function handlePrevClick(e){
        setCurrentIndex((currentIndex-1+testimonials.length)%testimonials.length)
    }
    function handleNextClick(e){
        setCurrentIndex((currentIndex+1)%testimonials.length)
    }
  return (
    <div>
        <div className='testimonials'>  
            <div className='testimonials-quote'>
                {testimonials[currentIndex].quote}
            </div>
            <div className='testimonials-author'>
                {testimonials[currentIndex].author}
            </div>
        <div className='testimonials-navigation'>
             <button onClick={handleNextClick}>Next</button>
             <button onClick={handlePrevClick}>Prev</button>
        </div>
       </div>
    </div>
  )
}

export default Testinomials
