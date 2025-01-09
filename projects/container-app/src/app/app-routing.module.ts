import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'insurance/:policyNumber', loadChildren: () => {
      return loadRemoteModule({
        remoteName: 'insuranceDetails',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './MyPoliciesModule'
      }).then(m => m.MyPoliciesModule).catch(err => console.log(err))
    }
  },
  {
    path: 'payment',
    loadChildren: () => {
      return loadRemoteModule({
        remoteName: 'premiumPayment',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './AppModule'
      }).then(m => m.AppModule).catch(err => console.log(err))
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ComponentArray = [];
