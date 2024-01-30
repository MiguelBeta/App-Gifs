import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SerchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SerchBoxComponent,
    CardListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
