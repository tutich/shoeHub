import Button from "../Components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="recommend">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button  onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Louis Vuitton" title="Louis Vuitton" />
          <Button onClickHandler={handleClick} value="Jordan" title="Jordan" />
        </div>
      </div>
    </>
  );
};

export default Recommended;