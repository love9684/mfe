import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'container-app';
  
  constructor(
    private router: Router
  ) {
    localStorage.setItem(
      'policies-data',
      JSON.stringify([
        {
          policyType: 'Health insurance',
          sumInsured: 500000,
          policyStartDate: '04 May 2024',
          policyEndDate: '03 May 2025',
          policyHolder: 'Individual',
          insurer: 'ICICI Lombard General Insurance Company Ltd.',
          policyHolderName: 'Lovelesh Kumar',
          policyNumber: 'LOVE26081994',
        },
      ])
    );
  }

  onInsuranceDetailLinkClick() {
    this.router.navigate(['/insurance', 'LOVE26081994'])
  }
}
