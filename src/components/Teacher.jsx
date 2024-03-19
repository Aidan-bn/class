import { useState } from "react";
import { Link } from 'react-router-dom';
import { classLists } from "../menu/classList";
import TeacherCatalogue from "./TeacherCatalogue";

const Teacher = () => {
  const [show, setShow ] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const switchContent = () => {
    setShow((prev) => !prev);
  }
  
    return (
      <div className="primary ">
          <div className="div-primary">
           <h1>Book a teacher</h1>
           <div className="main-primary">
              <aside className="space">
                <menu
                  className="teacher-list"
                >
                  {classLists.map((list, index) => 
                    <li 
                      key='id'
                      className={ selectedIndex === index ? 'active-link' : 'active'}
                      >
                        <Link 
                          to={list.url} 
                          key="index"
                          onClick={() => {setSelectedIndex(index); }} 
                          onSelect={switchContent}
                        >
                          {list.name}
                        </Link>
                    </li>
                  )}
                </menu>
                <p>
                  You can create an account now 
                  to receive offers <br />
                  <Link to={'/'}>Register</Link> | <Link to={'/login'}>Log In</Link>
                </p>
              </aside>
              <aside>
                {
                  show &&
                  <TeacherCatalogue />
                }
              </aside>
           </div>
          </div>
      </div>
    );
  }
  export default Teacher;
  