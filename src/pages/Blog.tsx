import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fm from 'front-matter';
import Contact from '../components/Contact';

interface PostData {
  slug: string;
  frontmatter: {
    title: string;
    subtitle: string;
    date: string;
    keywords: string[];
  };
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    // Scroll to top of page when linked here from button
    window.scrollTo(0, 0); 
    
    const fetchPosts = async () => {
      const postFiles = [
        '/olivertutor.me/posts/2024-07-12-Dont-say-what-you-mean-embed-it.md',
        '/olivertutor.me/posts/2024-07-11-Calc-III-study-guide.md'
        // Add more posts here
      ];

      const posts = await Promise.all(
        postFiles.map(async (file) => {
          const response = await fetch(file);
          const text = await response.text();
          const { attributes: frontmatter } = fm<{ title: string; subtitle: string; date: string; keywords: string[]; }>(text);
          const slug = file.split('/').pop()?.replace('.md', '') || '';

          debugger; // This will pause execution and allow you to inspect `frontmatter` and `slug`

          return { slug, frontmatter };
        })
      );

      posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-5">
        <h1 className="text-6xl font-bold text-center text-customPurple mb-10">Blog</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <div className="flex-grow">
                <Link to={`/posts/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-2">{post.frontmatter.title}</h2>
                  <p className="text-gray-600">{new Date(post.frontmatter.date).toDateString()}</p>
                </Link>
              </div>
              <div className="mt-4 flex flex-wrap space-x-2 space-y-2 items-center">
                {post.frontmatter.keywords.map((keyword, index) => (
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

