import { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import './styles.css'

faker.seed(100);

const Home = () => {
  const productsArray = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.imageUrl(),
      description: faker.lorem.paragraph(),
    };
  });
  

  const [products] = useState(productsArray);
  return (
    <div className="productContainer">
      {products.map((prod) => (
        <SingleProduct product={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Home;
