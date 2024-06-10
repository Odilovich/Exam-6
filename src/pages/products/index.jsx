import "./style.scss";
import axios from "axios" ;
import { useEffect, useState } from "react";
import Card from '../../components/ClickCard'
import { useNavigate } from "react-router-dom";

const index = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
  const getProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div className="grid grid-cols-3 gap-4">
      {
        products.map((item, index) => (
          <Card
            id={item.id}
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            rate={item.rating.rate}
            count={item.rating.count}
            description={item.description}
            category={item.category}
          />
        ))
      }
    </div>
  )
}

export default index
