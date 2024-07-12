import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fm from 'front-matter';
import markdownToHtml from '../utils/mdToHtml';
import Contact from '../components/Contact';

interface Frontmatter {  
  title: string;
  subtitle: string;
  date: string;
  keywords: string[];
}

interface PostData extends Frontmatter {
  content: string;
}

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);



  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/posts/${slug}.md`);
      const text = await response.text();
      const { attributes: frontmatter, body: content } = fm<{ title: string; subtitle: string; date: string; keywords: string[] }>(text);
      const htmlContent = await markdownToHtml(content);
      const postData: PostData = {
          title: frontmatter.title,
          subtitle: frontmatter.subtitle, 
          date: frontmatter.date, 
          keywords: frontmatter.keywords,
          content: htmlContent
      };
      setPost(postData);
    };

    fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <>
      <div className="prose prose-lg mx-auto mt-10 max-w-4xl mb-200">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <h2 className="text-lg text-gray-700 mb-4">{post.subtitle}</h2>
        <p className="text-gray-500 mb-4">{new Date(post.date).toDateString()}</p>
        <div className="flex flex-wrap mb-4">
          {post.keywords.map((keyword, index) => (
            <span 
              key={index} 
              className="bg-customGreen text-navbarGray px-2 py-1 rounded-full text-sm mr-2 mb-2"
            >
              {keyword}
            </span>
          ))}
        </div>
        <hr />
        <section>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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

export default PostPage;
