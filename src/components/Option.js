import React from 'react';
// import { Link } from 'react-router-dom';

const Option = ({uniqOption,hanldleQuizAns}) => {
    // console.log(uniqOption);
    return (
        <label onClick={() => hanldleQuizAns(uniqOption)} className='cursor-pointer rounded-md border-2 text-blue-500 p-5 flex hover:text-white hover:bg-opacity-50  hover:bg-gray-200 text-left'>
            <input  type="radio" name="radio-1" className="radio mr-3" />
            <p className='font-bold text-blue-500'>{uniqOption}</p>
        </label>
    );
};

export default Option;