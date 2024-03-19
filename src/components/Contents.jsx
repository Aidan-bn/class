import { useRef, useState } from 'react';
import { useHideAndShow } from './useHideAndShow';
import student from '/student.png';
import Register from './Register';

const Content = () => {
    const [overlay, setOverlay] = useState(false);
    
    const handleClick = () => {
        setOverlay((prev) => !prev)
    };

    const ref = useRef();
    useHideAndShow(ref, overlay, () => setOverlay(false));

    return (
        <>
            <div className="contents">
                <main className='main-page'>
                    <p ref={ref}> 
                        <span>
                            Hello Students !
                        </span>
                        Welcome to our online platform for students from all level
                        where one can view and read different materials from trusted sources
                        and meet teachers virtually to discuss about school stuffs together.
                        {/* <a href={'#'}>Log In</a> */}<br/>
                        <button
                            onClick={handleClick}
                            >
                            subscribe now
                        </button>
                        {
                            overlay && 
                            <Register />
                        }
                    </p>
                    <img src={student} alt='student' className='img-student'/>
                </main>
            </div>
        </>
    )
}
export default Content;
