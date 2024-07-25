import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

interface Image {
  src: string;
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  @Input() images: Image[] = [];
  selectedImage!: Image;
  isModalOpen = false;

  ngOnInit() {
    if (this.images.length > 0) {
      this.selectedImage = this.images[0];
    }
  }

  selectImage(image: Image) {
    this.selectedImage = image;
    this.openModal();
  }

  nextImage() {
    const currentIndex = this.images.indexOf(this.selectedImage);
    this.selectedImage = this.images[(currentIndex + 1) % this.images.length];
  }

  prevImage() {
    const currentIndex = this.images.indexOf(this.selectedImage);
    this.selectedImage = this.images[(currentIndex - 1 + this.images.length) % this.images.length];
  }


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
