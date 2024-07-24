import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'
import { ImageSliderComponent } from '../image-slider/image-slider.component';



@Component({
  selector: 'app-realestate',
  standalone: true,
  imports: [CommonModule, ImageSliderComponent],
  templateUrl: './realestate.component.html',
  styleUrl: './realestate.component.css'
})
export class RealestateComponent {
  
}
