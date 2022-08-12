import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'str'
})
export class MyPipePipe implements PipeTransform {
  transform(value: any, args?: any):any {
    if(args==0){
      return value;
    }
    else if(args==1){
      return (value).substr(1,3);
    }
    else{
      return(value).substr(1,4);
    }
    
  }

  
}
