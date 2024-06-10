import Products from "../pages/products"
import Posts from "../pages/posts"
import PersonIcon from '@mui/icons-material/Person';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
const routes = [
    {
        path: '/',
        element: <Products/>,
        content: "Product",
        icon: <PersonIcon/>
    },
    {
        path: '/posts',
        element: <Posts/>,
        content: "Posts",
        icon: <LocalPostOfficeIcon/>
    },
]

export default routes