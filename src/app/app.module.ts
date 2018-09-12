import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DataService } from './books/data.service';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { RemoveCharacters } from './pipe/remove-characters.pipe';
import { NewBookComponent } from './books/new-book/new-book.component';

@NgModule({
  declarations: [
    AppComponent,
    RemoveCharacters,
    BooksComponent,
    EditBookComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    EditBookComponent,
    NewBookComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
