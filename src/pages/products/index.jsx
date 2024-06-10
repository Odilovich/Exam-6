import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from '../../components/ClickCard'
import { useNavigate } from "react-router-dom";
import { Select } from "@mui/material";

import MenuItem from '@mui/material/MenuItem';

const index = () => {
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(2)
  const navigate = useNavigate()
  const getProducts = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`)
      setProducts(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    getProducts()
  }, [limit])
  return (
    <>
    <div>
      <Select
        className="w-[300px] mb-4"
        labelId="select-limit-label"
        value={limit}
        label={limit}
        onChange={(e) => setLimit(e.target.value)}
      >

        <MenuItem value={2}>1</MenuItem>
        <MenuItem value={4}>2</MenuItem>
        <MenuItem value={6}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={8}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={8}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={10}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={12}>13</MenuItem>
        <MenuItem value={14}>14</MenuItem>
        <MenuItem value={14}>15</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={16}>17</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={18}>19</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </div>
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
    </>
    )
}

export default index
