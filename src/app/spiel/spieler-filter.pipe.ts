import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spielerFilter'
})
export class SpielerFilterPipe implements PipeTransform {

  transform(players: {
    firstName: string;
    lastName: string;
    image: string;
    age: number;
    club: string;
    position: string;
  }[], index: number, maxItems: number): any {
    return players.slice(index *  maxItems,  maxItems * (index +  1));
  }

}
