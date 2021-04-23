import { Component, OnInit } from '@angular/core';
import { TaxCalculatorService } from '../../core/services/tax-calculator.service';
import { DataService } from '../../core/services/data.service';
import { TaxCalculation } from '../../core/models/tax-calculation';

@Component({
    selector: 'tax-calculator',
    templateUrl: '../templates/tax-calculator.component.html',
    styleUrls: ['../css/tax-calculator.component.css'],
})
export class TaxCalculatorComponent implements OnInit {

    directions: string = "Insert your annual USD income and zip code to calculate your taxes";
    loadingMessage: string = "";
    errorMessage: string = "An error occured";
    noDataMessage: string = "Error - No Data";
    income: number = 110000;
    zipCode: number = 77386;
    taxCalculation: TaxCalculation = new TaxCalculation();

    constructor(private taxCalculatorService: TaxCalculatorService, private dataService: DataService) { }

    ngOnInit() 
    {
        
    }

    getCalculatedTax()
    {
      this.loadingMessage = "Calculating...";
      try
      {
        this.income = Number((<HTMLInputElement>document.getElementById('incomeInput')).value);
        this.zipCode = Number((<HTMLInputElement>document.getElementById('zipCodeInput')).value);
        
        this.taxCalculatorService.getCalculatedTax(this.income, this.zipCode).subscribe((data: any) => {
            if(data)
            {
              this.loadingMessage = "";
              this.taxCalculation = data;
            }else{
              this.loadingMessage = this.noDataMessage;
            }
        }, error => { this.loadingMessage = this.errorMessage });
      }catch(e)
      {
        this.loadingMessage = "Bad Input";
      }
    }

    isError(): boolean
    {
      if(this.loadingMessage)
      {
        let index = this.loadingMessage.toLowerCase().indexOf("error");
        if(index > -1)
        {
          return true;
        }
      }
      return false;
    }
}