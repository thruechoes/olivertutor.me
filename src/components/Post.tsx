import React from 'react';
import 'tailwindcss/tailwind.css';

interface PostProps {
  title: string;
  date: string;
  content: string;
}

const Post: React.FC<PostProps> = ({ title, date, content }) => (
  <article className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-8 space-y-4">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-gray-500">{date}</p>
    <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
  </article>
);

export default Post;
