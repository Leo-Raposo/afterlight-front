import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TrailsResume } from '../../components/trails-resume/trails-resume.component';
import { TrailsList } from '../../components/trails-list/trails-list.component';
import { DashboardSidebar } from '../../components/dashboard-sidebar/dashboard-sidebar.component';

@Component({
  selector: 'app-trails',
  standalone: true,
  imports: [CommonModule, TrailsResume, TrailsList, DashboardSidebar],
  templateUrl: './trails.component.html',
  styleUrls: ['./trails.component.css']
})
export class TrailsComponent {

}
