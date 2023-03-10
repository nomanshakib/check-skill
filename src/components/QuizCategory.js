import React from 'react';
import { Link } from 'react-router-dom';
const QuizCategory = ({quiz}) => {
    const {id, name, logo, total} = quiz;
    return (
        <div className="text-left">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="lg:h-48 md:h-36 w-full bg-gray-100" src={logo} alt="blog" />
            <div className="p-4">
                <h3 className="title-font text-3xl font-bold text-blue-500 mb-3">{name}</h3>
                <div className="flex items-center flex-wrap justify-between">
                    <Link to={`/quiz/${id}`}>
                        <button  className="text-orange-700 btn font-semibold inline-flex items-center md:mb-2 lg:mb-0">Start Practice
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                    
                    <div className='flex items-center text-blue-500'>
                        <span className='font-semibold text-xl mt-[-1px]'>Total: {total}</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default QuizCategory;