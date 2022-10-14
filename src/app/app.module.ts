import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BangThongTinComponent } from './bang-thong-tin/bang-thong-tin.component';
import { NhatKiThamComponent } from './nhat-ki-tham/nhat-ki-tham.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ChuHoComponent } from './chu-ho/chu-ho.component';
import { TongdanComponent } from './danhsach/tongdan/tongdan.component';


@NgModule({
  declarations: [
    AppComponent,
    BangThongTinComponent,
    NhatKiThamComponent,
    TrangchuComponent,
    ChuHoComponent,
    TongdanComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
