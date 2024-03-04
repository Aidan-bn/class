import student from '../assets/student.png';
import Register from './Register';

const Content = () => {
    return (
        <>
            <div className="contents">
                <main className='main-page'>
                    <p>
                        <span>
                            Hello Students !
                        </span>
                        Welcome to our online platform for students from all level
                        where one can view and read different materials from trusted sources
                        and meet teachers virtually to discuss about school stuffs together.
                        {/* <a href={'#'}>Log In</a> */}<br/>
                        <button>subscribe now</button>
                    </p>
                    <img src={student} alt='student' className='img-student'/>
                </main>
            </div>
            <Register />
        </>
    )
}
export default Content;
