import './About.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-items'>
        <div className='about-heading'>
          <h1> Blog Web</h1>
        </div>

        <div className='about-info'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi aliquid eaque a ducimus nulla! Animi velit,
            error et nisi unde earum dolor{' '}
          </p>
        </div>
      </div>
      <div className='team-title'>Meet the team</div>
      {/* team section  */}

      <div className='about-team'>
        {/* team section 1 */}
        <div className='about-admin'>
          <div className='about-admin-profile'>
            <img
              src='https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpeg'
              alt=''
            />

            <div className='about-admin-profile-text'>
              <div className='about-admin-name'>
                <h2>Admin</h2>
                <div className='about-admin-social'>
                  <Link to='/'>
                    {' '}
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </div>
              </div>
              <span className='about-admin-role'>Editor / Staff Writer</span>
            </div>
          </div>

          <div className='about-admin-info'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa, doloremque, vitae nisi eos reiciendis
              rerum dolorem numquam reprehenderit, itaque dolor saepe magnam aspernatur soluta! Quasi sint corrupti
              incidunt consequuntur.
            </p>
          </div>
        </div>

        {/* team section 2 */}
        <div className='about-author-new'>
          <div className='about-author-new-profile'>
            <img
              src='https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpeg'
              alt=''
            />
            <div className='about-author-new-profile-text'>
              <div className='about-author-new-name'>
                <h2>Author</h2>
                <div className='about-author-new-social'>
                  <Link to='/'>
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                </div>
              </div>
              <span className='about-author-new-role'>Staff Writer </span>
            </div>
          </div>

          <div className='about-author-new-info'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro esse beatae aspernatur, cum aut animi
              quibusdam officiis fuga reiciendis quidem tempore eaque veritatis nihil corporis ipsum iusto ab
              repellendus voluptates!{' '}
            </p>
          </div>
        </div>
        {/* end of new author */}
      </div>
    </div>
  );
};
export default About;
