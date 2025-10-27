function Menu() {
  const signatureTacos = [
    {
      name: "Tacos Jalisco (Quesabirrias)",
      price: "$4.00",
      description: "Taco de Birria, con o sin queso. Con queso $4.50",
      image: "/images/menu/tacos_jalisco.webp",
    },
    {
      name: "Quesatacos",
      price: "$12.00",
      description:
        "Orden de 4 mini tacos con queso en medio de la tortilla, de la carne de su preferencia, incluye un consome (TRIPA ES EXTRA)",
      image: "/images/menu/quesatacos.webp",
    },
    {
      name: "Gorditas",
      price: "$6.50",
      description: "Cualquier tipo de carne. Tripa es extra",
      image: "/images/menu/gorditas.webp",
    },
    {
      name: "Pizzabirria",
      price: "$35.00",
      description:
        "Quesadilla grande de Birria cortada en 8 pedazos, incluye 2 sodas de lata y 2 consomes",
      image: "/images/menu/pizzabirra.webp",
    },
  ];

  const specialtyBoxes = [
    {
      name: "Jalisco Taco Box",
      price: "$65.00",
      description:
        "15 tacos jalisco (birria), frijoles/chips, cebolla azada/chiles toreados, 2 bebidas y 3 consomes",
      image: "/images/menu/jalisco taco box.webp",
    },
    {
      name: "Caja De Tacos",
      price: "$35.00",
      description:
        "15 mini tacos, 3 tipos de carne de su preferencia, 2 sodas de lata (NO TRIPA INCLUIDA)",
      image: "/images/menu/caja_de_tacos.webp",
    },
  ];

  const fullMenu = [
    {
      name: "Tacos Jalisco (Quesabirrias)",
      price: "$4.00",
      description: "Taco de Birria, con o sin queso. Con queso $4.50",
      image: "/images/menu/tacos_jalisco.webp",
    },
    {
      name: "Street Tacos",
      price: "$2.50",
      description: "Mini taco individual",
      image: "/images/menu/tacos regular.webp",
    },
    {
      name: "Street Taco De Tripa",
      price: "$3.00",
      description: "Mini taco individual de tripa",
      image: "/images/menu/street taco de tripa.webp",
    },
    {
      name: "Taco Regular",
      price: "$3.50",
      description: "Tortillas de tamaño regular, puede ser en harina o maíz",
      image: "/images/menu/tacos regular.webp",
    },
    {
      name: "Quesatacos",
      price: "$12.00",
      description:
        "Orden de 4 mini tacos con queso en medio de la tortilla, incluye un consome (TRIPA ES EXTRA)",
      image: "/images/menu/quesatacos.webp",
    },
    {
      name: "Orden De Mini Tacos",
      price: "$13.00",
      description:
        "5 mini tacos de una carne de su preferencia, incluye una soda de lata (Tripa es extra)",
      image: "/images/menu/orden de mini tacos.webp",
    },
    {
      name: "Orden De Mini Tacos De Tripa",
      price: "$15.00",
      description: "5 mini tacos con una bebida",
      image: "/images/menu/street taco de tripa.webp",
    },
    {
      name: "Gorditas",
      price: "$6.50",
      description: "Cualquier tipo de carne. Tripa es extra",
      image: "/images/menu/gorditas.webp",
    },
    {
      name: "Quesadillas Chicas",
      price: "$3.50",
      description: "Cualquier tipo de carne. Tripa es extra",
      image: "/images/menu/qesadilla grande.webp",
    },
    {
      name: "Cheese Quesadillas",
      price: "$3.50",
      description: "Tortilla de harina con queso derretido",
      image: "/images/menu/qesadilla grande.webp",
    },
    {
      name: "Quesadilla Grande",
      price: "$10.00",
      description: "Tortilla de harina grande con carne. Tripa es extra",
      image: "/images/menu/qesadilla grande.webp",
    },
    {
      name: "Burrito",
      price: "$10.00",
      description:
        "Burrito de la carne de su preferencia (TRIPA ES EXTRA) incluye cebolla, cilantro, cebolla asada, frijoles y queso",
      image: "/images/menu/burrito.webp",
    },
    {
      name: "Tortas",
      price: "$10.00",
      description:
        "Torta de la carne de su preferencia (TRIPA ES EXTRA) incluye mayonesa, cebolla y cilantro",
      image: "/images/menu/tortas.webp",
    },
    {
      name: "Order Plate",
      price: "$15.00",
      description:
        "Tipo de carne regular. Frijoles, chips, cebolla azada y una bebida",
      image: "/images/menu/plate.jpg",
    },
    {
      name: "Order Tripa Plate",
      price: "$18.00",
      description:
        "Orden de tripa con frijoles, chips, cebolla azada y una bebida",
      image: "/images/menu/plate.jpg",
    },
    {
      name: "Caja De Tacos",
      price: "$35.00",
      description:
        "15 mini tacos, 3 tipos de carne de su preferencia, 2 sodas de lata (NO TRIPA INCLUIDA)",
      image: "/images/menu/caja_de_tacos.webp",
    },
    {
      name: "Pizzabirria",
      price: "$35.00",
      description:
        "Quesadilla grande de Birria cortada en 8 pedazos, incluye 2 sodas de lata y 2 consomes",
      image: "/images/menu/pizzabirra.webp",
    },
    {
      name: "Jalisco Taco Box",
      price: "$65.00",
      description:
        "15 tacos jalisco (birria), frijoles/chips, cebolla azada/chiles toreados, 2 bebidas y 3 consomes",
      image: "/images/menu/jalisco taco box.webp",
    },
    {
      name: "Agua De LIMON",
      price: "$5.00",
      description: "Agua fresca de limon",
      image: "/images/menu/aqua de limon.webp",
    },
    {
      name: "Elote",
      price: "$7.50",
      description:
        "Elote en vaso, incluye mayonesa, queso parmesano, tajin y limon",
      image: "/images/menu/elote.webp",
    },
  ];

  return (
    <section id="menu" className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600">
            Delicious authentic Mexican cuisine
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Signature Tacos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureTacos.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-xl font-bold text-orange-700">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Specialty Boxes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {specialtyBoxes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-2xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-2xl font-bold text-orange-700">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Full Menu</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fullMenu.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start pb-6 border-b border-gray-200 last:border-0"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-xl font-bold text-orange-700 ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
