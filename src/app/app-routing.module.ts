import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BangThongTinComponent } from './bang-thong-tin/bang-thong-tin.component';
import { NhatKiThamComponent } from './nhat-ki-tham/nhat-ki-tham.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ChuHoComponent } from './chu-ho/chu-ho.component';
import { TongdanComponent } from './danhsach/tongdan/tongdan.component';

const routes: Routes = [
  {path: 'bangthongtin', component:BangThongTinComponent},
  {path:'nhatkitham',component:NhatKiThamComponent},
  // {path:'',component:TrangchuComponent},
   {path:'trangchu',component:TrangchuComponent},
   {path:'chuho',component:ChuHoComponent},
   {path:'Tổng đàn',component:TongdanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
