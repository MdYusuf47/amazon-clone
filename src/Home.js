import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" srcset="" />
            <div className="home_row">
                <Product
                    id="1"
                    title="This is a school bag  and i will purches it today in our"
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg"
                />
                <Product
                    id="2"
                    title="This is a a "
                    price={11.96}
                    rating={5}
                    image="https://i.pinimg.com/736x/b4/d0/cf/b4d0cf8787fcf3fa318ae283bca2d7d1.jpg"
                />

            </div>
            <div className="home_row">
                <Product
                    id="3"
                    title="Apple's iPad Air 256GB "
                    price={11.96}
                    rating={5}
                    image="https://s.yimg.com/uu/api/res/1.2/oYjezWt4jQ5K4DKKtCN_3w--~B/Zmk9ZmlsbDtoPTQ1MTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-03/ab83b470-7cf1-11eb-bffb-c5f29004dec8.cf.jpg"
                />
                <Product
                    id="4"
                    title="Amazon.com: Apple iPhone 12 Pro Max (128GB, Pacific Blue)"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg"
                />
                <Product
                    id="5"
                    title="Apple Watch SE (GPS, 44mm) - Gold Aluminium Case with Pink Sand Sport Band"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81Mc+otzDfL._SX522_.jpg"
                />

            </div>
        </div>
    );
}

export default Home;

