import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Dan } from '../data';





@Component({
  selector: 'app-bang-thong-tin',
  templateUrl: './bang-thong-tin.component.html',
  styleUrls: ['./bang-thong-tin.component.css']
})
export class BangThongTinComponent implements OnInit {
  dan:any;

  constructor( private httpclient: HttpClient,private dataser:DataService) { 
  }

  ngOnInit(): void {
    this.getinfodans();
    var dan_name = [],
    dan_so_luong = []

async function getData() {
    const apiUrl = "http://localhost:8080/api/app/nhom_DanhSach/"
    const response = await fetch(apiUrl)
    const barchartData = await response.json()
    console.log(barchartData)

    const name = barchartData.data.map((x:any) => x.ten);
    const soluong = barchartData.data.map((x:any) => x.so_luong)

    console.log(name, soluong)

    dan_name = name;
    dan_so_luong = soluong;
}



    const myChart = new Chart("myChart", {
      type: 'pie',
      data: {
          
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)' 
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                ticks:{
                  beginAtZero: true
                }
              }]
          }
      }
  });


    
  }
  getinfodans(){
    this.dataser.getinfodan().subscribe((res) => {  
      console.log(res);
      this.dan = res;
    })
  }

}
