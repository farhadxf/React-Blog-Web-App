import React from 'react';
import { Link } from 'react-router-dom';
import SpaceCard from './SpaceCard';
import SpaceData from './SpaceData';
import '../Space.scss';

const SpaceHome = () => {
  const featuredPost = SpaceData[1];
  const recentPosts = SpaceData.slice(0);

  return (
    <div className='space-home'>
      <Link to={featuredPost.slug}>
        <div className='space-home-featured-post'>
          <img src={featuredPost.image} alt={featuredPost.title} />
          <h1>{featuredPost.title}</h1>
        </div>
      </Link>

      <div className='space-home-recent-post'>
        {recentPosts.map((post) => (
          <SpaceCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
        ))}
      </div>
    </div>
  );
};

export default SpaceHome;
