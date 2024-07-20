import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import PostPage from './pages/PostPage';
import ReviewsPage from './pages/Reviews';
import CalcIIIStudyGuide from './posts/July2024/CalcIIIStudyGuide';
import DontSayWhatYouMeanEmbedIt from './posts/July2024/DontSayWhatYouMeanEmbedIt';
import './index.css';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/posts/july2024/calc-iii-study-guide" element={<CalcIIIStudyGuide />} />
        <Route path="/posts/july2024/dont-say-what-you-mean-embed-it" element={<DontSayWhatYouMeanEmbedIt />} />
        {/*<Route path="/posts/:slug" element={<PostPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />*/}
      </Routes>
    </Layout>
  );
};

export default App;

