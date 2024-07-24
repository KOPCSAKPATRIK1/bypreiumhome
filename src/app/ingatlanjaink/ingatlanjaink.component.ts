import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RealestateComponent } from '../realestate/realestate.component';

@Component({
  selector: 'app-ingatlanjaink',
  standalone: true,
  imports: [RealestateComponent],
  templateUrl: './ingatlanjaink.component.html',
  styleUrl: './ingatlanjaink.component.css'
})
export class IngatlanjainkComponent {
 
}
