import React from 'react';
import Contact from '../../components/Contact';

const CalcIIIStudyGuide: React.FC = () => {
  return (
    <>
    <div className="prose prose-lg mx-auto mt-10">
      <h1 className="text-5xl font-bold mb-2">Calculus III Study Guide</h1>
      <h2 className="text-2xl text-gray-700 mb-4">Step-by-step solution guide for Multivariable Calculus (Calculus III)</h2>
      <p className="text-gray-500 mb-4">Fri Jul 19 2024</p>
      <div className="flex flex-wrap mb-4">
        {['Math', 'Calculus III', 'Calc', 'Calculus', 'UC Berkeley', 'Cal'].map((keyword, index) => (
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
        <h2 className="text-3xl font-bold">Study Guide</h2>
        <p className="p-2">
          I created a PDF file of step-by-step solutions to a wide range of Calculus III practice problems.
          This guide was originally intended for a student I was teaching taking Math 53: Calculus III at UC Berkeley. However,
          this guide is applicable to anyone wanting to strengthen their multivariate calculus skills.
        </p>
        <h3 className="text-2xl font-bold mt-8">Stewart's Calculus: Early Transcendentals 8th Edition</h3>
        <p className="p-2">
          All of the questions and solutions in this study guide are based on sections 13.1 to 16.1 of Stewart's
          "Calculus: Early Transcendentals 8th Edition".
        </p>
        <h3 className="text-2xl font-bold mt-8">Link to the PDF</h3>
        <p className="p-2">I created this study guide and others using <b>LaTeX</b>, exported those files as PDFs, and put them
        on a publically available Github repository for open-access.
        </p>
        <p className="p-2">
          <a 
            href="https://github.com/thruechoes/study-guides" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Check out my Github repo for access to the PDF.
          </a>
        </p>
        <h2 className="text-3xl font-bold mb-4">Sample Problems</h2>
        <p>Here are some solutions to various problems from the study guide.</p>
        
        <hr className="my-8" />

        <h3 className="text-2xl font-bold mb-4">Triple Integrals</h3>
        <div className="my-4">
          <img 
            src="/images/studyguides/calc3_sample2.png" 
            alt="Triple Integrals: step-by-step" 
            className="w-full h-auto mb-4"
          />
          <p className="text-sm text-gray-600 text-center"><b>Image 1.</b>Triple Integrals: step-by-step</p>
        </div>
        <div className="my-4">
          <img 
            src="/images/studyguides/calc3_sample1.png" 
            alt="Triple Integrals: Adding the bounds" 
            className="w-full h-auto mb-4"
          />
          <p className="text-sm text-gray-600 text-center"><b>Image 2.</b>Triple Integrals: Adding the bounds</p>
        </div>

        <hr className="my-8" />

        <h3 className="text-2xl font-bold mb-4">Directional Derivatives</h3>
        <div className="my-4">
          <img 
            src="/images/studyguides/calc3_sample3.png" 
            alt="Directional Derivatives: conceptual" 
            className="w-full h-auto mb-4"
          />
          <p className="text-sm text-gray-600 text-center"><b>Image 3.</b> Directional Derivatives: conceptual</p>
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
  );
};

export default CalcIIIStudyGuide;
