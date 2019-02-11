import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identification'
})
export class IdentificationPipe implements PipeTransform {

  transform(value: number): string {
  	var res = "";
  	var nums = Math.floor(value/10);
  	while (nums > 1000) {
  		res = Math.floor(nums%1000)+'.'+res;
  		nums = Math.floor(nums / 1000);
  	}
  	res = nums+'.'+res.substring(0, res.length-1)+'-'+Math.floor(value % 10);
    return res;
  }

}
