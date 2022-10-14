import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Fetch_Thamso,Giasuc_HTX,Dan } from './data'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient: HttpClient) { }
   getinfodan(){
   const dan = this.httpclient.post('http://localhost:8080/api/app/nhom_DanhSach/',{});
   return dan;
  }
  onproduct(){
   const viengtham= this.httpclient.post('http://localhost:8080/api/app/viengThamTrai',{});
   return viengtham;
}
  getChuho(){
    const chuho = this.httpclient.post('http://localhost:8080/api/app/app_DanHSachNongDan/',{});
    return chuho;
  }
}

