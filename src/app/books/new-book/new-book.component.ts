import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl ,FormBuilder , Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';
import { validNameTitle } from '../../validators/check-title.validator';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  myForm: FormGroup;
  submittedError:boolean;
  constructor( private dataService : DataService,
               public activeModal: NgbActiveModal,
               private formBuilder: FormBuilder ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      author: new FormControl(null, Validators.required),
      title: new FormControl(null, Validators.compose([validNameTitle(this.dataService.booksData,''), Validators.required])),
      datePublish: new FormControl('', Validators.required)
    });
  }

  submitForm() {
   if (this.myForm.valid) {
     let author = this.myForm.value.author;
     let title = this.myForm.value.title;
     let datePublish = this.myForm.value.datePublish.year+'-'+this.myForm.value.datePublish.month+'-'+this.myForm.value.datePublish.day;
     this.submittedError=false;
     this.activeModal.close();
     this.dataService.addBook(author,title,datePublish);
   }else{
     this.submittedError=true;
   }
  }

}
