import { Component, Inject, AfterViewInit } from '@angular/core';
import { SOME_WINDOW } from './tool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(SOME_WINDOW) private window: Window) {
    console.log(this.window);
    console.log(this.window.navigator.userAgent);
    console.log(this.window.localStorage.setItem('pepit', 'cafe'));
    console.log(this.window.localStorage.getItem('pepit'));
    console.log(this.window.screen.width);
  }

  ngAfterViewInit() {
    console.log(this.window.document.getElementById('res'));
  }
  title = 'ssrTool';
}
