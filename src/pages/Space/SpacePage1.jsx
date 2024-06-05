import './Space.scss';
import { Link } from 'react-router-dom';

import SpaceCard from './SpaceComponents/SpaceCard';
import SpaceData from './SpaceComponents/SpaceData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//-----------------------import finished line-------------

const SpacePage1 = () => {
  const spaceMore = SpaceData.slice(-10);
  //(-3): to show last 3 added items
  //(0, 3):to show first 3 items

  return (
    <div className='space-container'>
      <div className='space-container-post'>
        <div className='space-heading'>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae animi voluptatum perferendis soluta
            voluptatibus quod odio quam officia.{' '}
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eum, dolores vitae quo et similique officia,
            deleniti, tempora ducimus dolorem blanditiis deserunt saepe hic id quasi? Optio autem rem quo?
          </p>
        </div>

        <div className='author'>
          <Link to='xx'>
            <img
              src='https://images.pexels.com/photos/6325979/pexels-photo-6325979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
          </Link>
          <Link to='xx' className='author-name'>
            by name
          </Link>
        </div>
        <div className='publish-date'>
          <FontAwesomeIcon icon={faClock} /> day-month-year
        </div>

        <div className='space-heading-img'>
          <img src='https://images.pexels.com/photos/2156/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <div className='space-media-credit'>Image credit: ...</div>
        </div>
        {/* or video for heading if needed */}
        {/*      <div className='space-heading-vid'>
          <video src='/assets/videos/...' controls></video>
          <div className='space-media-credit'>Video credit: ...</div>
        </div> */}

        <div className='space-info'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis totam ut rerum nihil expedita voluptatem
            harum quos accusamus nostrum. Voluptates beatae ut exercitationem dignissimos fugit ab, consequatur aliquid.
            Animi, labore.
          </p>
          <br />
          <div className='space-info-img'>
            <img
              src='https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <div className='space-media-credit'>Image credit: ...</div>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id itaque dolor porro officia! Ipsam voluptate
            error sit saepe possimus? Aut quasi esse officia debitis sed? Recusandae fugit at animi quo. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Omnis, non nihil. Ipsam quis ea, architecto accusamus
            accusantium dolores earum fuga, eum quae iste dolorem saepe. Placeat distinctio eligendi dolore explicabo?
          </p>

          <div className='space-info-vid'>
            <video src='https://videos.pexels.com/video-files/856142/856142-hd_1280_720_30fps.mp4' controls></video>
            <div className='space-media-credit'>Video credit: ...</div>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit expedita exercitationem, aut iure dolor,
            reiciendis assumenda deserunt consequuntur voluptatum minus aperiam a doloremque optio quam cum quod natus,
            dolore illum!
          </p>
        </div>

        <div className='space-latest'>
          <hr />
          Latest from .. Space
        </div>

        <div className='space-more'>
          {spaceMore.map((post) => (
            <SpaceCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpacePage1;
