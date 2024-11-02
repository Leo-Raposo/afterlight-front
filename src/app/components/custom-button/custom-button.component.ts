import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  constructor(private router: Router) { }

  navigateToSignin() {
    this.router.navigate(['/signin']);
  }
}