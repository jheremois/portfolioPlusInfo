import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type FeaturesProps = {
  features: Feature[];
  imageUrl: string;
};

const Features: React.FC<FeaturesProps> = ({ features, imageUrl }) => {
  return (
    <div className="bg-lightGray">
        <div className="max-w-7xl mx-auto py-16 md:py-24">
            <div className="mx-3 md:mx-8 2xl:mx-0">
                <div 
                    className="
                        text-center p-4 mx-auto md:w-2/3 flex 
                        flex-col gap-3
                    "
                >
                    <h2 className='text-2xl font-semibold'>
                        Showcase Your Skills Online
                    </h2>
                    <p>
                    Looking to make a splash online and showcase your skills and talents? Portfolioplus is here to help you create an epic online portfolio that will blow people away. With a variety of customization options, our app makes it easy to create a portfolio that truly reflects your unique personality and brand.
                    </p>
                </div>
                <div 
                    className="
                        flex justify-between my-4 gap-4 flex-col
                        md:flex-row
                    "
                >
                    <img src={imageUrl} alt="Feature image" 
                        className="
                            md:min-h-full md:w-96 s object-cover rounded-2xl
                        " 
                    />
                    <div 
                        className="
                            grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-4
                        "
                    >
                        {features.map((feature, i) => (
                        <div key={feature.title + i} className="bg-white px-7 py-9 md:px-7 md:py-7 rounded-2xl flex flex-col gap-4">
                            <div 
                                className="
                                    icon bg-primary h-9 w-9 rounded-md
                                    flex justify-center items-center text-white font-bold
                                "
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
