import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'hire-adam',
    templateUrl: '../templates/hire-adam.component.html',
    styleUrls: ['../css/hire-adam.component.css'],
})
export class HireAdamComponent implements OnInit {

    whyHireAdam: string = "He would be a great choice. Don't think about it.";

    constructor() { }

    ngOnInit() 
    {
        
    }
}