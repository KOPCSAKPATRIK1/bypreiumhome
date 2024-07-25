import { Component } from '@angular/core';
import { RealestateInfoComponent } from '../realestate-info/realestate-info.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
interface Image {
  src: string;
}


@Component({
  selector: 'app-ingatlanjaink',
  standalone: true,
  imports: [RealestateInfoComponent, ImageSliderComponent],
  templateUrl: './ingatlanjaink.component.html',
  styleUrl: './ingatlanjaink.component.css'
})
export class IngatlanjainkComponent {
  firstSliderImages: Image[] = [
    { src: 'assets/logo.jpg'},
    { src: 'assets/logo.jpg'},
    { src: 'assets/logo.jpg'},
    { src: 'assets/logo.jpg'},
    { src: 'assets/logo2.jpg'}
  ];

  secondSliderImages: Image[] = [
    { src: 'assets/logo2.jpg'},
    { src: 'assets/other2.jpg'},
    { src: 'assets/other3.jpg'},
    { src: 'assets/other4.jpg'}
  ];
}
