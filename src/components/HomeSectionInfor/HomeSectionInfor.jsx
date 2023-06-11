import './HomeSectionInfor.scss'

const HomeSectionInfor = () => {
  return (
    <section className="home__container-infor">

      <div className="home__header-data">
        <div className="home__header-data-numbers">
          <p className="stations-register">150</p>
          <p className="stations-text">Puntos de carga</p>
        </div>

        <div className="home__header-data-numbers">
          <p className="members-register">10000</p>
          <p className="members-text">Miembros registrados</p>
        </div>

      </div>

      <div className="home__body-data">
        <p className="">¿Quieres descubrir nuestros puntos de carga?</p>
        {/* COMPONENTE BOTON QUE REDIRIJA AL MAPA */}
      </div>
    </section>
  );
}

export default HomeSectionInfor