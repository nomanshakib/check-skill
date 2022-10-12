import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const finalData = data.data;
    console.log(finalData);
    return (
        <div className='md:pt-36 pt-32 flex justify-center flex-col max-w-[730px] m-auto'>
            <h1 className="text-3xl text-gray-600 font-bold relative mb-10 quiz-title pb-5 leading-none text-center sm:text-4xl">
                Quiz Summary:
            </h1>
            <div className='r-inner'>
                <ResponsiveContainer width="100%" height="80%">
                <LineChart data={finalData}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                </LineChart>
                </ResponsiveContainer>
            </div>
            
        </div>
    );
};

export default Statistics;

