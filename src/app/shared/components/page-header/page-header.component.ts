import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  @Input('page-title') pageTitle: string;
  @Input('show-btn') showButton: boolean = true
  @Input('btn-class') btnClass: string;
  @Input('btn-text') btnText: string;
  @Input('btn-link') btnLink: string;

  constructor() { }

  ngOnInit() {
  }

}
