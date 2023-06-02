import style from './about.module.css'

const About =() =>{
    return(
        <div className={style.contenedor}>
            <h1 className={style.titulo}>¡Saludos!</h1>
            <span className={style.span1}>
Soy Monroy Mikaela, 
<br />
    <br />
me complace compartir con ustedes uno de mis primeros proyectos. 

<br />
    <br />
Con una dedicación absoluta, lo he creado con el propósito de sumergirme en este fascinante camino 
<br />
  del aprendizaje como Desarrolladora Full Stack.
  <br />
    <br />
Permítanme presentarles esta creación, con la esperanza de que la disfruten tanto como yo disfruté haciéndola. ¡Bienvenidos!
            </span >

       

         <div className={style.slider}>
        <ul>
            <li><img src="https://fondosmil.com/fondo/52334.jpg" alt=""/></li>
            <li><img src="https://s3.abcstatics.com/media/play/2017/09/28/rick-morty-kaJC--620x349@abc.jpg" alt=""/></li>
            <li><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-s5-2-1625139647.jpg?crop=0.7533048606874111xw:1xh;center,top&resize=1200:*" alt=""/></li>
            <li><img src="https://elcomercio.pe/resizer/qj-QSzEeqxEkrWUDw8LJKLKAs1o=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZDLEN74CD5HVLNMVM2PKASNIJA.jpg" alt=""/></li>
        </ul>
    </div>
            {/* <img className={style.imagen} src="https://img.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg?w=740&t=st=1685411061~exp=1685411661~hmac=21c880859408583cfef3e44e42fc538e97d41ceae13ae3c985c718b261e1d327" alt="" /> */}
        </div>
    );

}
export default About;