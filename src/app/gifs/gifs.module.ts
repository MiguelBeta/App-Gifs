import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SerchBoxComponent } from './components/search-box/sear-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SerchBoxComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
