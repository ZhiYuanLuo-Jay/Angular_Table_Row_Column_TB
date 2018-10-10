import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = "Angular Single Page App";  // classs attribute
  jData      : any;
  first_name : string;
  snacks     : string[];
  zylPocket  : any;
  adjArr     : any[];
  selectedUser: any;

  constructor(
    private _httpService: HttpService
  ){}
  

  ngOnInit() {
    this.getData();   // Best practice is to invoke function in ngOnInit() not in the constructor.
    this.zylPocket = { upperOne: "My upper pocket?", lowerOne: "My lower one?" }
    this.adjArr = [];
    this.snacks = ["Vanilla-latt", "Brushed-suede", "Cookie-bread"];    
  }
  
  // Trying to get data from local file.
  getData(){
    let obserable = this._httpService.getJSON();
    obserable.subscribe(info => {      
      this.jData = info
      // console.log(`local data is retrieved ${this.jData}`)
    });    
    
  }  

  isString(el:any){
    // console.log(el)
    return typeof(el[0]) === 'string';
  }

  onSelect(s:String){
    if (this.adjArr.includes(s)){
      let idx = this.adjArr.indexOf(s); // check if array contains the item, then return its index
      this.adjArr.splice(idx, 1); // base on index provided, removes the one
    } else {
      this.adjArr.push(s) // if there's not existing one, push into the array.
    }     
  }



  // Select the whole column, filter the clean data, push into array
  onRow(el:any): void {
    console.log("onRow is clicked!");
    // console.log(el[0], el[2]['text'], el[5]['id'], el[6]['id'], el[7] );
    this.adjArr.push(el[0]);
    this.adjArr.push(el[2]['text']);
    this.adjArr.push(el[5]['id']);
    this.adjArr.push(el[6]['id']);
    this.adjArr.push(el[7]);

  }

  // Select the whole column, filter the clean data, push into array
  onItemNoClick(): void {
    console.log("onItemNo is clicked!")
    for ( let el of this.jData) {
      if (typeof(el[0]) == "string"){
        this.adjArr.push(el[0])
      }
    }
  }

  // Select the whole column, filter the clean data, push into array
  onDescClick(): void {
    console.log("onDesc is clicked!")
    for ( let el of this.jData) {
      if (el.length >= 3 && el[2] !== null ){
        this.adjArr.push(el[2]['text'])
      }
    }
  }
  
  // Select the whole column, filter the clean data, push into array
  onSterlingClick(): void {
    console.log("onSterling is clicked!")
    for ( let el of this.jData) {
      if (el.length >= 6 && el[5] !== null ){
        this.adjArr.push(el[5]['id'])
      }
    }
  }
  
  // Select the whole column, filter the clean data, push into array
  onEuroClick(): void {
    console.log("onEuro is clicked!")
    for ( let el of this.jData) {
      // console.log(el[6])
      if (el.length >= 7 && el[6] !== null ){
        this.adjArr.push(el[6]['id'])
      }
    }
  }
  
  // Select the whole column, filter the clean data, push into array
  onOtherClick(): void {
    console.log("onOther is clicked!")
    for ( let el of this.jData) {
      // console.log(el[7])
      if (el.length >= 8 && el[7] !== null ){
        this.adjArr.push(el[7])
      }
    }
  }



  // Two way binding test
  onTest(){
    console.log(`The sumbitted data: ${this.zylPocket['upperOne']}, ${this.zylPocket['lowerOne']}`);  // Display the data submitted 
    this.zylPocket = { upperOne: "", lowerOne: "" }  // Reset this.newTask to a new, clean object.
  }


  // TESTING ONLY ------------>
  // onButtonClick(): void { 
  //   console.log(`Click event is working`);
  // }

  // onButtonClickParam(num: Number): void { 
  //   console.log(`Click event is working with num param: ${num}`);
  // }

  // onButtonClickParams(num: Number, str: String): void { 
  //   console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }

  // onButtonClickEvent(event: any): void { 
  //   console.log(`Click event is working with event: ${event}`);
  // }

}
