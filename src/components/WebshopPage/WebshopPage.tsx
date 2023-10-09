import React from "react";
import ProductCard from "./ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: 'Test Item 1',
    href: '#',
    price: '$48',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Test Item 2',
    href: '#',
    price: '$35',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Test Item 3',
    href: '#',
    price: '$89',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Test Item 4',
    href: '#',
    price: '$35',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Test Item 5',
    href: '#',
    price: '$35',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Test Item 6',
    href: '#',
    price: '$35',
    imageSrc: 'https://placehold.co/300x300',
    imageAlt: 'Dit is een voorbeeld wat er toont als een foto niet kan laden.',
  },
  // More products...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-12 py-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <h1 className="font-titleFont font-bold text-3xl content-center align-middle text-center w-full pt-2 pb-2">Webshop</h1>
        <p className="font-bodyFont content-center align-middle text-center w-full pb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore
          esse, blanditiis tempore rerum maiores.
        </p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}