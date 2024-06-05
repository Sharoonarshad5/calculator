import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  stringToEvaluate : string=""
  takeinput(number:string){
    this.stringToEvaluate=this.stringToEvaluate+number;
    
  }
  evaluateResults(){
    if(this.stringToEvaluate !=""){
    this.stringToEvaluate= eval(this.stringToEvaluate);
  }
}
  clear(){
    this.stringToEvaluate="";
    console.log(this.stringToEvaluate);
  }
}
