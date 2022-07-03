import { Component } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'industrias-mipymes';
  faPlay = faPlay;
}
