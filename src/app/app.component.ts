import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GUC-Compiler';
  code = '';
  stdin = '';
  stdout = '';
  static codefile = '';

  constructor(public http: HttpClient) { }

  static getfiletext(str) {
    this.codefile = str;
  }
}
