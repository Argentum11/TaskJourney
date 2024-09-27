import { Component, DestroyRef, inject, input, OnInit } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  userID = input.required<string>();
  userTasks: Task[] = [];

  /* ActivatedRoute approach */
  // private activatedRoute = inject(ActivatedRoute);
  // private destoryRef = inject(DestroyRef);

  // ngOnInit(): void {
  //   const paramMapSubscription = this.activatedRoute.parent?.paramMap.subscribe({
  //     next: (paramMap) => {
  //       console.log(paramMap.get('userID'));
  //     },
  //   });

  //   this.destoryRef.onDestroy(() => paramMapSubscription?.unsubscribe());
  // }
}
