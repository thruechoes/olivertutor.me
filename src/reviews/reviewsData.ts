// reviewsData.ts
export interface ReviewData {
    reviewer: string;
    location: string;
    date: string;
    lessons: number;
    quote: string;
    whole: string;
  }
  
 export const reviews: ReviewData[] = [
    {
        reviewer: "Jake",
        location: "Chicago, IL",
        date: "7/5/2024",
        lessons: 24,
        quote: "Amazing Teacher!",
        whole: "Oliver is an amazing teacher in Python, Data Science, and Machine Learning. His knowledge and expertise as a tutor is excellent. He is also very patient and understanding. Going to miss him when my class is over."
    },
    {
        reviewer: "Clayton",
        location: "Colleyville, TX",
        date: "3/5/2024",
        lessons: 37,
        quote: "Excellent Machine Learning Tutor!",
        whole: "This is the second semester I've done tutoring with Oliver for Machine Learning. I learn and retain information much better when I'm able to talk things through with somebody who really has a good understanding of the subject matter. Oliver's experience and familiarity with Machine Learning has helped me address gaps in my understanding. He's been able to show me examples of the concepts we've discussed in class. He's been able to introduce new concepts that are relevant to what we're discussing in class, and that's given me an even fuller understanding of those concepts. I always end a session feeling more prepared for that week's work. I'm getting a lot more out of my courses than I would have otherwise."
    },
    {
        reviewer: "Marcus",
        location: "Columbus, OH",
        date: "1/5/2024",
        lessons: 15,
        quote: "Knowledgeable AI / LLM / Data Science tutor",
        whole: "Oliver is an exceptional guide in (but not limited to) the realms of AI, LLM, and Data Science. His profound knowledge, coupled with an extraordinary ability to simplify complex concepts, makes learning both effective and enjoyable. Remarkably patient, they ensure thorough understanding, adapting their teaching style to individual needs. Every session is packed with insightful, practical examples that bridge theory and real-world application, enhancing the learning experience. Oliver's passion for the subjects is infectious, making each moment spent with him not only educational but truly inspiring. In short, he is the ideal mentor for anyone looking to delve into these challenging yet exciting fields. Highly recommended for his personalized, engaging, and comprehensive teaching approach."
    },
    {
        reviewer: "Kevin",
        location: "Lauderdale, FL",
        date: "12/13/2023",
        lessons: 11,
        quote: "Great Statistics Teacher!",
        whole: "Love it!!! We went over all my questions and Oliver is wonderful on advanced stat materials. Can’t wait to have another session with him"
    },
    {
      reviewer: "Mark",
      location: "New York, NY",
      date: "9/21/2023",
      lessons: 9,
      quote: "Makes challenging subjects simple",
      whole: "I found him easy to communicate with and develop a rapport. He rapidly understood my problem and, without hesitation, offered very insightful solutions. Whenever we went over complex material, he explained it thoroughly and offered additional resources to reinforce the concepts. Patient and very considerate of different learning styles."
    },
    {
      reviewer: "Katie",
      location: "Overland Park, KS",
      date: "9/15/2023",
      lessons: 7,
      quote: "Super Knowledgeable and Helpful",
      whole: "Oliver helped me out with one of my labs for my environmental science class and it helped me with some areas that I am struggling in. Science classes have always been a pain point for me and it was refreshing to have somebody patient to work with me. Highly recommend"
    },
    {
      reviewer: "Grace",
      location: "Los Angeles, CA",
      date: "9/12/2023",
      lessons: 3,
      quote: "Very Helpful and Efficient",
      whole: "He was super helpful. Thank you so much for help preparing me for my exam. Oliver, you were super great!!"
    },
    {
      reviewer: "Evan",
      location: "Dublin, CA",
      date: "9/9/2023",
      lessons: 3,
      quote: "Helpful and Knowledgeable",
      whole: "Oliver helped me tackles some issues I’ve been having with my portfolio for some time. Within one session, most of my problems were solved. If stumped in the future, I would definitely consider using him again."
    },
    {
      reviewer: "Mar",
      location: "Oakland, CA",
      date: "5/3/2023",
      lessons: 23,
      quote: "Great Teacher!",
      whole: "Oliver is a great teacher, He is super knowledgeable, patient , and helpful through the clases, I highly recommend him to anyone looking for and experience Data Science tutor."
    },
    {
      reviewer: "Ian",
      location: "Marietta, GA",
      date: "4/10/2023",
      lessons: 3,
      quote: "Great Tutor!!",
      whole: "Oliver was very patient with me, answered all of my questions thoroughly and explained the content well. I will definitely be using his services again."
    },
    {
      reviewer: "Sofia",
      location: "San Jose, CA",
      date: "4/9/2023",
      lessons: 7,
      quote: "Great Tutor!",
      whole: "very straightforward and good at walking through the steps one by one. helped my understanding of how i was supposed to solve what the question was asking!"
    },
    {
      reviewer: "Emma",
      location: "Stanford, CA",
      date: "4/5/2023",
      lessons: 3,
      quote: "Great Tutor!! Very Helpful",
      whole: "He helped with build a simple model I was working on. He solved my problem fairly quickly, and I felt like I efficiently learned what I needed to. Thank you!!"
    },
    {
      reviewer: "Preeti",
      location: "Decatur, GA",
      date: "4/3/2023",
      lessons: 17,
      quote: "Excellent Tutor",
      whole: "He was a very patient and great tutor. I really look forward to continue working with him on future projects."
    },
  ];

  export const colors = ['#A7FFD5', '#C5ABFF', '#FFC8FF', '#E595E5', '#FFC8FF', '#A7FFD5', '#C5ABFF', '#E595E5', '#A7FFD5', '#C5ABFF', '#FFC8FF'];

  export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  