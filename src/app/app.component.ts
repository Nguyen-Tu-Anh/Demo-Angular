import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  a: number = 6;
  list: any[] = [
      {id:1,name:'toan', img:'https://www.pinterest.com/pin/595178907011686740/'},
      {id:2,name:'tuanh', img: 'https://www.pinterest.com/pin/595178907011886513/'},
  ]
}
