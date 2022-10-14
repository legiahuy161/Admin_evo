import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tongdan',
  templateUrl: './tongdan.component.html',
  styleUrls: ['./tongdan.component.css']
})
export class TongdanComponent implements OnInit {
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
