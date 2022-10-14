import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
dan:any;
  constructor(private httpclient: HttpClient,private dataser:DataService) { }

  ngOnInit(): void {
    this.getinfodans();
  }
  getinfodans(){
    this.dataser.getinfodan().subscribe((res) => {  
      console.log(res);
      this.dan = res;
    })
  }
}
