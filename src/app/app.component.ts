import { Component, ViewEncapsulation } from '@angular/core';
import { styles } from '../styles/index.aot.css';
@Component({
  selector: 'rio-app',
  templateUrl: './app.component.html',
  // Global styles imported in the app component.
  styles,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent { }
