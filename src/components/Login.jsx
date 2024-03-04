const Login = () => {
  return (
    <>
       <div className="primary">
            <div className="div-primary">
              <h3 className="div-title">Login for better experience</h3>
              <div className="login-div">
                <form>
                    <label>
                        User name:
                        <input 
                            type="text" 
                            placeholder="Admin"
                            name="user-name"
                        />
                    </label>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            placeholder="******"
                            name="user-name"
                        />
                    </label>
                    <button>
                        Log In
                    </button>
                </form>
                <p>
                    By signing In, you will be able brouwse all
                    our reading materials
                </p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Login
