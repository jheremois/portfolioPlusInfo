import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const GoToApp: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="max-w-7xl mx-auto py-5 md:py-6 w-full">
      <div className="mx-3 md:mx-8 2xl:mx-0 rounded-3xl overflow-hidden">
        <div
        style={{
          width: '100%',
          position: 'relative'
        }}
        >
          <div
            style={{
            height: '85vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
          >
            <button 
                style={{ zIndex: 1 }}
                onMouseEnter={()=> setIsHovering(true)} onMouseLeave={()=> setIsHovering(false)}
                className="bg-primary py-2 px-4 flex items-center gap-2 rounded-full text-white font-medium text-lg"
            >
                Create your portfolio
                <ArrowTopRightOnSquareIcon width={20}/>
            </button>
            <div 
              style={{
                backgroundImage: `url(content.png)`,
                filter: isHovering ? 'none' : 'blur(5px)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transitionDuration: '400ms'
              }}
              className="absolute w-full h-full top-0 z-0"
            ></div>
            
        </div>
        </div>
      </div>
    </div>
  );
};

export default GoToApp;
