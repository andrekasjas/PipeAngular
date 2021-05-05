import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {
  transform(value:string,all: boolean=false):string {
  let names=value.split(' ');
  if(all){
    return ('******');
  }else {
     return names.join(' ');
  }
  }
}
