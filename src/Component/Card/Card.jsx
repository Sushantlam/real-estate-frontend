
import { Link } from "react-router-dom";
import "./Card.scss";
import { FaBath, FaBed, FaTrainSubway } from "react-icons/fa6";
import { MdOutlineChatBubble, MdOutlineSaveAlt } from "react-icons/md";


function Card({ item }) {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
        <FaTrainSubway className="icons" />
         
          <span>{item.address}</span>
        </p>
        <p className="price">Rs {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
            <FaBed className="icons"/>
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
            <FaBath className="icons"/>
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
            <MdOutlineSaveAlt className="icons"/>
            </div>
            <div className="icon">
            <MdOutlineChatBubble  className="icons"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
