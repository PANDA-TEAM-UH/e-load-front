// import React from 'react'

const AboutInnovation = () => {
  return (
    // <section className="about__container-innovation" PODEMOS USAR SECTION EN LUGAR DE PRIMER DIV PARA ESTE BLOQUE?>
    <div className="about__container-innovation">

      <div className="about__header-innovation">
        <h2 className="title-innovation">Nuestros principios de innovación</h2>
        <p>Todo lo que hemos creado responde a nuestros principios:</p>
      </div>

      <div className="about__information-innovation">
        <div className="information-simple">
          IMAGEN
          <h3 className="title-information">Simple</h3>
          <p className="text-information">Fácil de acceder</p>
          <p className="text-information">, comprender y controlar</p>
        </div>

        <div className="information-inteligente">
          IMAGEN
          <h3 className="title-information">Inteligente</h3>
          <p className="text-information">Siempre conectado</p>
          <p className="text-information">, contigo y con tu vida</p>
        </div>

        <div className="information-user">
          IMAGEN
          <h3 className="title-information">Centrado en el usuario</h3>
          <p className="text-information">Diseñado para ti</p>
          <p className="text-information">, con una estética muy cuidada</p>DS
        </div>
      </div>
    </div>
  );
};

export default AboutInnovation