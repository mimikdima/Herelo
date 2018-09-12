import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Books } from './books.models';

import { DataService } from './data.service';
import { NewBookComponent } from './new-book/new-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { RemoveCharacters } from '../pipe/remove-characters.pipe';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit {

  modalReference: NgbModalRef;
  books:any = [];
  closeResult: string;

  constructor( private dataService : DataService,
               private modalService: NgbModal ) { }

  ngOnInit() {
    this.dataService.getBooks().subscribe(data => {
        this.books = data;
    });
  }

  openAddNewBook(){
    const modalRef = this.modalService.open(NewBookComponent);
    modalRef.result.then((result) => {}).catch((error) => {});
  }

  openEditBook(bookID:number,title:string) {
    const modalRef = this.modalService.open(EditBookComponent);
    modalRef.componentInstance.id = bookID;
    modalRef.componentInstance.title = title;
    modalRef.result.then((result) => {}).catch((error) => {});
  }

confirmDelete(deleteModel,id:number) {
  this.modalReference = this.modalService.open(deleteModel, {size: 'sm'});
  this.modalReference.result.then((result) => {
    if(result == 'delete'){this.dataService.deleteBook(id);}
  }, (reason) => {});
}


}
