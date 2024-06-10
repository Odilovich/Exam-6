import { useParams } from "react-router-dom";
import "./style.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, CardMedia, IconButton } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const index = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  const [number, setNumber] = useState(1);
  const [cost, setCost] = useState();
  const add = () => {
    setNumber(number + 1);
    setCost(cost + Math.round(data?.price - (data?.price / 100) * 7));
  };
  const remove = () => {
    setNumber(number - 1);
    setCost(cost - Math.round(data?.cost - (data?.cost / 100) * data?.discount));
  };
  const getData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setData(response.data)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  console.log(data);
  return (
    <div className="py-[50px]">
      <div className="flex justify-between">
        <div className="w-[40%]">
          <CardMedia
            sx={{
              height: 455,
              width: "100%",
              backgroundImage: `url(${data.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
            component="img"
          />
        </div>
        <div className="w-[50%] px-3">
          <p className="text-[#1976D2] font-semibold text-[35px] mb-3">
            {data.title}
          </p>
          <p className="text-[18px] border-b-[1px] border-b-[#9ca3afa0] pb-4 mb-8">
            {data.description}
          </p>
          <div className="flex mb-6 items-center gap-5">
            <div className="flex items-center gap-4 border-2 border-[#9ca3af74] p-1 rounded-md">
              <IconButton
                onClick={remove}
                color="primary"
                disabled={number === 1}
              >
                <RemoveOutlinedIcon />
              </IconButton>
              <span>{number}</span>
              <IconButton
                onClick={add}
                color="primary"
                disabled={number === data.count}
              >
                <AddOutlinedIcon />
              </IconButton>
            </div>
            <div>
              <p className="text-[#1976D2] font-semibold text-[20px]">
                Only {1} left
              </p>
            </div>
          </div>
          <div className="border-b-[1px] border-b-[#9ca3afa0] pb-4 mb-8">
            <p className="mb-1">Price:</p>
            <div className="flex items-center gap-7 mb-5">
              <p className="text-[20px] font-semibold">
                {data.price +" $"}
              </p>
              {data.discount > 0 ? (
                <p className="line-through text-[#646363d0]">
                  {data?.cost?.toLocaleString() + " $"}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="flex items-center gap-4">
              <Button sx={{ border: "2px solid #1976D2", paddingLeft: "40px", paddingRight: '40px', display: "flex", gap: "8px" }}>
                <span className="text-[#1976D2] text-[20px] capitalize font-semibold">
                  Purchase
                </span>
                <ShoppingCartOutlinedIcon className="text-[#1976D2]" />

              </Button>
              <Button sx={{ border: "2px solid #1976D2", paddingLeft: "40px", paddingRight: '40px', display: "flex", gap: "8px" }}>
                <span className="text-[#1976D2] text-[20px] capitalize font-semibold">
                  Add to cart
                </span>
                <AddShoppingCartIcon className="text-[#1976D2]" />
              </Button>
            </div>
          </div>
          <div>
            <p className="mb-2 text-[20px] font-semibold">
              About the product:
            </p>
            <ul>
              <li>
                <p className="text-[18px] mb-2">
                  <span className="text-[#1976D2]">Made in: </span>
                  {"Uzbekistan"}
                </p>
              </li>
              <li>
                <p className="text-[18px] mb-2">
                  <span className="text-[#1976D2]">Color: </span>
                  {"Blue"}
                </p>
              </li>
              <li>
                <p className="text-[18px] mb-2">
                  <span className="text-[#1976D2]">Rating: </span>
                  {4.88}
                </p>
              </li>
              <li>
                <p className="text-[18px] mb-2">
                  <span className="text-[#1976D2]">Category: </span>
                  {data.category}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
