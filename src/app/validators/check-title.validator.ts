import { FormControl } from '@angular/forms';

export const validNameTitle = (books:any) => {
  return (control: FormControl) => {
    if( books.some(x => x.title === control.value)){
        return ({validTitle: true});
      }else{
        return null;
      }
  }
};
