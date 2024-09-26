import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userID = input.required<string>();
  userName = '';
  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destoryRef = inject(DestroyRef);

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userID())?.name
  // );

  ngOnInit(): void {
    /* Angular will reuse the component instance when switching different users, 
        so ngOnInit might not be re-executed every time when switching users,
        therefore the only way to be notified when the route changes is to setup a subscription for the route */
    const paramMapSubscription = this.activatedRoute.paramMap.subscribe({
      next: (paramap) => {
        this.userName =
          this.usersService.users.find((u) => u.id === paramap.get('userID'))
            ?.name || '';
      },
    });

    this.destoryRef.onDestroy(() => paramMapSubscription.unsubscribe());
  }
}
