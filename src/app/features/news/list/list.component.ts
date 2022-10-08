import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../news.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  newsList: Array<any> = [];

  constructor(
    private router: Router,
    private utilService: UtilService,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (newsXml: any) => {
        let response: any = this.utilService.convertXMLToJSON(newsXml);

        this.newsList = response.rss.channel[0].item;
      }
    )
  }

  navigateToNewsDetails(news: any) {
    this.router.navigateByUrl('/news/details', { state: news });
  }


}
