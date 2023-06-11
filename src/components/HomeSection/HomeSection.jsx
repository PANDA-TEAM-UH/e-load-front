import './HomeSection.scss'

const HomeSection = () => {
  return (
    <section className="home__container-section">
      <div className="home__header-section">
        <p>FIND/</p>
        <p>CHARGE/</p>
        <p>GO/</p>
      </div>

      <div className="home__header-section">
        <h2>Conduce a cualquier lugar con la app de E-LOAD/</h2>
      </div>

      <div className="home__buttons-rrss">
        <a
          href="https://play.google.com/store/apps/details?id=com.enredats.electromaps"
          target="_blank"
          rel="noopener noreferrer"
          className="link-googleplay"
        >
          <img
            src="https://uploads-ssl.webflow.com/6278f767c8039e09089ab08c/6453bc92b6498149ffc7047b_android_badge%202.png"
            alt="boton-googleplay"
            />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.enredats.electromaps"
          target="_blank"
          rel="noopener noreferrer"
          className="link-aple"
        >
          <img
            src="https://uploads-ssl.webflow.com/6278f767c8039e09089ab08c/6453bc92b6498149ffc7047b_android_badge%202.png"
            alt="boton-apple"
          />
        </a>
      </div>
    </section>
  );
}

export default HomeSection