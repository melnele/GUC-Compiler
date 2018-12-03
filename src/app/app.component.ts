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
  lang = '';
  static codefile = '';

  constructor(public http: HttpClient) { }

  static getfiletext(str) {
    this.codefile = str;
  }

  compilefile() {
    this.code = AppComponent.codefile;
    this.change(AppComponent.codefile);
  }

  compilecode() {
    this.change(this.code);
  }

  change(text) {
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    this.http.post('/api/compile/', text, config).subscribe(res => {
      this.stdout = res["data"];
    }, err => {
    });
  }

  select() {
    if (this.lang === 'detect') {
      var config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      var data = JSON.stringify({ code: this.code });
      this.http.post('/api/detect/', data, config).subscribe(res => {
        this.lang = res["data"];
      }, err => {
      });
    }
  }

  fileChange(event) {
    let file: File = event.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);

    reader.onloadend = function (e) {
      AppComponent.getfiletext(reader.result);
    }
  }
}
