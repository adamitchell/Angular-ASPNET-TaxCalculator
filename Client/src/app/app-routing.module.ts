import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TaxCalculatorComponent } from './core/controllers/tax-calculator.component';
import { HireAdamComponent } from './core/controllers/hire-adam.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'home', component: HomeComponent,
        children: [
          { path: 'tax-calculator', component: TaxCalculatorComponent },
          { path: 'hire-adam', component: HireAdamComponent }
        ] 
    },
    { path: '**', redirectTo: '/home/tax-calculator' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
    static components = [ HomeComponent ];
}