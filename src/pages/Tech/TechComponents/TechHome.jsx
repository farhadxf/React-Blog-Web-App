import { Link } from 'react-router-dom';
import TechCard from './TechCard';
import TechData from './TechData';
import '../Tech.scss';

const TechHome = () => {
  const featuredPost = TechData[0]; //selects a specific item from the TechData array
  const recentPosts = TechData.slice(0); //creates a copy of the entire TechData array starting from the first item (index 0)

  return (
    //featuredPost is a defined varibale object represt array of items from which it's import image and title
    <div className='tech-home'>
      <Link to={featuredPost.slug}>
        <div className='tech-home-featured-post'>
          <img src={featuredPost.image} alt={featuredPost.title} />
          <h1>{featuredPost.title}</h1>
        </div>
      </Link>
      <div className='tech-home-recent-post'>
        {recentPosts.map((post) => (
          // recentPosts is an array variable containing data from TechData, and (post) as its parameter or variable represents each item in the recentPosts array.
          // The key prop is used to uniquely identify each item in the TechData array.

          <TechCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
        ))}
      </div>
    </div>
  );
};

export default TechHome;
