import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Fetch_Thamso } from '../data';

@Component({
  selector: 'app-nhat-ki-tham',
  templateUrl: './nhat-ki-tham.component.html',
  styleUrls: ['./nhat-ki-tham.component.css']
})
export class NhatKiThamComponent implements OnInit {
Thamso: Fetch_Thamso[]= [];
products: any;

  constructor(private dateser: DataService, private httpclient: HttpClient) { }

  ngOnInit(): void {
    this.onproduct();
  }
onproduct(){
  this.dateser.onproduct().subscribe((res) => {  
    console.log(res);
    this.products = res;
  })
}
}
