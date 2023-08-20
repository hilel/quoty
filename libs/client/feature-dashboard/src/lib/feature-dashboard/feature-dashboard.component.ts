import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiService } from '@qt/client/data-access';

@Component({
  selector: 'quoty-feature-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent {
  private readonly apiService = inject(ApiService);

  quotes$ = this.apiService.getAllQuoteItems();
}
