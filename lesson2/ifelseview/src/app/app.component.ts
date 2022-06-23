import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
      .colorblue {
        color : blue;
      }
  `]
  
})
export class AppComponent {
  title = 'ifelseview';
  var1 : String = "";
  var2: String = "";
  bool = true;
  lst: Array<String> = [];

  onclick(varv : String) {
    this.lst.push(varv);
  }

  onChange(event: any){
    this.var2 = event.target.value;
  }
}
