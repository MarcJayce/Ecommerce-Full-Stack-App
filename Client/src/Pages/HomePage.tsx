import Header from "../Components/header";
import Carousel from "../Components/Carousel";
import { useNavigate } from 'react-router-dom';
// import Footer from "../Components/footer";

export default function HomePage() {
  const navigate = useNavigate();
  const goToShopTab = (tab: string) => {
      navigate(`/shop?tab=${tab}`);
    };
  return (
    <>
       <Header /> 
      <Carousel />
      <div className="container-fluid d-flex justify-content-center align-items-center text center">
        <h1 className="text-center mt-5">SHOP THE BEST GEAR</h1>
      </div>
      <div className="wrapper container-fluid d-flex justify-content-center align-items-center text center mb-5">
        <div className="row">
          <div className="col">
            <img src="src/assets/cardImg/card1.jpg" className="img-fluid" alt="" />
            <div className="overlay">
              <h1 className="text-white">Roadbike</h1>
              <button className="btn btn-dark w-100"
              onClick={() => goToShopTab('road')}
              >Shop Now</button>
            </div>
          </div>
          <div className="col">
            <img src="src/assets/cardImg/card2.jpg" className="img-fluid" alt="" />
            <div className="overlay">
              <h1 className="text-white">MountainBike</h1>
              <button className="btn btn-dark w-100"
              onClick={() => goToShopTab('mtb')}
              >Shop Now</button>
            </div>
          </div>
          <div className="col">
            <img src="src/assets/cardImg/card3.jpg" className="img-fluid" alt="" />
            <div className="overlay">
              <h1 className="text-white">accessories</h1>
              <button className="btn btn-dark w-100"
              onClick={() => goToShopTab('gear')}
              >Shop Now</button>
            </div>
          </div>
        </div>

      </div>
           
      {/* <Footer /> */}
      
    </>
  );
}
