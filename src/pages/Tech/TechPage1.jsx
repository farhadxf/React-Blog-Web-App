import './Tech.scss';
import { Link } from 'react-router-dom';

import TechCard from './TechComponents/TechCard';
import TechData from './TechComponents/TechData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

//-----------------------import finished line-------------

const TechPage1 = () => {
  const techMore = TechData.slice(-9);
  //(-3): to show last 3 added items
  //(0, 3):to show first 3 items

  return (
    <div className='tech-container'>
      <div className='tech-container-post'>
        <div className='tech-heading'>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quaerat quisquam! Ad tempora sapiente
            commodi fuga dolores
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis atque tenetur, dolorum placeat
            accusantium ipsam eveniet quaerat. Nostrum eius magnam voluptatem! Corporis nobis suscipit libero fugiat
            exercitationem quo? Tempore, et?
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
          <FontAwesomeIcon icon={faClock} /> 24 January 2024
        </div>

        <div className='tech-heading-img'>
          <img src='https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg' alt='' />
          <div className='tech-media-credit'>Imagt sunt sint eos nobis accusam </div>
        </div>
        {/* or video for heading if needed */}
        {/*  <div className='tech-heading-vid'>
          <video controls poster=''></video>
          <div className='tech-media-credit'>Video credit: </div>
        </div> */}

        <div className='tech-info'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt a placeat magni. Voluptas, repudiandae
            optio. Rem voluptatem, necessitatibus ab, reprehenderit laborum velit animi cumque amet consectetur aliquid,
            neque eum?
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam adipisci consectetur nulla assumenda nostrum
            voluptate, doloribus cumque distinctio quam aperiam repudiandae id, qui, inventore earum iste. Et veritatis
            voluptatibus dicta!{' '}
          </p>
          <br />
          <div className='tech-info-img'>
            <img src='https://images.pexels.com/photos/8728285/pexels-photo-8728285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            <div className='tech-media-credit'>Image credit: </div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, omnis itaque ea asperiores debitis amet
            deleniti quae reprehenderit repellat non distinctio ullam, vel maiores impedit sapiente soluta voluptatem
            voluptas alias!
          </p>

          <div className='tech-info-vid'>
            <video
              src='https://videos.pexels.com/video-files/855411/855411-hd_1280_720_25fps.mp4'
              controls
              poster=''
            ></video>
            <div className='tech-media-credit'>Video credit: </div>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic animi cumque praesentium, officiis atque, qui
            itaque voluptatum quae nihil, modi accusamus ea repellat? Voluptatum ut voluptatibus deleniti autem, saepe
            eaque.
          </p>
        </div>

        <div className='tech-latest'>
          <hr />
          Latest from .. Tech
        </div>

        <div className='tech-more'>
          {techMore.map((post) => (
            <TechCard key={post.id} title={post.title} image={post.image} slug={post.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechPage1;
