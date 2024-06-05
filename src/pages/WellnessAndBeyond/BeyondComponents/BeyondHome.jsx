import React from 'react';
import { Link } from 'react-router-dom';
import BeyondCard from './BeyondCard';
import BeyondData from './BeyondData';
import '../Beyond.scss';

const BeyondHome = () => {
  const featuredPost = BeyondData[0];
  const recentPosts = BeyondData.slice(0);

  return (
    <div className='beyond-home'>
      <Link to={featuredPost.slug}>
        <div className='beyond-home-featured-post'>
          <img src={featuredPost.image} alt={featuredPost.title} />
          <h1>{featuredPost.title}</h1>
        </div>
      </Link>

      <div className='beyond-home-recent-post'>
        {recentPosts.map((post) => (
          <BeyondCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
        ))}
      </div>
    </div>
  );
};

export default BeyondHome;
