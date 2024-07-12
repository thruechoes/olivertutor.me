import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import PostPage from './pages/PostPage';
import ReviewsPage from './pages/Reviews';
import './index.css';

const App: React.FC = () => {
  return (
    <Router basename="/olivertutor.me">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/posts/:slug" element={<PostPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

