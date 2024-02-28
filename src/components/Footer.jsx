import x from '/TwitterX.svg';
import insta from '/Instagram.svg';
import fb from '/Facebook.svg';
import linkedin from '/LinkedIn.svg';

const Footer = () => {
  return (
    <>
        <div className="footer">
            <h3>
                Here are some usefull links.
                <div className="social">
                    <menu className='menu-social'>
                        <li>
                           <img src={x} alt='twitter' className='social-logo' />
                        </li>
                        <li>
                            <img src={insta} alt='Instagram' className='social-logo' />
                        </li>
                        <li>
                            <img src={fb} alt='Facebook' className='social-logo' />
                        </li>
                        <li>
                            <img src={linkedin} alt='LinkedIn' className='social-logo' />
                        </li>
                    </menu>
                    <menu>
                        <li>
                            Top 10 best schools
                        </li>
                        <li>
                            Upcoming courses
                        </li>
                        <li>
                            Study camps
                        </li>
                        <li>
                            Tutions
                        </li>
                    </menu>
                    <menu>
                        <li>
                            Education Policy
                        </li>
                        <li>
                            Science for Girls
                        </li>
                        <li>
                            Schools efforts
                        </li>
                        <li>
                            Students voices
                        </li>
                    </menu>
                </div>
                
            </h3>
        </div>
    </>
  )
}

export default Footer
