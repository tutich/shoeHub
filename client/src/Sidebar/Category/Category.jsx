import "./Category.css";
import Input from '../../Components/Input';

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Deck"
          title="Deck"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="slip-on"
          title="slip-on"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="canvas"
          title="canvas"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;