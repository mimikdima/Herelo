import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormControl ,FormBuilder , Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from '../data.service';
import { validNameTitle } from '../../validators/check-title.validator';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})

export class EditBookComponent implements OnInit {

  @Input() id: number;
  editData:any;
  myForm: FormGroup;
  submittedError:boolean;
  constructor( private dataService : DataService,
               public activeModal: NgbActiveModal,
               private formBuilder: FormBuilder) {}

 ngOnInit() {
   this.editData = this.dataService.getBookById(this.id)
  //  console.log(this.editData[0].datePublish);
   this.createForm(this.editData[0].author,this.editData[0].title,this.editData[0].datePublish);

 }

 private createForm(author:string,title:string,datePublish:string) {
    let date =  datePublish.split("-");
    this.myForm = this.formBuilder.group({
     author: new FormControl(author, Validators.required),
     title: new FormControl(title, Validators.compose([validNameTitle(this.dataService.booksData), Validators.required])),
     datePublish: new FormControl({year: Number(date[0]), month: Number(date[1]), day: Number(date[2])}, Validators.required)
   });
 }

submitForm() {
  if (this.myForm.valid) {
    let author = this.myForm.value.author;
    let title = this.myForm.value.title;
    let datePublish = this.myForm.value.datePublish.year+'-'+this.myForm.value.datePublish.month+'-'+this.myForm.value.datePublish.day;

    this.submittedError=false;
    this.activeModal.close();
    this.dataService.updateBook(this.id,author,title,datePublish);
  }else{
    this.submittedError=true;
  }
 }

}
