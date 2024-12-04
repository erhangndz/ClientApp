import { Component, Input } from '@angular/core';
import { Image } from '../_models/image';

@Component({
  selector: 'photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {

@Input() images:Image[];

}
