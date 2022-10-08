import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  selectedNews: any;

  constructor() { }

  ngOnInit(): void {
    this.selectedNews = history.state;
  }

}
