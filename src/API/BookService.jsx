import axios from "axios";

export default class BookService {

  static apiKey = "AIzaSyCUWqSnBmC1z2elzqv-qnd9YFG345y9CsA"

  static async getAll(searchValue,category, searchRelevant, startIndex) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes${category}${searchValue}&orderBy=${searchRelevant}&key=${this.apiKey}&maxResults=30&startIndex=${startIndex}`)   
    return response
  }

  static async getById(id) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}?key=${this.apiKey}`)   
    return response
  }
}

