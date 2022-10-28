import Image from "next/future/image"
import { useState } from "react"
import Layout from "../../components/layout"
import styles from '../../styles/guitarras.module.css'

export default function Producto({guitarra, agregarCarrito}) {
    
    const [cantidad, setCantidad] = useState(0)
    const {nombre, descripcion, imagen, precio} = guitarra[0].attributes

    const handleSubmit = e => {
        e.preventDefault()

        if(cantidad < 1) {
            alert('Cantidad no válida')
            return
        }

        //Construir un objeto con la guitarra seleccionada
        const guitarraSelecionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        //Pasando la informacion
        agregarCarrito(guitarraSelecionada)
    }

    return (
        <Layout
            title={`Guitarra ${nombre}`}
        >
            <div>
                <div className={styles.guitarra}>
                    <Image 
                        src={imagen.data.attributes.url} 
                        width={600}
                        height={400}
                        alt={`imagen guitarra ${nombre}`}
                    />
                    <div className={styles.contenido}>
                        <h3>{nombre}</h3>
                        <p className={styles.descripcion}>{descripcion}</p>
                        <p className={styles.precio}>€ {precio}</p>

                        <form
                            onSubmit={handleSubmit} 
                            className={styles.formulario}>
                            <label htmlFor="cantidad">Cantidad:</label>
                            <select 
                                onChange={e => setCantidad(+e.target.value)}
                                // PONIENDO EL SIGNO + DELANTE DE e CONVERTIMOS EL VALOR EN NUMERO 
                                id='cantidad'>
                                <option value='0'>-- Selecione --</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>

                            <input 
                                type='submit'
                                value='Agregar al carrito'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


//:::::: SERVIDOR ::::::://
//Al generar otra page necesitamos getStaticPaths
//Con getStaticPaths solo queremos saber cuantas paginas generamos y sus paths
export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
    const {data} = await respuesta.json()

    const paths = data?.map(guitarra => ({
        params: {
            url:guitarra.attributes.url
        }
    }))

    console.log(paths)

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params:{url}}) { //OJO USAR  PARAMS no query

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const {data: guitarra} = await respuesta.json()

    return {
        props: {
            guitarra
        }
    }
}


//GETSERVERSIDEPROPS
//Se utiliza para consumir datos dinamicos de APIS

// export async function getServerSideProps({query:{url}}) { //query trae info de la guitarra que clickamos - podemos usar query o params - Router dinamico

//     const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//     const {data: guitarra} = await respuesta.json()

//     return {
//         props: {
//             guitarra
//         }
//     }
// }