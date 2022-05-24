import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'ngPrimeTest';
  language?:string;
  country?:string;
  code?:number;
  area?:string;
  languageList:any[]=[
    {language:'Urdu',
     country:'Pakistan',
     code:'+92',
     area:'Asia'
    },
  ];

  addLanguage(){

    this.languageList.push(
      {Language:this.language, country:this.country, code:this.code,area:this.area}
      );
  }
  delLanguage(index:number){

    this.languageList.splice(index,1);

  }
  getLanguages(){
    return this.languageList;
  }





}
