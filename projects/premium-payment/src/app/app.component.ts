import { Component } from '@angular/core';

type PolicyDetail = {
  policyType: string;
  sumInsured: number;
  policyStartDate: string;
  policyEndDate: string;
  policyHolder: string;
  insurer: string;
  policyNumber: string;
  policyHolderName: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'premium-payment';
  policyDetail: PolicyDetail | null = null;

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
