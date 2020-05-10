import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css']
})
export class TesterComponent implements OnInit {
  values: any;

  constructor(private http:HttpClient) { 
    
  }

  ngOnInit() {
        this.getValues();
  }
getValues(){
  this.http.get('http://localhost:5000/api/values').subscribe(response=>{
    this.values = response;
  }, error =>{
    console.log(error);
  })
}
}
