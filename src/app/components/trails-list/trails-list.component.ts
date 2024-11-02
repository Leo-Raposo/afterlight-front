import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Exercise {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-trails-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './trails-list.component.html',
  styleUrls: ['./trails-list.component.css']
})
export class TrailsList implements OnInit {
  exercises: Exercise[] = [];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadExercises();
  }

  loadExercises(): void {
    this.authService.getExercises().subscribe(
      (response) => {
        console.log('Exercises loaded:', response.exercises);

        const helloWorldExercise: Exercise = {
          id: 1,
          title: 'Hello World',
          completed: false
        };

        this.exercises = [helloWorldExercise, ...response.exercises.map((name, index) => ({
          id: index + 2,
          title: this.capitalizeFirstLetter(name.replace(/-/g, ' ')),
          completed: false
        }))];

        console.log('Mapped exercises:', this.exercises);
      },
      error => {
        console.error('Error loading exercises:', error);
      }
    );
  }

  private capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  navigateToCodePage(exerciseId: number): void {
    this.router.navigate(['/code-page'], { queryParams: { exerciseId } });
  }
}
