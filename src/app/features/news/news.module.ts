import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { DetailsComponent } from './details/details.component';
import { NewsService } from './news.service';


@NgModule({
  declarations: [
    NewsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
