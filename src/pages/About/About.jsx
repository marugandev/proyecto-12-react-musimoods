import "./About.css";

import Footer from "../../components/organisms/Footer/Footer";

const About = () => {
  return (
    <section className="about page-enter-animation">
      {/*  <h2 className="about-title">Acerca de</h2> */}
      <div className="about-image">
        <article className="about-description">
          <p className="about-description">
            Descubre música según tu estado de ánimo.
          </p>
          <p className="about-description">
            {" "}
            La aplicación utiliza YouTube para mostrar videos musicales de forma
            aleatoria basados en el estado de ánimo que elijas.
          </p>
          <p className="about-description">
            Solo <span className="about-description-span">selecciona</span> un{" "}
            <span className="about-description-span">estado de ánimo</span> y{" "}
            {""}
            <span className="about-description-span">disfruta</span> de
            canciones recomendadas que se ajusten a ese sentimiento.
          </p>
        </article>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default About;
