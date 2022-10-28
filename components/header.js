import Image from "next/future/image" //Componenete para manejo de imagenes
import Link from "next/link"
import { useRouter } from "next/router" // Sirve para identificar en que pagina estamos
import styles from '../styles/header.module.css'  //Importar modulos CCS para dar estilos a cada componente


function Header() {

    const router = useRouter() 
    //Este router nos devuelve info, entre ello pathname para usar y resaltar donde estamos ubicados

    return (

        <header className={styles.header}>
    {/* Para usar los estilos del modulo CCS se debe tratar como un objeto,
    es decir styles es el nombre del archivo importado y .header la clase a usar */}

            <div className={`contenedor ${styles.barra}`}> 
            {/* Concatenamos la clase anterior ('contenedor') y agregamos {styles.barra} */}
                
                <Link href={'/'}>
                    <a>
                        <Image src='/img/logo.svg' width={300} height={40} alt='img logo'/>
                    </a>
                </Link>

                <nav className={styles.navegacion}>
                    <Link href='/'>
                        {/* En caso de que al pathname sea / aplica los estilos .active */}
                        <a className={router.pathname === '/' ? styles.active : ''}>
                            Inicio
                        </a>
                    </Link>

                    <Link href='/nosotros'>
                        <a className={router.pathname === '/nosotros' ? styles.active : ''}>
                            Nosotros
                        </a>
                    </Link>

                    <Link href='/tienda'>
                        <a className={router.pathname === '/tienda' ? styles.active : ''}>
                            Tienda
                        </a>
                    </Link>

                    <Link href='/blog'>
                        <a className={router.pathname === '/blog' ? styles.active : ''}>
                            Blog
                        </a>
                    </Link>

                    <Link href='/carrito'>
                        <a>
                            <Image width={30} height={25} src='/img/carrito.png' alt="imagen carrito" />
                        </a>
                    </Link>
                </nav>
            </div>
        </header>

    )
}

export default Header