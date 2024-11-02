import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DashboardSidebar } from '../../components/dashboard-sidebar/dashboard-sidebar.component';
import { BadgeProgressComponent } from '../../components/badge-progress/badge-progress.component';

@Component({
  selector: 'app-badges-layout',
  standalone: true,
  imports: [CommonModule, DashboardSidebar, BadgeProgressComponent],
  templateUrl: './badges-layout.component.html',
  styleUrls: ['./badges-layout.component.css']
})
export class BadgesLayoutComponent {

}
