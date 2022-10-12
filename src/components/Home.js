import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizCategory from "./QuizCategory";

const Home = () => {
  const quizData = useLoaderData();
  const quizValue = quizData.data;
  return (
    <section>
      <div className="bg-gray-100">
        <div className="container flex flex-col items-center pt-40 px-1 py-10 pb-24 mx-auto text-center lg:pb-10 md:py-40 md:px-10 lg:px-32 text-black">
          <h1 className="text-5xl text-blue-500 font-bold leading-none sm:text-6xl xl:max-w-3xl">
            Check Your Knowledge!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-black">
            To check your skill, Do pro test, Enjoy the testing journey , Participate every single test on this site to ensure your knowledge. 
          </p>
        </div>
      </div>
      <section className="text-black body-font mt-24 text-center max-w-7xl m-auto">
            <h2 className="text-3xl font-bold relative mb-10 quiz-title pb-5 leading-none text-center sm:text-4xl text-blue-500">Select One To Check:</h2>
            <div className="container px-5 py-5 pb-32 mx-auto">
                <div className="grid grid-cols-4 gap-5 custom-card">
                    {
                      quizValue.map(quiz => <QuizCategory key={quiz.id} quiz={quiz} />)
                    }
                </div>
            </div>
        </section>
    </section>
  );
};

export default Home;

