import style from './about.module.css'

const About =() =>{
    return(
        <div className={style.contenedor}>
            <p>Hola soy mika</p>
            <img className={style.imagen} src="https://img.freepik.com/foto-gratis/imagen-primer-plano-programador-trabajando-su-escritorio-oficina_1098-18707.jpg?w=740&t=st=1685411061~exp=1685411661~hmac=21c880859408583cfef3e44e42fc538e97d41ceae13ae3c985c718b261e1d327" alt="" />
        </div>
    );

}
export default About;