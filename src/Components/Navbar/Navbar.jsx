import "./Navbar.scss"
// import image from "../../Assets/testlogo.png"

const Navbar = () => {
  return (
      <nav>
          <h1 className="logo">friendfi</h1>
          <ul className="navigationItems">
              <li className="navigationItem">
                  <h4>Account</h4>
              </li>
              <li className="navigationItem">
                  <h4><a href="/signin" className="link">Sign in</a></h4>
              </li>
              <li className="navigationItem">
                  <button type="button" className="button">
                      <h4>Sign up</h4>
                  </button>
              </li>
          </ul>
      </nav>
  )
}

export default Navbar