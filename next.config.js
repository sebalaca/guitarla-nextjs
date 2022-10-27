/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'], //define el soporte a extension de imagenes
    domains: ['res.cloudinary.com']  // indicamos origen de las imagenes
  }
}

module.exports = nextConfig



//  images: {formats: ['image/avif', 'image/webp']}
//  Este objeto sirve para controlar el formato de las imagenes y su carga