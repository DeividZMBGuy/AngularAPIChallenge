import { Component, OnInit } from '@angular/core';
import { MainserviceService } from './services/mainservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapichallenge';

  constructor( private mainService:MainserviceService ) { }

  ngOnInit(): void {
  }

  getMethod(){
    this.mainService.getToApi().subscribe((response =>{
      let _response;
      _response = response;
      let result = JSON.parse(JSON.stringify(response));
      alert(result.result);
    }))
  }
}
