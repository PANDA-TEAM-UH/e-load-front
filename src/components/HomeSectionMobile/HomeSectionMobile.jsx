// import React from 'react'

const HomeSectionMobile = () => {
  return (
    <section className="home__container-mobile">
      <div className="home__description">
        <div className="home__description-section">
          <h2>Find/</h2>
          <p>
            Encuentra los puntos de recarga que mejor se adapten a tus
            necesidades allá donde vayas. Busca entre más de x puntos de carga.
          </p>
        </div>

        <div className="home__description-section">
          <h2>Charge/</h2>
          <p>Activa tu cargador desde nuestra APP.</p>
        </div>

        <div className="home__description-section">
          <h2>Go/</h2>
          <p>
            Creamos una experiencia mas fluida y dinámica para que no tengas de
            que preocuparte.
          </p>
        </div>
      </div>

      <div className="home__section-mobile">
        <img src="PONER IMAGEN DEL MOVIL" alt="front-phone" />
        <img src="PONER IMAGEN CON MAPA" alt="map-phone" />
      </div>
    </section>
  );
}

export default HomeSectionMobile