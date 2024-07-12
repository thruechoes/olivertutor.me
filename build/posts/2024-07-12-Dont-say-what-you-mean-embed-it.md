---
title: "Don't say what you mean, embed it"
subtitle: "How we learned to translate our language for computers"
date: "2024-07-12"
keywords: ["NLP", "Transformer", "AI", "History", "OneHotEncoding", "Attention"]
---

# Brief NLP History: Part 1 

Transformer models have disrupted industries and entirely changed the AI landscape. To many, Chatbots and other use cases of *Large Language Models (LLMs)* are nothing short of magic and the emergence of sentient artificial life. It seems like a prompt goes in, unexplainable reasoning occurs in a computer, and abstractions about life and meaning comes out. But just how is the meaning - or *semantics* - of language captured by a computer?

**Natural Language Processing (NLP)** is an umbrella term that means all of the many techniques, algorithms, and methods used to capture quantitative meaning from language. Predicting semantic of tweets and Transformer models have their roots in NLP. What makes these Transformer models so much different? So much "better"? What will we end up being able to do with these models?

To understand where we are and where we are headed, we have to understand where we came from. This post will attempt to give a very high-level overview of how people have figured out how to make computers process the semantics of language. This is **NOT** an exhaustive summary or explanation of the history of these methods and techniques. I will be giving an overview and point out some key conceptual milestones in develops that have allowed us the ability to process language as easily as we do numbers. 

This is the **first of several history of NLP posts** that will track how our understanding of NLP techniques and language changed over time. And with that change, we learned to obtain deeper and different representations of language until, ultimately, getting to transformer models / LLMs / chatbots. 

## Precursor: A Binary System 

Computers are machines that compute algorithms using a strict binary language: *0s and 1s.* Every action your computer takes is able to be expressed in binary. It is important to make this point because this is the idea at the heart of our discussion today.

## Numbers and Categories 

We represent numeric and categorical data in our binary system through a specific type of symbology. 

### Example 

