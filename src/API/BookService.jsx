import axios from "axios";

// export default class BookService {
//     APIKey = 'AIzaSyBRXJ-TKHr7sIoQh5ilNyz4SidDTLuVENM'
//     static async getAll() {
//         const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${APIKey}`)
//         return response
//     }
// }

  
const apiKey = "AIzaSyCUWqSnBmC1z2elzqv-qnd9YFG345y9CsA"
const book = "java"

async function fetchBooks() {
  const response = await axios.get("https://www.googleapis.com/books/v1/volumes" + book + "&key=" + apiKey + "&maxResults=40")
  .then( response => {
    console.log(response)
  }) 

}
