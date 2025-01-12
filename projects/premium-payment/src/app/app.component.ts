import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    let data = sessionStorage.getItem('policyDetail');
    try {
      if (data) {
        this.policyDetail = JSON.parse(data);
        sessionStorage.removeItem('policyDetail');
      }
    } catch (error) {
      
    }
  }

  onRenew() {
    this.router.navigateByUrl('/');
  }
}
