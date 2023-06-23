import { Component } from '@angular/core';
import { SubscriptionService } from '../subscription.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private subscriptionService: SubscriptionService) { }

  onSubscribe(): void {
    const userId = 'user123'; // replace with actual user ID
    const planId = 'plan123'; // replace with actual plan ID

    this.subscriptionService.subscribeUser(userId, planId).subscribe(
      response => {
        // handle successful subscription
        console.log('Subscription successful', response);
      },
      error => {
        // handle error
        console.error('Subscription failed', error);
      }
    );
  }
}


