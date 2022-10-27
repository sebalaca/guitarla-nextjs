import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout"


//CREAMOS UNA PAGINA DE ERROR

export default function Pagina404() {
  
    return (

        <Layout
            title="Pagina no encontrada"
        >
            <p className="error">404 - Pagina no encontrada</p>

            <div className="img-error">
                <Image
                    src='/img/img404.jpg' 
                    width={600}
                    height={400}
                    alt='img guitarra rota'
                />
            </div>

            <Link href='/'>
                <a className="error-enlace">Ir a Inicio</a>
            </Link>
        </Layout>
  
    )
}

