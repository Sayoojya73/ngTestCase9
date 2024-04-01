import { Component } from '@angular/core';
import { BoxesDirective } from '../Directives/boxes.directive';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BoxesDirective],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

}
