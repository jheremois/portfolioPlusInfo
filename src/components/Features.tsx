import React, {useState} from 'react';
import { StarIcon, SparklesIcon, PencilSquareIcon, ShareIcon } from '@heroicons/react/24/solid'

const Features: React.FC = () => {

    const [cardActive, setCardActive] = useState<number>(1)

    const features = [
        {
          title: "Customization Powers",
          description: "Make your portfolio stand out with your own logo, banner image, and color scheme Make your portfolio stand out with your own logo, banner image, and color scheme your portfolio stand out with your own logo, banner image, and color scheme.",
          icon: <SparklesIcon width={18}/>,
          isActive: 1
        },
        {
          title: "Customization Powers",
          description: "Make your portfolio stand out with your own logo, banner image, and color scheme Make your portfolio stand out with your own logo, banner image, and color scheme your portfolio stand out with your own logo, banner image, and color scheme.",
          icon: <StarIcon width={18}/>,
          isActive: 2
        }
    ]

    return (
        <div className="">
            <div className="max-w-7xl mx-auto">
                <div className="mx-3 md:mx-8 2xl:mx-0">
                    <div 
                        className="
                            grid grid-cols-1 gap-4
                            md:grid-cols-2
                        "
                    >
                        <img src={
                            cardActive == 2
                            ?
                                'imgs/profilePortfolioPlus.png'
                            :
                                'imgs/custPowerPortfolioPlus.png'
                        } alt="Feature image" 
                            className="
                                rounded-2xl
                                h-full
                            " 
                        />
                        <div 
                            className="
                                grid grid-cols-1 gap-6 md:grid-cols-1 md:gap-4
                            "
                        >
                            {features.map((feature, i) => (
                            <div 
                                onClick={()=> setCardActive(feature.isActive)}
                                key={feature.title + i}
                                className={`
                                    px-7 py-9 md:px-7 
                                    md:py-7 rounded-2xl flex flex-col gap-4
                                    cursor-pointer box-content duration-150
                                    hover:bg-bgAtl
                                    ${cardActive == feature.isActive
                                        ? 
                                            'border-2 bg-bgAtl border-primaryAlt'
                                        : 
                                            'border-none bg-lightGray'
                                    }

                                `}
                            >
                                <div 
                                    className={`
                                        ${cardActive == feature.isActive
                                            ? 
                                                'bg-primaryAlt'
                                            : 
                                                'bg-black'
                                        }
                                        icon h-10 w-10 rounded-md
                                        flex justify-center items-center text-white font-bold
                                    `}
                                >
                                    {feature.icon}
                                </div>
                                <div className="
                                flex flex-col gap-2
                                ">
                                    <h3 className="text-lg font-bold">{feature.title}</h3>
                                    <p className="text-gray-700">{feature.description}</p>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
