import { Component } from '@angular/core';
import { HeadingCDDirective } from '../Directives/heading-cd.directive';
import { MouseDirective } from '../Directives/mouse.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingCDDirective,MouseDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
