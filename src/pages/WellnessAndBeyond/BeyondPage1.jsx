import './Beyond.scss';
import { Link } from 'react-router-dom';

import BeyondCard from './BeyondComponents/BeyondCard';
import BeyondData from './BeyondComponents/BeyondData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const BeyondPage1 = () => {
  const beyondMore = BeyondData.slice(-10);
  //(-3): to show last 3 added items
  //(0, 3):to show first 3 items

  return (
    <div className='beyond-container'>
      <div className='beyond-container-post'>
        <div className='beyond-heading'>
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident nostrum unde sapiente minima nisi</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quae blanditiis voluptates rem ducimus voluptas
            dignissimos qui eaque facilis, quidem quod, id nulla quam voluptatibus quis. Ut alias illo accusamus.
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
          <div className='publish-date'>
            <FontAwesomeIcon icon={faClock} /> day-month-year
          </div>
        </div>

        <div className='beyond-heading-img'>
          <img
            src='https://images.pexels.com/photos/1144410/pexels-photo-1144410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <div className='beyond-media-credit'>Image credit: ...</div>
        </div>
        {/* or video for heading if needed */}
        {/* <div className='beyond-heading-vid'>
          <video src='/assets/videos/...' controls></video>
          <div className='beyond-media-credit'>Video credit: ...</div>
        </div> */}

        <div className='beyond-info'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis reprehenderit ab laboriosam excepturi
            cupiditate dolor tenetur! Vitae ea doloribus fugiat blanditiis repudiandae adipisci dolorum? Officia
            voluptas suscipit cum sed non.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quibusdam nihil obcaecati tempore, perferendis
            dolor eum reiciendis debitis quis accusantium earum laborum. Magnam, ea repellat modi optio quaerat
            distinctio iste!
          </p>

          <div className='beyond-info-img'>
            <img
              src='https://images.pexels.com/photos/464431/pexels-photo-464431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
            />
            <div className='beyond-media-credit'>Image credit: ...</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quibusdam nihil obcaecati tempore, perferendis
            dolor eum reiciendis debitis quis accusantium earum laborum. Magnam, ea repellat modi optio quaerat
            distinctio iste!
          </p>

          <div className='beyond-info-vid'>
            <video src='https://videos.pexels.com/video-files/6503161/6503161-hd_1280_720_25fps.mp4' controls></video>
            <div className='beyond-media-credit'>Video credit: ...</div>
          </div>
        </div>

        <div className='beyond-latest'>
          <hr />
          Latest from .. Wellness and Beyond
        </div>

        <div className='beyond-more'>
          {beyondMore.map((post) => (
            <BeyondCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeyondPage1;
