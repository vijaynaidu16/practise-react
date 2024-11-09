import { FcImageFile } from "react-icons/fc";

const Cards = () => {
  return (
    <div className="cards">
    <div className="card-main">
        <img src="https://picsum.photos/300/300?random=1" alt="" />
        <h4>Everything is available here  <span><FcImageFile /></span> </h4>
       
        <button className="card-button">View More </button>
    </div>
    <div className="card-main">
        <img src="https://picsum.photos/300/300?random=2" alt="" />
        <h4>Everything is available here</h4>
        <button className="card-button">View More</button>
    </div>
    <div className="card-main">
        <img src="https://picsum.photos/300/300?random=2" alt="" />
        <h4>Everything is available here</h4>
        <button className="card-button">View More</button>
    </div>
    <div className="card-main">
        <img src="https://picsum.photos/300/300?random=4" alt="" />
        <h4>Everything is available here</h4>
        <button className="card-button">View More</button>
    </div>
    <div className="card-main">
        <img src="https://picsum.photos/300/300?random=5" alt="" />
        <h4>Everything is available here</h4>
        <button className="card-button">View More</button>
    </div>
    <div className="card-main">
        <img src="https://picsum.photos/300/300?random=6" alt="" />
        <h4>Everything is available here</h4>
        <button className="card-button">View More</button>
    </div>
    <div className="card-main">
        <img src="https://picsum.photos/300/300?random=7" alt="" />
        <h4>Everything is available here</h4>
        <button className="card-button">View More</button>
    </div>
    <div className="card-main">
        <img src="https://picsum.photos/300/300?random=8" alt="" />
        <h4>Everything is available here</h4>
        <button className="card-button">View More</button>
    </div>
    </div>
  )
}

export default Cards