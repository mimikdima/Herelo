import { FormControl } from '@angular/forms';

export const validNameTitle = (books:any,titleCurrent:string) => {
  return (control: FormControl) => {
    if( books.some(x => x.title === control.value)){
      if(titleCurrent == '' || titleCurrent !== control.value){
        return ({validTitle: true});
        }
      }else{
        return null;
      }
  }
};
