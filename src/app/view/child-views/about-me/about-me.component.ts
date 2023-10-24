import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(){}

  @Input() public name: string;
  @Input() public imgSrc: string;
  @Input() public description: string;
  @Input() public link: string;
}
