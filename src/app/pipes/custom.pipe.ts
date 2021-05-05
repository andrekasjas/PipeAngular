import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: String, all:boolean = true): string {
    value=value.toLocaleLowerCase();
    let names= value.split(' ');
    
    if(all){
      names = names.map(name =>{
        return name[0].toLocaleLowerCase() + name.substr(1);
      });
    }else{
      names[0]=names[0][0].toUpperCase() + names[0].substr(1);
    }
    return names.join(' ');
  }

}
