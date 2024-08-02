import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-proj-folio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proj-folio.component.html',
  styleUrl: './proj-folio.component.css'
})
export class ProjFolioComponent {
    projects = [
      { title: 'Project 1', description: 'Description 1', image: 'path/to/image1.jpg', link: 'http://example.com' },
      { title: 'Project 2', description: 'Description 2', image: 'path/to/image2.jpg', link: 'http://example.com' },
      // Add more projects here
    ];

}
