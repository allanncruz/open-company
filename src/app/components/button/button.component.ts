import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() icon?: string;
  @Input() size: 'lg' | 'md' = 'md';
  @Input() route?: string;

  constructor(private router: Router) {}

  navigate(): void {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
