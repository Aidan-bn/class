import { useState } from "react";
import { classLists } from "../menu/classList";
import pic  from "../assets/student.jpg";

const Teacher = () => {
  const [ show, setShow ] = useState(true);

  const switchContent = () => {
    setShow((prev) => !prev)
  }
  
    return (
      <div className="primary ">
        {/* center */}
          <div className="div-primary">
           <h1>Book a teacher</h1>
           <div className="main-primary">
              <aside>
                <menu
                  className="teacher-list">
                  {classLists.map((list) => 
                    <li 
                      key='id'
                      onClick={switchContent}
                      >
                        {list.name}
                    </li>
                  )}
                </menu>
                <p>
                  You can create an account now 
                  to receive offers <br />
                  <a href={'/'}>Register</a> | <a href={'/login'}>Log In</a>
                </p>
              </aside>
              <aside>
                {
                  show &&
                  <div
                    className="teacher-box"
                    >
                    {
                      classLists.map((subject) =>
                        <div 
                          key='id' 
                          className="teacher-details"
                        >
                          {/* <img src={subject.available.pic} alt="teacher-image" className="avatar" /> */}
                          <img src={pic} alt="teacher-image" className="avatar" />
                          <div 
                            className="teacher-info"
                          >
                            <h5>{subject.available.name}</h5>
                            <h5>{subject.available.subjects}</h5> 
                            <h5>{subject.available.contact}</h5>
                            <p>{subject.available.bio}</p>
                            <button
                              className="btn-booking"
                              >
                              Booking
                            </button>
                          </div>
                        </div>
                      )
                    }
                  </div>
                }
              </aside>
           </div>
          </div>
      </div>
    );
  }
  
  export default Teacher;
  