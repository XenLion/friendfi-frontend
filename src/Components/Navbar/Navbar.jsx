import "./Navbar.scss"
import image from "../../Assets/testlogo.png"

const Navbar = () => {
  return (
      <nav>
          <img src={image} alt="" className="logo"/>
          <ul className="navigationItems">
              <li>
                  item 1
              </li>
              <li>
                  item 1
              </li>
              <li>
                  item 1
              </li>
          </ul>
      </nav>
  )
}

export default Navbar