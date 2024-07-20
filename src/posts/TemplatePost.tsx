import React from 'react';
import Contact from '../components/Contact';

const TemplatePage: React.FC = () => {
    return (
        <>
        <div className="prose prose-lg mx-auto mt-10">
            <h1 className="text-4xl font-bold mb-2">Main Title</h1>
            <h2 className="text-2xl text-gray-700 mb-4">Subtitle</h2>
            <p className="text-gray-500 mb-4">Fri Jul 20 2024</p>
            <div className="flex flex-wrap mb-4">
                {['keyword1', 'keyword2'].map((keyword, index) => (
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
                <h3 className="text-3xl font-bold">First Header</h3>
                <p className="p-2">First paragraph...</p>
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