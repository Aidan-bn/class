//import { Link } from "react-router-dom"
function Register() {
  return (
    <>
      <div className="register">
        <h3>Register Student</h3>
        {/* <Link to="/register">Go</Link> */}
        <form>
          <fieldset>
            <legend>Enter your Credentials</legend>
            <label className="form-label">
              Name:
              <input type="text" placeholder="Full name" />
            </label>
            <label className="form-label">
              Email:
              <input type="text" placeholder="Email adress" />
            </label>
            <label className="form-label">
              Phone:
              <input type="number" placeholder="Phone number" />
            </label>
            <label className="form-label">
              Gender:
            </label>
            <label className="radios">
              Male:<input type="radio" name="gender" value="male" />
              Female:<input type="radio" name="gender" value="female" />
            </label>
            <button className="submit">Submit</button>
          </fieldset>
        </form>
        <p className="p-login">
          I have an account <strong>Log In</strong>
        </p>
      </div>
    </>
  )
}

export default Register
