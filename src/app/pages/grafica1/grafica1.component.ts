import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public Labels1: string[] = ['Pan', 'Jamon', 'Quesp'];
  public data1 = [
    [350, 450, 100],
  ]
}
