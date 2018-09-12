import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Books } from "./books.models";

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {}

  booksData:Books[];
  private url:string = "./assets/books-data.json";

  getBooks(): Observable<Books[]> {
    return this.httpClient.get<Books[]>(this.url).pipe(map(res => this.booksData = res));
  }

  getBookById(id:number){
    return this.booksData.filter(x => x.id === id);
  }

  updateBook(id:number,author:string,title:string, datePublish:string){
    let itemIndex = this.booksData.findIndex(item => item.id == id);
    this.booksData[itemIndex] = {id:itemIndex,author:author,title:title,datePublish:datePublish};
  }

  addBook(author:string,title:string, datePublish:string){
    let lastId = this.booksData[this.booksData.length-1].id + 1;
    this.booksData.push({id:lastId,author:author,title:title,datePublish:datePublish})
  }

  deleteBook(id:number) {
    let itemIndex = this.booksData.findIndex(item => item.id == id);
      if (itemIndex !== -1) {
          this.booksData.splice(itemIndex, 1);
      }
  }


}
