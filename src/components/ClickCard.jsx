import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import DeleteIcon from '@mui/icons-material/Delete';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useNavigate } from 'react-router-dom';

export default function ActionAreaCard({image, title, price, rate, category, id}) {
  const navigate = useNavigate()
  return (
    <div className=''>
      <Card sx={{ maxWidth: 345 }} onClick={()=>navigate(`/${id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          sx={{width:345, height:310}}
          className='object-fit-contain p-3'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <FavoriteBorderIcon sx={{fontSize:'30px'}} className='absolute top-[20px]'/>
            <TurnedInNotIcon sx={{fontSize:'30px'}} className='absolute right-[20px] top-[20px]'/>
            <DeleteIcon sx={{fontSize:'32px'}} className='absolute right-[20px] bottom-[20px]'/>
          <p className='text-[22px]'>{title.slice(0, 20)}...</p>
          </Typography>
          <Typography variant="subtitle1" color="black">
            <strong>Category: </strong>{category}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            <div className='flex items-center mt-[15px]'>
            <strong className='mr-[5px]'>Price:</strong> {price}$
            <div className='flex items-center'><strong className='ml-[30px] mr-[5px]'>Rating: </strong>{rate}<StarHalfIcon sx={{fontSize:'22px'}}/></div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
