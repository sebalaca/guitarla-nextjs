import Image from "next/future/image"
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

function Nosotros() {
	return (
		<Layout title={'Nosotros'} description={'Sobre nosotros, guitarLA, tienda de música'}>

			<main className='contenedor'>
				<h1 className='heading'>Nosotros</h1>
				<div className={styles.contenido}>
					<Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros" />

					<div>
						<p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis scelerisque metus, non viverra elit. In ex lectus, venenatis eget tristique at, pretium in purus. In feugiat vitae tortor ac rhoncus. Donec non mollis velit. Morbi ultrices eros sollicitudin eleifend finibus. Sed ultricies, tellus a tempus eleifend, nulla lectus finibus lectus, vel dignissim sapien nunc auctor justo. Nunc quis eleifend metus.</p>

						<p className={styles.text}>Donec volutpat rhoncus neque, eget sodales libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas id velit porttitor, sodales enim vitae, gravida diam. Integer felis massa, faucibus sed eros sit amet, cursus placerat sapien.</p>
					</div>
				</div>
			</main>

		</Layout>

	)
}

export default Nosotros