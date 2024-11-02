import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DashboardSidebar } from '../../components/dashboard-sidebar/dashboard-sidebar.component';
import { RankResumeComponent } from '../../components/rank-resume/rank-resume.component';
import { RankListComponent } from '../../components/rank-list/rank-list.component';

@Component({
  selector: 'app-rank-layout',
  standalone: true,
  imports: [CommonModule, DashboardSidebar, RankResumeComponent, RankListComponent],
  templateUrl: './rank-layout.component.html',
  styleUrls: ['./rank-layout.component.css']
})
export class RankLayoutComponent {

}
