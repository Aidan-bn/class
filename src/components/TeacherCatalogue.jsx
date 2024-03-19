import { classLists } from "../menu/classList";
//import pic  from "../assets/student.jpg";
//import pic  from "../../public/student.jpg";

const TeacherCatalogue = () => {
  return (
    <div>
      <h1>
        Select a class and browse for your favourite teacher
        <div
                    className="teacher-box"
                    >
                    {
                      classLists.map((subject) =>
                        <div 
                          key='id' 
                          className="teacher-details"
                        >
                          <img src={(subject.available.pic)} alt="teacher-image" className="avatar" />
                          {/* <img src={process.env.PUBLIC_URL + '/subject.available.pic' } alt="teacher-image" className="avatar" /> */}
                          <div 
                            className="teacher-info" 
                          >
                            <h6>{subject.available.name}</h6>
                            <h6>{subject.available.subjects}</h6> 
                            <h6>{subject.available.contact}</h6>
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
      </h1>
    </div>
  )
}

export default TeacherCatalogue
