import React from 'react';
import Contact from '../../components/Contact';

const DontSayWhatYouMeanEmbedIt: React.FC = () => {
  return (
    <>
    <div className="prose prose-lg mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-2">Don't say what you mean, embed it?</h1>
      <h2 className="text-2xl text-gray-700 mb-4">How we learned to translate language to Computer</h2>
      <p className="text-gray-500 mb-4">Fri Jul 19 2024</p>
      <div className="flex flex-wrap mb-4">
        {['NLP', 'Transformer', 'Embeddings', 'AI', 'Attention'].map((keyword, index) => (
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
        <h3 className="text-3xl font-bold">The Landscape of NLP</h3>
        <p className="p-2">
          In this post, we explore the world of Natural Language Processing (NLP) embeddings, their significance, and
          how they revolutionize the way machines understand human language. We will delve into a conceptual history
          of NLP techniques for encoding language. We will see the role that various techniques have played in a brief
          history of how computers process and understand how human language.
        </p>
        <h3 className="text-2xl font-bold mt-8">A Long Road</h3>
        <p className="p-2">
            Transformer models have revolutionized industries and reshaped the AI landscape. To many, chatbots and other applications of <i>Large Language Models (LLMs)</i> appear almost magical, resembling the emergence of sentient artificial life. It seems like you input a prompt, a computer processes it through unexplainable reasoning, and out comes abstract concepts about life and meaning. But how exactly does a computer capture the meaning—or <i>semantics</i>—of language?
          </p>
          <p className="p-2">
            <strong>Natural Language Processing (NLP)</strong> encompasses a range of techniques, algorithms, and methods used to derive quantitative meaning from language. From predicting the sentiment of tweets to building Transformer models, NLP is at the core. What makes these Transformer models so different? So superior? What will we eventually achieve with these models?
          </p>
          <p className="p-2">
            To understand our current position and future direction, we must first understand our past. This post aims to provide a high-level overview of how we have developed the ability to process the semantics of language with computers. This is <strong>NOT</strong> an exhaustive summary or explanation of these methods and techniques. Instead, I will highlight key conceptual milestones that have enabled us to process language as easily as we do numbers.
          </p>
          <p className="p-2">
            This is the <strong>first of several posts</strong> that will trace the evolution of NLP techniques and our understanding of language. These posts will track how our methods have evolved, leading us to transformer models, LLMs, and chatbots.
          </p>
          <h3 className="text-2xl font-bold mt-8">Precursor: A Binary System</h3>
          <p className="p-2">
            Computers execute algorithms using a strict binary language: <i>0s and 1s</i>. Every action your computer takes can be expressed in binary. This concept is crucial to today's discussion.
          </p>
          <h3 className="text-2xl font-bold mt-8">Numbers and Categories</h3>
          <p className="p-2">
            In our binary system, we represent numeric and categorical data using specific types of symbology.
          </p>
          <h4 className="text-xl font-bold mt-6">Example</h4>
          <p className="p-2">
            Imagine we have a dataset of reviews. These reviews could be from <i>Google Maps, Yelp, or any other popular service</i> for finding businesses. Each review is a row in our data. Our goal is to uncover semantic significance and relationships within the reviews. A common NLP technique is to discard words that do not carry substantial semantic weight. Often, we strip all "filler" words (according to a computer's definition) that are not <strong>nouns, verbs, adverbs, or adjectives</strong>. This post will not delve into this technique, but you can find more information by searching for <i>"how to remove stopwords from text?"</i>.
          </p>
          <img src="/images/nlp/nlp_data_1.png" alt="Overview of the example review data" className="my-4" />
          <h3 className="text-3xl font-bold">Terminology</h3>
          <p className="p-2">
            <strong>Documents (Docs, D):</strong> These are the reviews.
          </p>
          <p className="p-2">
            <strong>Vocabulary (Vocab, V):</strong> These are the unique words across the reviews.
          </p>
          <p className="p-2">
            <strong>Vector (N):</strong> A list or array of comma-separated numeric values.
          </p>
          <p className="p-2">
            <strong>Independent Variable (X):</strong> This is what our reviews turn into and are the variables we use to find a pattern.
          </p>
          <p className="p-2">
            <strong>Dependent Variable (Y):</strong> This is our target. In this case, it is our review star rating. We find a pattern between the Y variable and the X variable(s).
          </p>
          <img src="/images/nlp/nlp_data_2.png" alt="Example review data showing doc indexing" className="my-4" />
          <h3 className="text-2xl font-bold mt-8">Bag-of-Words</h3>
          <p className="p-2">
            How do you represent multiple categories with numbers with equal bias to all? <strong>One-Hot-Encoders</strong> came about as a solution to this question. You can represent multiple categories in a unique way while maintaining an equal representation of each. <strong>Bag-of-Words (BoW)</strong> is more or less One-Hot-Encoding applied to language data.
          </p>
          <p className="p-2">
            After dropping all words that are not <i>nouns, verbs, adverbs, and adjectives</i> (plus a couple of extra words dropped for the sake of simplicity), we line up each unique word used across all reviews (<i>i.e. docs</i>) across the columns. The matrix that is left is <strong>D x V</strong>: docs as rows and unique vocab across the columns.
          </p>
          <p className="p-2">
            The values within this matrix will be all <strong>1s and 0s</strong>. There will be a <strong>1 if a word is used</strong> and <strong>0 if a word is not used</strong> in the given review. The OneHotEncoded version of our data will look like this:
          </p>
          <img src="/images/nlp/nlp_ohe_3.png" alt="OneHotEncoded Matrix" className="my-4" />
          <h3 className="text-2xl font-bold mt-8">Why are 1s and 0s Good?</h3>
          <p className="p-2">
            Why are 0s and 1s more meaningful than the original words? Well, now we have a symbolic, numeric representation of the words across all reviews. Further, each doc can be represented as a vector of 1s and 0s. We could compare the vectors of each review and see, mathematically, which reviews are closer or more distant than others.
          </p>
          <p className="p-2">
            However, do you see the immediate problem(s)? We are now offering equal weight to each and every word we have in this matrix. For example, <strong>good</strong> is the most common word in our data, appearing 3 times, yet it has the same value as the word <strong>spot</strong>, which only appears once.
          </p>
          <h3 className="text-2xl font-bold mt-8">Term-Frequency</h3>
          <p className="p-2">
            NLP always matures and becomes more and more sophisticated over time. BoW and One-Hot-Encoding, although very useful for dealing with classes, were not up to standards for the NLP community. Eventually, <strong>term-frequency</strong>, the concept of weighting words that appear more often than others, came into the picture.
          </p>
          <p className="p-2">
            The standard way term-frequency is used is within the technique <i>term-frequency inverse-document-frequency</i>, or <strong>tf-idf</strong>. However, I am going to use a slightly simplified version of this technique in this post. Feel free to see the slightly more sophisticated math that the method actually uses on your own.
          </p>
          <p className="p-2">
            We are going to follow these steps:
          </p>
          <ul className="list-decimal list-inside p-2">
            <li>Get the total number of words across all docs (<i>i.e. reviews</i>)</li>
            <li>Get counts per unique word</li>
            <li>Divide the count of the word by the total number of words used</li>
            <li>Generate tf-idf matrix of weighted occurrence values</li>
          </ul>
          <h3 className="text-lg font-bold mt-8">And-ah (Step) 1. and-ah (Step) 2.</h3>
          <p className="p-2">
            Tally up every occurrence of each word.
          </p>
          <img src="/images/nlp/nlp_tf_4.png" alt="Get per and across all word counts" className="my-4" />
          <h3 className="text-lg font-bold mt-8">3. Divide term-frequencies</h3>
          <p className="p-2">
            Now we just divide the number of occurrences of a word by the total number of words used. The resulting numbers are the weights of each word.
          </p>
          <img src="/images/nlp/nlp_tf_5.png" alt="Get the weighted term-frequencies" className="my-4" />
          <h3 className="text-lg font-bold mt-8">4. tf-idf matrix</h3>
          <p className="p-2">
            Finally, we simply replace the <strong>1s</strong> in our BoW matrix with the term-frequencies (<i>or, weights</i>). As you can see, now each document (<i>i.e. review</i>) is a sparse vector and all of them together make a sparse matrix.
          </p>
          <img src="/images/nlp/nlp_tfidf_6.png" alt="Replace 1s with the term-frequency weights to get the tf-idf matrix" className="my-4" />
          <p className="p-2">
            The <strong>1s</strong> were all replaced with the correct weights of their respective words in <i>hot pink / purple!</i> 
          </p>
          <h3 className="text-2xl font-bold mt-8">Is it Really Sparse?</h3>
          <p className="p-2">
            This post is just showing a simple, toy example. If you had 10,000 reviews to work with, you would have many more unique words. Each of those unique words would usually not appear in each review. Thus, the review vectors and the tf-idf matrix would be sparse.
          </p>
          <h3 className="text-2xl font-bold mt-8">Translating from English to Vector</h3>
          <p className="p-2">
            Now we have a mathematical representation of all of our reviews. Remember, the tf-idf matrix is in dimensions <strong>D x V: documents by unique vocabulary.</strong>
          </p>
          <p className="p-2">
            NLP is really the branch of Data Science that specifically deals with translating language, <i>e.g. English</i>, into a numerical representation, often <strong>vectors.</strong> See this comparison of the reviews alongside their vector representations.
          </p>
          <img src="/images/nlp/nlp_datavectors_7.png" alt="Translating from English to Vector" className="my-4" />
          <h3 className="text-2xl font-bold mt-8">How do you plot language?</h3>
          <p className="p-2">
            The power of NLP techniques can be summarized with the following image. This image shows that we took reviews written in the English language and turned them into points in a mathematical space. Here is my embedding of my reviews in the mathematical spaces of the words <strong>good</strong> and <strong>right</strong>.
          </p>
          <p className="p-2">
            <strong>Note:</strong> For readability, I simplified this plot to only use <i>2 of the 8 dimensions.</i>
          </p>
          <img src="/images/nlp/nlp_goodright_stacked_8.png" alt="Plotting English as points in mathematical space" className="my-4" />
          <p className="p-2">
            I color-coded the docs (<i>i.e. the reviews</i>) to match the different colors of the points on the plot. I also showed the values for <strong>doc 4</strong> and where those values came from.
          </p>
          <h3 className="text-2xl font-bold mt-8">Double Entendre: Right?</h3>
          <p className="p-2">
            A double entendre is a word or phrase that has 2 distinct meanings. A major problem with the image above and the methods we have used in this post so far is that they do not take into account the context in which words were used. Many words in most languages have several different meanings. Those meanings are context-specific.
          </p>
          <p className="p-2">
            The most obvious example of this in my example data is the word <strong>right.</strong> <i>Right</i> can be used to describe a direction (<i>e.g. 'on the right'</i>), confirmation (<i>e.g. 'right on'</i>), correctness (<i>e.g. 'not made right'</i> could be <i>'not made correct'</i>), and many other potential meanings and uses.
          </p>
          <p className="p-2">
            As a sneak peek to what lies ahead in post 2, I will discuss how methods that use shallow neural networks generally allow a <strong>single representation per word</strong> but, on the other hand, models that use deep neural networks can have a <strong>single representation per meaning per word.</strong>
          </p>
          <h3 className="text-2xl font-bold mt-8">Why Translate our Language?</h3>
          <p className="p-2">
            Mathematics is the language of our Universe. Further, computers are only able to process the language of mathematics (<i>or at least their abstraction of it</i>). The major, recent significance of ChatBots and other applications of Transformer models comes from the fact that we have learned more sophisticated ways to translate our language.
          </p>
          <p className="p-2">
            We are not just encoding words themselves, rather their semantics. Embeddings are vectors that represent relationships between the meanings of the words that make up our language. We definitely have more work to do, and it is exciting to see where we will go from here.
          </p>
          <h3 className="text-2xl font-bold mt-8">Next Steps</h3>
          <p className="p-2">
            The trick is that the nuanced semantic richness of our human-created languages is actually very hard to represent with one set of numbers. We are still a few steps away from our initial goal of tracing the history of NLP methods from Bag-of-Words and One-Hot-Encoding (<strong>binary encoding</strong>) to Transformer models. In the next blog post, we are going to discuss the vector representation of words and docs with <strong>Word2vec, shallow vs deep neural networks, and Attention Heads.</strong> All of this will naturally lead up to the use of Transformer models.
          </p>
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

export default DontSayWhatYouMeanEmbedIt;
