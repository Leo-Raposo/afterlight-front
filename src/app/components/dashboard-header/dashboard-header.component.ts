import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeader implements OnInit {
  username: string = '';

  constructor(private authService: AuthService) { }

  async ngOnInit() {
    try {
      const user = await this.authService.getUserProfile();
      this.username = user.username || '';
    } catch (error) {
      console.error('Error fetching username:', error);
    }
  }
}
