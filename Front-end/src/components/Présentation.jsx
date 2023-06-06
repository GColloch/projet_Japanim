import React from 'react';

const Présentation = () => {
    
  return (
    <div>      
      <img className="banner-image" src="/media/header/sunny.png" alt="Image de la bannière" />

      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">Nos produits phares</h1>
        </div>
      </div>

      <section id="slider">
        <input type="radio" name="slider" id="s1" checked />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s5" />

        <label htmlFor="s1" id="slide1">
          <div className="productCaroussel" style={{ width: '300px', height: '400px' }}>
            <div className="image2Caroussel namePriceCaroussel">
              <h3>POSTER DE MHA</h3>
              <img className="mhacaroussel" src="/media/posters/mha.png" alt="Image du manga" />
              <img className='New' src="/media/body/NEW.png" alt="" />
            </div>
            <div className="namePriceCaroussel">
              <span>19,99 €</span>
            </div>
            <p>Poster de l’animé <br />
            « My Hero Academia »</p>
            <div className="bayCaroussel">
              <button>voir le produit</button>
            </div>
          </div>
        </label>

        <label htmlFor="s2" id="slide2">
          <div className="productCaroussel" style={{ width: '300px', height: '400px' }}>
            <div className="image2Caroussel namePriceCaroussel">
              <h3>Manga DB</h3>
              <img className="DBZ" src="/media/mangas/dbz.jpg" alt="Image du manga" />
            </div>
            <div className="namePriceCaroussel">
              <span>6,99 €</span>
            </div>
            <p>Manga de l'animé <br />
            « Dragon Ball »</p>
            <div className="bayCaroussel">
              <button>voir le produit</button>
            </div>
          </div>
        </label>

        <label htmlFor="s5" id="slide3">
          <div className="productCaroussel" style={{ width: '300px', height: '400px' }}>
            <div className="image2Caroussel namePriceCaroussel">
              <h3>Tanjiro</h3>
              <img className="DemonSlayercaroussel" src="/media/figurines/tanjiro.png" alt="Image du manga" />
            </div>
            <div className="namePriceCaroussel">
              <span>83,99 €</span>
            </div>
            <p>Figurine de l'animé <br />
            « Demon slayer »</p>
            <div className="bayCaroussel">
              <button>voir le produit</button>
            </div>
          </div>
        </label>
      </section>
    </div>
  );
};

export default Présentation;
