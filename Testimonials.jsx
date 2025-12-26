import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonialsData = [
  {
    id: 1, 
    name: "Thaman, Hyderabad",
    position: "Marketing Intern, Shaastra IIT Madras",
    testimonial:"“My experience as a Marketing Intern for Shaastra, IIT Madras improved my communication skills and taught me how to organize events. Working with a diverse team showed me the value of teamwork, responsibility, and professionalism.The mentorship from the Shaastra team made the journey enjoyable, and the experience, exposure, and memories were unforgettable. I would highly recommend this internship to anyone looking to grow their leadership and management skills.”"



    


  },      
  {
    id: 2, 
    name: "Raghavendra",
    position: "Alumnus, IIT Madras",
    testimonial:"Shaastra provided an incredible platform for innovation and learning. The events were well-organized and engaging, fostering a spirit of creativity. The exposure to cutting-edge technology and interaction with like-minded individuals greatly enhanced my skills and knowledge.It gave me a platform to take initiative and host exciting events that sparked interest in science and tech. Overall, Shaastra was a transformative experience that significantly contributed to my personal and professional growth.",
  },   
  {
    id: 3, 
    name: "Arun,Mumbai",
    position: "Campus Ambassador, Shaastra IIT Madras",
    testimonial:"Working together with the Shaastra team has been a great opportunity for a college student like me who was looking to get into tech fields. Being a Campus Ambassador for Shaastra, IIT Madras, truly transformed my outlook.The commitment and energy of the Shaastra team inspired me to raise my standards and continuously push myself toward achieving my aspirations. Networking with other ambassadors from different colleges from all over India opened up connections."
  },
  {
    id: 4, 
    name: "Anand Ranganathan",
    position: "Head of the first Shaastra team, IIT Madras",
    testimonial:"The spirit of co-curricular activity had taken hold and it was now cool to be a geek. Technical creativity and entrepreneurial spirits were the rage of the moment.Throughout the journey, I gained valuable experience in planning, time management, and confidently addressing groups. The role taught me the significance of perseverance and teamwork. It was a transformative experience that shaped my personal and professional growth." 
  },
]

  const settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,   
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {  
        breakpoint: 640,
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1,
        },
      },
    ],
  }
  

const Testimonials = () => {
  return (
    <div className="testimonials-section py-12  bg-[#020617]">
      <div className="container w-full mx-auto px-4">
        {/*header*/}
        <div className='space-y-4 p-6 text-center max-w-150 mx-auto'>
          <h2 className="text-3xl font-semibold  text-emerald-400">About Shaastra</h2>
          <p className="text-gray-600">
            Shaastra is the annual technical festival of IIT Madras, renowned for its student-driven initiatives and     
            cutting-edge innovations. 

          </p>

        </div>  
        <div className="space-y-4 p-6 text-center max-w-150 mx-auto">
          <h2 className='font-medium text-2xl mt-3  md:text-3xl  text-amber-400'> Testimonials</h2>
        </div>
        {/* Testimonial Cards */}
         <div>
           <Slider {...settings}>
              {testimonialsData.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 p-8">
                  <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                    <p className="text-[#F0FFF0] mb-4 overflow-auto min-h-82 wrap-break-word ">{item.testimonial}</p>
                    <div className="mt-auto">
                      <h3 className="text-lg text-cyan-600 font-semibold">{item.name}</h3>
                      <span className="text-gray-500 text-sm">{item.position}</span>
                    </div>
                  </div>
                </div>
              ))}
           </Slider>
         </div>
      </div>
    </div>
  )
}


export default Testimonials

