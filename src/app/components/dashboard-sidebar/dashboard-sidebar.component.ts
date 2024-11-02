import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

interface UserProfile {
  name: string;
  role: string;
  username?: string;
}

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css']
})
export class DashboardSidebar implements OnInit {
  userProfile: UserProfile = {
    name: '',
    role: '',
    username: ''
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.loadUserProfile();
    }
  }

  async loadUserProfile() {
    try {
      const user = await this.authService.getUserProfile();

      this.userProfile.username = user.username;
      this.userProfile.role = user.email;
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToTrails() {
    this.router.navigate(['/trails']);
  }

  navigateToBadges() {
    this.router.navigate(['/badges']);
  }

  navigateToRank() {
    this.router.navigate(['/rank']);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }


  // async logout() {
  //   try {
  //     await this.authService.logout();
  //     this.router.navigate(['/home']);
  //   } catch (error) {
  //     console.error('Logout failed:', error);
  //   }
  // }
}
