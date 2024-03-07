import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa6";
import { MdPerson} from 'react-icons/md';
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="nav-container">
      
  
         <div className="bar">
           <div className="shoes">
             <h2><span className='shoe'>Shoe</span><span className='hub'>hub</span></h2>
           </div>
  
                 <div className="nav-container">
            <input
              className="search-input"
              type="text"
              onChange={handleInputChange}
              value={query}
              placeholder="Enter your search shoes."
            />
                 </div>
         </div>
        <div className="profile-container">
          <a href="#">
            <CiHeart className="nav-icons" />
          </a>
          <a href="">
            <FaCartPlus className="nav-icons" />
          </a>
          <a href="">
            <MdPerson className="nav-icons" />
          </a>
        </div>
      
    </nav>
  );
};

export default Nav;