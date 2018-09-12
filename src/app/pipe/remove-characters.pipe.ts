import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : "removeSpacialCharacters"
})

export class RemoveCharacters implements PipeTransform{
	transform(value){
		return value.replace( /[^a-zA-Z0-9-. ]/g, "");
	}
}
