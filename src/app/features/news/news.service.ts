import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { switchMap } from 'rxjs';

// const xml2js = require("xml2js");


@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(
    private http: HttpClient
  ) { }

  getNews() {
    return this.http
      .get("https://feeds.feedburner.com/ndtvnews-top-stories", { responseType: "text" });
  }

  // async parseXmlToJson(xml: any) {
  //   return await xml2js.parseStringPromise(xml, { explicitArray: false })
  //     .then((response: any) => response.Employees.Employee);
  // }
}
