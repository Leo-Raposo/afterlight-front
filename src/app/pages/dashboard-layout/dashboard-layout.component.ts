import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeader } from '../../components/dashboard-header/dashboard-header.component';
import { DashboardSidebar } from '../../components/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardStats } from '../../components/dashboard-stats/dashboard-stats.component';
import { DashboardRank } from '../../components/dashboard-rank/dashboard-rank.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule,
    DashboardHeader,
    DashboardSidebar,
    DashboardStats,
    DashboardRank],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardLayout {

}
