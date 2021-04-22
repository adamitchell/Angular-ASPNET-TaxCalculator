import { Component, OnInit } from '@angular/core';
import { TaxCalculatorService } from '../../core/services/tax-calculator.service';

@Component({
    selector: 'tax-calculator',
    templateUrl: '../templates/tax-calculator.component.html',
    styleUrls: ['../css/tax-calculator.component.css'],
})
export class TaxCalculatorComponent implements OnInit {

    income: number;
    zipCode: number;

    constructor(private taxCalculatorService: TaxCalculatorService) { }

    ngOnInit() 
    {
        
    }

    getCalculatedTax()
    {
      this.taxCalculatorService.getCalculatedTax(this.income, this.zipCode).subscribe((data: any) => {
          console.log(data);
      });
    }
}