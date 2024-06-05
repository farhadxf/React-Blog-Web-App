import { Link } from 'react-router-dom';
import TechCard from '/src/pages/Tech/TechComponents/TechCard.jsx';
import TechData from '/src/pages/Tech/TechComponents/TechData.jsx';
import SpaceCard from '/src/pages/Space/SpaceComponents/SpaceCard.jsx';
import SpaceData from '/src/pages/Space/SpaceComponents/SpaceData.jsx';
import BeyondCard from '/src/pages/WellnessAndBeyond/BeyondComponents/BeyondCard.jsx';
import BeyondData from '/src/pages/WellnessAndBeyond/BeyondComponents/BeyondData.jsx';
import {} from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

const Home = () => {
  const featuredPostHome = TechData[1];

  const featuredPostHomeRecent = {
    tech: TechData[0],
    tech2: TechData[0],
    space: SpaceData[0],
    beyond: BeyondData[0],
    beyond2: BeyondData[1],
  };

  const techHomeMore = TechData.slice(-4);
  const spaceHomeMore = SpaceData.slice(-4);
  const beyondHomeMore = BeyondData.slice(-4);

  return (
    <div className='home-container'>
      <div className='featured-post-home-container'>
        <div className='featured-post-home-one-container'>
          <Link to={featuredPostHome.slug}>
            <div
              className='featured-post-home-one'
              style={{
                backgroundImage: `url(${featuredPostHome.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className='featured-post-home-one-items'>
                <h1>{featuredPostHome.title}</h1>
                <hr />
                <p>{featuredPostHome.description}</p>
              </div>
            </div>
          </Link>
        </div>

        <div className='featured-post-home-recent-container'>
          <div className='top-stories'>Top Stories</div>

          <div className='featured-post-home-recent'>
            <Link to={featuredPostHomeRecent.tech.slug}>
              <div className='featured-post-home-recent-data'>
                <h1>1</h1>
                <img src={featuredPostHomeRecent.tech.image} alt={featuredPostHomeRecent.tech.title} />
                <p>{featuredPostHomeRecent.tech.title}</p>
              </div>
            </Link>
          </div>
          <hr />

          <div className='featured-post-home-recent'>
            <Link to={featuredPostHomeRecent.tech2.slug}>
              <div className='featured-post-home-recent-data'>
                <h1>2</h1>
                <img src={featuredPostHomeRecent.tech2.image} alt={featuredPostHomeRecent.tech2.title} />
                <p>{featuredPostHomeRecent.tech2.title}</p>
              </div>
            </Link>
          </div>
          <hr />

          <div className='featured-post-home-recent'>
            <Link to={featuredPostHomeRecent.space.slug}>
              <div className='featured-post-home-recent-data'>
                <h1>3</h1>
                <img src={featuredPostHomeRecent.space.image} alt={featuredPostHomeRecent.space.title} />
                <p>{featuredPostHomeRecent.space.title}</p>
              </div>
            </Link>
          </div>
          <hr />

          <div className='featured-post-home-recent'>
            <Link to={featuredPostHomeRecent.beyond.slug}>
              <div className='featured-post-home-recent-data'>
                <h1>4</h1>
                <img src={featuredPostHomeRecent.beyond.image} alt={featuredPostHomeRecent.beyond.image} />
                <p>{featuredPostHomeRecent.beyond.title}</p>
              </div>
            </Link>
          </div>
          <hr />

          <div className='featured-post-home-recent'>
            <Link to={featuredPostHomeRecent.beyond2.slug}>
              <div className='featured-post-home-recent-data'>
                <h1>5</h1>
                <img src={featuredPostHomeRecent.beyond2.image} alt={featuredPostHomeRecent.beyond.image} />
                <p>{featuredPostHomeRecent.beyond2.title}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* End of fetured post and start of the card sections*/}
      <div className='sections'>
        {/* tech */}
        <div className='tech-home-card card'>
          <div className='tech-card-links'>
            <Link to='/tech' className='tech-link-title'>
              Tech Marbles
              <hr />
              <p>Explore all the latest in technology</p>
            </Link>
            <Link to='/tech'>
              <h2>
                View More
                <span className='material-symbols-outlined'>double_arrow</span>
              </h2>
            </Link>
          </div>

          <div className='tech-home-more'>
            {techHomeMore.map((post) => (
              <TechCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
            ))}
            <div className='tech-view-more-mobile'>
              <Link to='/tech'>
                <h2>
                  View More
                  <span className='material-symbols-outlined'>double_arrow</span>
                </h2>
              </Link>
            </div>
          </div>
        </div>

        {/* Space */}

        <div className='space-home-card card'>
          <div className='space-card-links'>
            <Link to='/space' className='space-link-title'>
              Space Wonders
              <hr />
              <p> Discover the latest about Space</p>
            </Link>
            <Link to='/space'>
              <h2>
                View More
                <span className='material-symbols-outlined'>double_arrow</span>
              </h2>
            </Link>
          </div>
          <div className='space-home-more'>
            {spaceHomeMore.map((post) => (
              <SpaceCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
            ))}
            <div className='space-view-more-mobile'>
              <Link to='/space'>
                <h2>
                  View More
                  <span className='material-symbols-outlined'>double_arrow</span>
                </h2>
              </Link>
            </div>
          </div>
        </div>

        {/* Beyond */}

        <div className='beyond-home-card card'>
          <div className='beyond-card-links'>
            <Link to='/beyond' className='beyond-link-title'>
              Wellness & Beyond
              <hr />
              <p>Here comes everything else</p>
            </Link>
            <Link to='/beyond'>
              <h2>
                View More
                <span className='material-symbols-outlined'>double_arrow</span>
              </h2>
            </Link>
          </div>

          <div className='beyond-home-more'>
            {beyondHomeMore.map((post) => (
              <BeyondCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
            ))}
            <div className='beyond-view-more-mobile'>
              <Link to='/beyond'>
                <h2>
                  View More
                  <span className='material-symbols-outlined'>double_arrow</span>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
