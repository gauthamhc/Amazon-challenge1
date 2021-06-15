import React from "react";
import "./Home.css";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Xiaomi/Events/June/MSD1/RedmiNote10S/Newdate/D24311141_MSD_WLD_RedmiNote10S_DesktopTallHero_3000x1200._CB666281618_.jpg"
          alt="homeimage"
        />

        <div className="home__row">
          <Product
            title="Oxygen concentrators"
            price="250"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg"
            rating={5}
            id={Math.random() * 5}
          />
          <Product
            title=" Electronics clearance store"
            price="250"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/MayART_CC_2x-PC_Oxy._SY608_CB667446293_.jpg"
            rating={5}
            id={Math.random() * 4}
          />
        </div>
        <div className="home__row">
          <Product
            title="Protien Powder"
            price="250"
            image="https://m.media-amazon.com/images/I/81mrNUdG8rL._AC_SY400_.jpg"
            rating={5}
            id={Math.random() * 5}
          />
          <Product
            title="LAGO Lamp"
            price="250"
            image="https://m.media-amazon.com/images/I/71hP1JEHDFL._AC_SY400_.jpg"
            rating={5}
            id={Math.random() * 5}
          />
          <Product
            title="Grocery & Gourmet Foods"
            price="250"
            image="https://m.media-amazon.com/images/I/81rt1QmhZIL._AC_SY400_.jpg"
            rating={5}
            id={Math.random() * 5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Furnitures"
            price="250"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/inpbgwbaudesktop/xcm_banners_bau_2021_desktop-quadcard-758x608-product-badge-qz4ea_758x608_in-en._SY608_CB666248147_.jpg"
            rating={5}
            id={Math.random() * 5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
