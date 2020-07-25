import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(lst: any, inputstr: string): any {
    var type = '';
    const numbers=['1','2','3','4','5','6','7','8','9','0'];
    if (lst.length === 0) {
      return lst;
    }
    var truth=numbers.find(el=>{
      return el==inputstr[0]?true:false;
    });
    if(truth){
      type='n';
    }
    if (inputstr[0]=='@') {
      type='@';
    }
    if(type=='n'&&inputstr[inputstr.length-1]=='%'){
      type='%';
    }
    
    var newarr: any = [];
    for (let x of lst) {
      if (type=='@'){
        if(x[1].slice(1,inputstr.length).toLowerCase()==inputstr.slice(1).toLowerCase()){
          newarr.push(x);
        }
      }
      else if (type=='n'){
        if(parseInt(x[2].slice(0,x[2].length-1),10)>=parseInt(inputstr,10)){
          newarr.push(x);
        }
      }
      else if (type=='%'){
        if(Number(x[3].slice(0,x[3].length-1))>=Number(inputstr.slice(0,inputstr.length-1))){
          newarr.push(x);
        }
      }
      else if (x[0].toLowerCase().split(' ').join('').slice(0, inputstr.toLowerCase().trim().split(' ').join('').length)==inputstr.toLowerCase().trim().split(' ').join('')) {
        newarr.push(x);
      }
    }
    return newarr;
  }

}
