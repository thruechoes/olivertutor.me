---
title: "History of NLP to Transformers: How we went from OneHotEncoding to Attention-heads and Embeddings"
date: "2024-06-11"
---

# Brief NLP History 

Transformer models have disrupted industries and entirely changed the AI landscape. To many, Chatbots and other use cases of *Large Language Models (LLMs)* are nothing short of magic and the emergence of sentient artificial life. It seems like a prompt goes in, unexplainable reasoning occurs in a computer, and abstractions about life and meaning comes out. But just how is the meaning - or *semantics* - of language captured by a computer?

To understand where we are and where we are headed, we have to understand where we came from. This post will attempt to give a very high-level overview of how people have figured out how to make computers process the semantics of language. This is **NOT** an exhaustive summary or explanation of the history of these methods and techniques. I will be giving an overview and point out some key conceptual milestones in develops that have allowed us the ability to process language as easily as we do numbers. 

## Precursor: A Binary System 

Computers are machines that compute algorithms using a strict binary language: *0s and 1s.* Every action your computer takes is able to be expressed in binary. It is important to make this point because this is the idea at the heart of our discussion today.

## Numbers and Categories 

We represent numeric and categorical data in our binary system through a specific type of symbology. 

### Example 

Imagine that we have a dataset of reviews. The reviews could be from *Google Maps, Yelp, or any other popular service* for finding businesses. Each review is a row in our data. Our goal is to find semantic importance and relationships across the reviews. 

### Terminology 

**Documents (Docs, D):** these are the reviews.

**Vocabulary (Vocab, V):** these are the unique words across the reviews.

## OneHotEncoder 

How do you represent multiple categories with numbers with equal bias to all? OneHotEncoders came about as a solution to this question. You can represent multiple words in a unique way while maintaining an equal representation of each. 
    