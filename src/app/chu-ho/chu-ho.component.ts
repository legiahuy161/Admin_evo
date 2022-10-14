import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chu-ho',
  templateUrl: './chu-ho.component.html',
  styleUrls: ['./chu-ho.component.css']
})
export class ChuHoComponent implements OnInit {
  chuho:any;

  constructor(private dateser: DataService, private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.getChuho();
  }
  getChuho(){
    this.dateser.getChuho().subscribe((res) => {  
      console.log(res);
      this.chuho = res;
    })
  }
}
