import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
