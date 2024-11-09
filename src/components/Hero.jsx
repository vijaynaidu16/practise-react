import Cards from "./Cards";
import Header from "./Header";

const Hero = () => {
  return (
    <>
    <Header/>
      <div className="main">
      <h1 className="title">Data to enrich your online business</h1>
      <div className="text">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
      </div>
      <div>
        <button className="btn1">Get Started</button>
        <button className="btn2">Learn More</button>
      </div>
    </div>
    <Cards/>
    </>
  );
};

export default Hero;
