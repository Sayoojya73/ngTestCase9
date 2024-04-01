import { Component } from '@angular/core';
import { HeadingCDDirective } from '../Directives/heading-cd.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeadingCDDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
