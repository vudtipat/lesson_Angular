import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Disable : Boolean = true;
  TiTle : String = "Click";
  Inputtxt : String = "";

  change(){
    this.Disable = !this.Disable;
  }

  onInputHandle(event: any){
    console.log(event)
    this.Inputtxt = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
