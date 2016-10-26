import { Component, ViewEncapsulation } from '@angular/core';
import { aotStyles } from '../styles/index.aot.css';
@Component({
  selector: 'rio-app',
  templateUrl: './app.component.html',
  // Global styles imported in the app component.
  styles: aotStyles,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent { }
