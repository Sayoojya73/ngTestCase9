import { Component } from '@angular/core';
import { HeadingCDDirective } from '../Directives/heading-cd.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeadingCDDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
