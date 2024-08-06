import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

interface BlogPostProps {
  slug: string;
  month: string;
  title: string;
  subtitle: string;
  date: string;
  keywords: string[];
}

const blogPosts: BlogPostProps[] = [
  {
    slug: 'Stats-for-Data-Science-Study-Guide',
    month: 'august2024',
    title: "Statistics for Data Science Study Guide",
    subtitle: 'Step-by-step solution guide to mathematical statistics for data science',
    date: '2024-08-06',
    keywords: ['Statistics', 'Data Science', 'Mathematical Statistics', 'Hypothesis Testing', 'MLE']
  },
  {
    slug: 'Dont-Say-What-You-Mean-Embed-It',
    month: 'july2024',
    title: "Don't say what you mean, embed it",
    subtitle: 'A deep dive into NLP embeddings',
    date: '2024-07-26',
    keywords: ['NLP', 'Transformers', 'Embeddings', 'AI', 'Attention']
  },
  {
    slug: 'Calc-III-Study-Guide',
    month: 'june2024',
    title: 'Calc III Study Guide',
    subtitle: 'Mastering Multivariable Calculus',
    date: '2024-06-14',
    keywords: ['Math', 'Calculus 3', 'Multivariate', 'Calculus', 'Study Guide', 'UC Berkeley']
  },
  // Add more posts here
];

const Blog: React.FC = () => {
  useEffect(() => {
    // Scroll to top of page when linked here from button
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-5">
        <h1 className="text-6xl font-bold text-center text-customPurple m-12">Blog</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex-grow">
                <Link to={`/posts/${post.month}/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600">{new Date(post.date).toDateString()}</p>
                  <p className="text-gray-500">{post.subtitle}</p>
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap space-x-2 space-y-2 items-center">
                {post.keywords.map((keyword, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mt-2 ml-2">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
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
    </div>
  );
};

export default Blog;
