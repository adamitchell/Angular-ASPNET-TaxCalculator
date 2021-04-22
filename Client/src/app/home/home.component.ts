import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

    message: string;

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.message = "Initialized";
        // this.dataService.getMessage().subscribe((message: string) => {
        //     this.message = message;
        //     console.log(this.message);
        // });
    }
}