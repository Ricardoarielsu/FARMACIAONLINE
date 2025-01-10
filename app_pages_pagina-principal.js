import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart, User, Menu, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function PaginaPrincipal() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo-farmacia.svg" alt="Logo FarmaOnline" width={40} height={40} />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">FarmaOnline</h1>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Inicio
            </Link>
            <Link href="/productos" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Productos
            </Link>
            <Link href="/ofertas" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Ofertas
            </Link>
            <Link href="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Blog
            </Link>
          </nav>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Button variant="outline" size="icon" className="mr-2" aria-label="Buscar">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="mr-2" aria-label="Carrito de compras">
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" aria-label="Perfil de usuario">
                <User className="h-4 w-4" />
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Menú">
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Banner principal */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Tu salud es nuestra</span>{' '}
                  <span className="block text-primary xl:inline">prioridad</span>
                </h2>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                  Encuentra los mejores productos farmacéuticos y recibe asesoría personalizada con nuestro asistente virtual.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button size="lg">Comprar ahora</Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button variant="outline" size="lg">Consultar al asistente</Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/banner-farmacia.jpg"
            alt="Banner Farmacia"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>

      {/* Sección de productos destacados */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Productos destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((product) => (
              <Card key={product}>
                <CardHeader>
                  <Image src={`/producto-${product}.jpg`} alt={`Producto ${product}`} width={300} height={200} className="rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Producto {product}</CardTitle>
                  <p className="text-sm text-gray-500 mt-2">Descripción breve del producto {product}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold">$19.99</span>
                  <Button size="sm">Agregar al carrito</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de categorías */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Medicamentos', 'Suplementos', 'Cuidado personal', 'Primeros auxilios'].map((category) => (
              <Button key={category} variant="outline" className="h-24 text-lg">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de ofertas */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Ofertas especiales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((offer) => (
              <Card key={offer}>
                <CardHeader>
                  <Image src={`/oferta-${offer}.jpg`} alt={`Oferta ${offer}`} width={400} height={200} className="rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <Badge className="mb-2">Oferta</Badge>
                  <CardTitle>Oferta especial {offer}</CardTitle>
                  <p className="text-sm text-gray-500 mt-2">Descripción de la oferta {offer}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Ver oferta</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de blog */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Blog de salud</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <Card key={post}>
                <CardHeader>
                  <Image src={`/blog-${post}.jpg`} alt={`Artículo ${post}`} width={400} height={200} className="rounded-t-lg" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Título del artículo {post}</CardTitle>
                  <p className="text-sm text-gray-500 mt-2">Resumen breve del artículo {post}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Leer más</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Asistente virtual */}
      <div className="fixed bottom-4 right-4">
        <Button size="lg" className="rounded-full shadow-lg">
          <span className="mr-2">Asistente virtual</span>
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Acerca de nosotros</h3>
              <p className="text-sm">Somos una farmacia en línea comprometida con tu salud y bienestar.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/" className="hover:text-gray-300">Inicio</Link></li>
                <li><Link href="/productos" className="hover:text-gray-300">Productos</Link></li>
                <li><Link href="/ofertas" className="hover:text-gray-300">Ofertas</Link></li>
                <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p className="text-sm">Dirección: Calle Principal 123, Ciudad</p>
              <p className="text-sm">Teléfono: (123) 456-7890</p>
              <p className="text-sm">Email: info@farmaonline.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45  2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-gray-300" aria-label="Twitter">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} FarmaOnline. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}