Imagine that we have a dataset of reviews. The reviews could be from *Google Maps, Yelp, or any other popular service* for finding businesses. Each review is a row in our data. Our goal is to find semantic importance and relationships across the reviews. A very common technique in NLP is to drop words that do not hold as much semantic weight or meaning. Often we want to strip all of the "filler" words (a computer's definition) that are not **nouns, verbs, adverbs, and adjectives**. This post will not go over this but can be found by searching for *"how to remove stopwords from text?".* 

![Overview of the example review data](/images/nlp/nlp_data_1.png)

### Terminology 

**Documents (Docs, D):** these are the reviews.

**Vocabulary (Vocab, V):** these are the unique words across the reviews.

**Vector (N):** a list or array of comma-separated numeric values.

**Independent Variable (X):** this is what our reviews turn into and are the variables we use to find a pattern. 

**Dependent Variable (Y):** this is our target. In this case, it is our review star rating. We find a pattern between the Y variable and the X variable(s). 

![Example review data showing doc indexing](/images/nlp/nlp_data_2.png)


## Bag-of-Words 

How do you represent multiple categories with numbers with equal bias to all? **One-Hot-Encoders** came about as a solution to this question. You can represent multiple categories in a unique way while maintaining an equal representation of each. **Bag-of-Words (BoW)** is more or less One-Hot-Encoding applied to language data. 

*Note: BoW is usually described as a Mixture-of-Hot-Encodings. Either a mixture or one, my point remains the same.*

After dropping all words that are not *nouns, verbs, adverbs, and adjectives* (plus a couple extra words dropped for the sake of simplicity), we line up each unique word used across all reviews (*i.e. docs*) across the columns. The matrix that is left is **D x V**: docs as rows and unique vocab across the columns. 

The values within this matrix will be all **1s and 0s**. There will be a **1 if a word is used** and **0 if a word is not used** in the given review. The OneHotEncoded version of our data will look like this:  

![OneHotEncoded Matrix](/images/nlp/nlp_ohe_3.png)

### Why are 1s and 0s Good?

Why are 0s and 1s more meaningful than the original words? Well, now we have a symbolic, numeric representation of the words across all reviews. Further, each doc can be represented as a vector of 1s and 0s. We could compare the vectors of each review and see, mathematically, which reviews are closer or more distant than others. 

However, do you see the immediate problem(s)? We are now offering equal weight to each and every word we have in this matrix. For example, **good** is the most common word in our data, appearing 3 times, yet it has the same value as the word **spot**, which only appears once. 

## Term-Frequency 

NLP always matures and becomes more and more sophisticated over time. BoW and One-Hot-Encoding, although very useful for dealing with classes, was not up to standards for the NLP community. Eventually, **term-frequency**, the concept of weighting words that appear more often than others, came into the picture. 

The standard way term-frequency is used is within the technique *term-frequency inverse-document-frequency*, or **tf-idf**. However, I am going to use a slightly simplified version of this technique in this post. Feel free to see the slightly more sophisticated math that the method actually uses on your own. 

We are going to following these steps: 

1. get total number of words across all docs (*i.e. reviews*)
2. get counts per unique word 
3. divide count of word by total number of words used 
4. generate tf-idf matrix of weighted occurrence values 

### And-ah (Step) 1. and-ah (Step) 2.

Tally up every occurence of each word. 

![Get per and across all word counts](/images/nlp/nlp_tf_4.png)

### 3. Divide term-frequencies

Now we just divide the number of occurences of a word by the total number of words used. The resulting numbers are the weights of each word. 

![Get the weighted term-frequencies](/images/nlp/nlp_tf_5.png)

### 4. tf-idf matrix

Finally, we simply replace the **1s** in our BoW matrix with the term-frequencies (*or, weights*). As you can see, now each document (*i.e. review*) is a sparse vector and all of them together make a sparse matrix. 

![Replace 1s with the term-frequency weights to get the tf-idf matrix](/images/nlp/nlp_tfidf_6.png)

The **1s** were all replaced with the correct weights of their respective words in *hot pink / purple!* 


#### Is it Really Sparse? 

This post is just showing a simple, toy example. If you had 10,000 reviews to work with, you would have many more number of unique words. Each of those unique words would usually not appear in each review. Thus, the review vectors and the tf-idf matrix would be sparse. 

-----

## Translating from English to Vector 

Now we have a mathematical representation of all of our reviews. Remember, the tf-idf matrix is in dimensions **D x V: documents by unique vocabulary.**

NLP is really the branch of Data Science that specifically deals with translating language, *e.g. English*, into a numerical representation, often **vectors.** See this comparison of the reviews alongside their vector representations. 

![Translating from English to Vector](/images/nlp/nlp_datavectors_7.png)

### How do you plot language?

The power of NLP techniques can be summarized with the following image. This image shows that we took reviews written in the English language and turned them into points in a mathematically space. Here is my embedding of my reviews in the mathematical spaces of the words **good** and **right**. 

**Note:** for readability, I simplified this plot to only use *2 of the 8 dimensions*.

![Plotting English as points in mathematical space](/images/nlp/nlp_goodright_stacked_8.png)

I color coded the docs (*i.e. the reviews*) to match the different colors of the points on the plot. I also showed the values for **doc 4** and where those values came from. 

### Double Entendre: Right?

A double entendre is a word or phrase that has 2 distinct meanings. A major problem with the image above and the methods we have used in this post so far is that they do not take into account the context in which words were used. Many words in most languages have several different meanings. Those meanings are context-specific.

The most obvious example of this in my example data is the word **right.** *Right* can be used to describe a direction (*e.g. 'on the right'*), confirmation (*e.g. 'right on'*), correctness (*e.g. 'not made right' could be 'not made correct'*), and many other potential meanings and uses. 

As a sneak peak to what lies ahead in post 2, I will discuss how methods that use shallow neural networks generally allow a **single representation per word** but, on the other hand, models that use deep neural networks can have a **single representation per meaning per word.**

### Why Translate our Language?

Mathematics is the language of our Universe. Further, computers are only able to process the language of mathematics (*or at least their abstraction of it*). The major, recent significance of ChatBots and other applications of Transformer models comes from the fact that we have learned more sophisticated ways to translate our language.

We are not just encoding words themselves, rather their semantics. Embeddings are vectors that represent relationships between the meanings of the words that make up our language. We definitely have more work to do and it is exciting to see where we will go from here. 

### Next Steps

The trick is that the naunced semantic richness of our human-created languages is actually very hard to represent with one set of numbers. We are still a few steps away from our initial goal of tracing the history of NLP methods from Bag-of-Words and One-Hot-Encoding (**binary encoding**) to Transformer models. In the next blog post, we are going to discuss the vector representation of words and docs with **Word2vec, shallow vs deep neural networks, and Attention Heads.** All of this will naturally lead up to the use of Transformer models. 