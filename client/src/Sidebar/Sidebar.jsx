import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <div className="side">
      <section className="sidebar">
        <div className="logo-container">
          <h1></h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
      </section>
    </div>
  );
};

export default Sidebar;