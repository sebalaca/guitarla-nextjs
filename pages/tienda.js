import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

//:::::: CLIENTE ::::::://
export default function Tienda({guitarras}) {
	// console.log(guitarras)

  return (
    <Layout title={'Tienda Virtual'} 
            description={'Tienda Virtual, venta de guitarras, instrumentos, GuitarLA'}
    >

		<main className='contenedor'>
			<h1 className='heading'>Nuestra Colección</h1>

			<div className={styles.grid}>
				{guitarras?.map(guitarra => (
					<Guitarra
						key={guitarra.id} 
						guitarra={guitarra.attributes}
					/>
				))}
			</div>
		</main>

    </Layout>

  )
}

//:::::: SERVIDOR ::::::://

//GETSTATICPROPS

// //Rendering para consumir API - se utiliza SIEMPRE con getStaticPaths
// //Genera informacion estatica
// export async function getStaticProps() {

// 	//CAMBIAR EL LINK DE LA API A http://127.0.0.1:1337
// 	const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
// 	const {data: guitarras} = await respuesta.json()
// 	//aplico destructuring y renombro data a guitarras

// 	//Siempre debe retornar props
// 	return {
// 		props: {
// 			guitarras //paso este props directamente a Tienda()
// 		}
// 	}
// }


//GETSERVERSIDEPROPS
//Se utiliza para consumir datos dinamicos de APIS
export async function getServerSideProps() {

	const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
	const {data: guitarras} = await respuesta.json()

	return {
		props: {
			guitarras
		}
	}
}