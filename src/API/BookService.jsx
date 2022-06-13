import axios from "axios";

export default class BookService {

  static async getAll(searchValue,category, apiKey, searchRelevant, startIndex) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category}${searchValue}&orderBy=${searchRelevant}&key=${apiKey}&maxResults=30&startIndex=${startIndex}`)   
    return response
  }
}

