import React from 'react';
import Contact from '../../components/Contact';

const StatsForDataScience: React.FC = () => {
    return (
        <>
        <div className="prose prose-lg mx-auto mt-10">
            <h1 className="text-4xl font-bold mb-2">Statistics for Data Science Study Guide</h1>
            <h2 className="text-2xl text-gray-700 mb-4">Step-by-step solution guide to mathematical statistics for data science</h2>
            <p className="text-gray-500 mb-4">Tue Aug 06 2024</p>
            <div className="flex flex-wrap mb-4">
                {['Statistics', 'Data Science', 'SFSU', 'Mathematical Statistics', 'UC Berkeley', 'Stanford', 'MIT', 'Hypothesis Testing', 'MLE'].map((keyword, index) => (
                <span 
                    key={index} 
                    className="bg-green-200 text-green-700 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                >
                    {keyword}
                </span>
                ))}
            </div>
            <hr />
            <section>
                <h3 className="text-3xl font-bold">Study Guide</h3>
                <p className="p-2">I created a PDF with step-by-step solutions to a range of problems in statistics and statistics for data science. These problems originally came out of tutoring sessions I have been having with students in the Introduction to Statistcs for Data Science course at SFSU. However, this guide should be helpful to many students in a wide range of statistics and data science courses at many universities and programs.</p>
                <p className="p-2">
                    <a 
                        href="https://github.com/thruechoes/study-guides" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-800 underline"
                    >
                        Check out my Github repo for access to this PDF and other study guides.
                    </a>
                </p>
            </section>
            <section>
                <h3 className="text-3xl font-bold">Topics</h3>
                <p className="p-2">The material in this guide includes <i>Hypothesis Testing, Joint and Marginal Probability Density Functions (PDF) and Probability Mass Functions (PMF), Maximum Likelihood Estimation (MLE), Confidence Intervals, and more.</i> These topics show up in statistcs and statistics for data science courses at <strong>UC Berkeley, Stanford, MIT, SFSU</strong>, and other universities around the world.</p>
                <p className="p-2">The problems in this guide are inspired by exercises from the book <strong>Introduction to Mathematical Statistics</strong><i>, 8th Edition</i> by Robert Hogg, Joseph McKean, and Allen Craig.</p>
            </section>
            <section>
                <h3 className="text-3xl font-bold">Example Problems</h3>
                <p className="p-2">I offer a down-to-earth teaching style that helps make complex material less intimidating and more digestible. Each section of problems are broken down into technical solutions and conceptual explanations.</p>
                <h4 className="text-2xl font-bold">Technical Solutions</h4>
                <div className="my-4">
                <img 
                    src="/images/studyguides/statsds-technical-1.png" 
                    alt="Hypothesis Testing: technical" 
                    className="w-full h-auto mb-4"
                />
                <p className="text-sm text-gray-600 text-center"><b>Image 1.</b> Hypothesis Testing: Technical Solution Sample</p>
                </div>    
                <h4 className="text-2xl font-bold">Conceptual Explanations</h4>
                <div className="my-4">
                <img 
                    src="/images/studyguides/statsds-conceptual-1.png" 
                    alt="Hypothesis Testing: conceptual" 
                    className="w-full h-auto mb-4"
                />
                <p className="text-sm text-gray-600 text-center"><b>Image 2.</b> Hypothesis Testing: Conceptual Explanation Sample</p>
                </div> 
            </section>
            </div>
            <section className="bg-customGreen flex flex-col md:flex-row items-center space-y-4 md:space-y-0 border-t-2 border-black w-full p-4 mt-60">
            <div className="flex-1 space-y-4 p-4">
            <h2 className="text-6xl mb-4">Master AI and Data Science!</h2>
            <p className="mr-2">Passionate about AI and Data Science? Elevate your skills with personalized, one-on-one tutoring sessions. Ready to dive deeper? Contact Oliver now!</p>
            </div>
            <div className="flex-1 space-y-4 p-4">
            <Contact />
            </div>
        </section>
        </>
    )
}

export default StatsForDataScience;