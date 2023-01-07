import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'

const About: React.FC = () => {
  const lol = [{lol: 2}, {lol: 3}]
  const aboutCards = [
    {
      color: {text: "text-white", bg: "bg-primaryAlt"},
      title: "Looks good on any shape",
      description: "Our interface is highly responsive so your portfolio looks awesome on any devise",
      img: "imgs/pcPhoneFrame.png"
    },
    {
      color: {text: "text-black", bg: "bg-lightGray"},
      title: "Let the world see your work",
      description: "Fill your portfolio with your experience, latest projects and all your work",
      img: "imgs/phonesFrame.png"
    }
  ]
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-3 md:mx-8 2xl:mx-0">
        {/* <div
          className="

            text-center pb-4 mx-auto md:w-2/3 flex 
            flex-col gap-3 mb-10
          "
        >
          <h2 className='text-2xl font-bold'>
            Showcase Your Skills Online
          </h2>
          <p>
            Looking to make a splash online and showcase your skills and talents? Portfolioplus is here to help you create an epic online portfolio that will blow people away. With a variety of customization options, our app makes it easy to create a portfolio that truly reflects your unique personality and brand.
          </p>
        </div> */}
        <div className="flex flex-col gap-6 md:gap-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4">
            {aboutCards.map((card, i)=>(
              <div key={i} className={`${card.color.bg} ${card.color.text} rounded-3xl pt-10 overflow-hidden flex flex-col justify-between`}>
                <div className='text-center mx-auto w-3/4 flex flex-col gap-2 py-8'>
                  <h4 className='text-lg font-bold'>
                    {card.title}
                  </h4>
                  <p>
                  {card.description}
                  </p>
                </div>

                <img src={card.img} alt="" className={i == 0?'mx-auto w-11/12':""} />
              </div>
            ))}
          </div>
          <div 
            className="
              bg-mainBg rounded-3xl pt-10 text-white
              grid gap-2 md:grid-cols-5 md:gap-4
              overflow-hidden items-center text-center
              md:text-left
            "
          >
            <div className='mx-auto flex flex-col gap-4 p-8 col-span-2'>
              <h4 className='text-4xl font-semibold'>
                Impress with a Awesome Portfolio
              </h4>
              <p>
                In today's competitive job market, it's important to make a strong impression with your portfolio. With [Your App's Name], you can create a portfolio that reflects your unique talents and style.
              </p>
            </div>
            <div className="col-span-3 flex items-end justify-end">
              <img src="imgs/pcFrame.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
