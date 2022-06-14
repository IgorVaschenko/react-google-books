import BookIdPage from "../../pages/BookIdPage";
import Books from "../../pages/Books";

export const routes = [
    {path:'/books', component: <Books/>, exact:true},
    {path:'/books/:id', component: <BookIdPage/>, exact:true},
    {path:'*', component: <Books/>, exact:true},
]