export const shoesData = [
  {
    id: 1,
    title: "Zapatillas Hombre Millbank",
    brand: "Umbro",
    price: 300,
    picUrl: "https://coliseum.vteximg.com.br/arquivos/ids/431754-1000-1000/40284U-090_1.jpg?v=637808397196370000",
    description: "Nuestro juego está en las calles. Colección de Calzado Lifestyle Umbro. Nuevas Umbro Millbank, cómodas zapatillas para hombre de estilo urbano para estar.",
    category: "hombre",
    stock: 16,
  },
  {
    id: 2,
    title: "Zapatillas Mujer Elite Mundial Luxe - 40325U-HZY: USA5-EUR36-CM23",
    brand: "Umbro",
    price: 250,
    picUrl: "https://coliseum.vteximg.com.br/arquivos/ids/230311-1000-1000/40325U-HZY-1.jpg?v=637049358753200000",
    description: "Nuestro juego está en las calles. Colección de Calzado Lifestyle Umbro ARP. Zapatillas para mujer Umbro ARP Elite Mundial Luxe. Zapatillas de plataforma grande con capellada de gamuza con diseño de animal print y paneles superpuestos de gamuza y cuero sintétio en color negro.",
    category: "mujer",
    stock: 13,
  },
  {
    id: 3,
    title: "Zapatilla Toccare II Tf",
    brand: "Umbro",
    price: 200,
    picUrl: "https://coliseum.vteximg.com.br/arquivos/ids/463346-1000-1000/81788U-76Q_1.jpg?v=637865205483800000",
    description: "Zapatillas TOCCARE II, el mundo del futbol nunca fue tan divertido como ahora, esta nueva version viene recargada de estilo y color, diseñado con material sintetico que resalta cada jugada en la cancha.",
    category: "hombre",
    stock: 14,
  },
  {
    id: 4,
    title: "Zapatillas Mujer Run M",
    brand: "Umbro",
    price: 150,
    picUrl: "https://coliseum.vteximg.com.br/arquivos/ids/246929-1000-1000/81586U-H96-1.jpg?v=637103072820000000",
    description: "lorem ipsum lorem ipsum",
    category: "mujer",
    stock: 15,
  },
  {
    id: 5,
    title: "Zapatillas Impulsa",
    brand: "Umbro",
    price: 120,
    picUrl: "https://coliseum.vteximg.com.br/arquivos/ids/355104-1000-1000/81645U-DKP_1.jpg?v=637527994919770000",
    description: "UMBRO IMPULSA. Nuestra zapatilla de entrenamiento y running de alto rendimiento. ¿Listo para los rigores de una maratón, jogging cuesta arriba de la colina y tu rutina de entrenamiento periódica? Con las nuevas impulsa de Umbro estarás más listo que nunca. Diseñadas para mantenerte en carrera con una capellada o parte superior de malla transpirable para una máxima comodidad",
    category: "mujer",
    stock: 20,
  },
  {
    id: 6,
    title: "Zapatillas Niño Classico X Lt Tf - Jnr",
    brand: "Umbro",
    price: 120,
    picUrl: "https://coliseum.vteximg.com.br/arquivos/ids/463366-1000-1000/81784U-A66_1.jpg?v=637865205540330000",
    description: "Zapatillas CLASSICO X LT, el modelo iconico de Umbro que nunca pasa de moda, diseñado con material sintetico y variedad de colores ideal para iniciar en las canchas de futbol.",
    category: "kids",
    stock: 30,
  },
];

const task = new Promise((resp) => {
	resp(shoesData)
}, 2000)

export const getItem = () => {
	return task
}