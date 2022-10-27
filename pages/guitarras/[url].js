import Image from "next/future/image"
import Layout from "../../components/layout"
import styles from '../../styles/guitarras.module.css'


export default function Producto({guitarra}) {

    const {nombre, descripcion, imagen, precio} = guitarra[0].attributes

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