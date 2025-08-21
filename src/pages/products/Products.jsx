import React, { useEffect, useState }  from 'react'
import Layout from '../../components/layout/Layout'
import Cards from '../../components/cards/Cards';
import axios from "axios";
import { Link } from "react-router-dom";

function Products() { 

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:4001/product");
        console.log(res);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
   <Layout>
     <div className="container mx-auto">
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {product.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
     </div>
   </Layout>
  )
}

export default Products