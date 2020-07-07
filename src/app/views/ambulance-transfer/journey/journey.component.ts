import {Component, Input, OnInit} from '@angular/core';
import {JourneyModel} from '../../../../api/model/journey.model';

@Component({
    selector: 'app-journey',
    templateUrl: './journey.component.html',
    styleUrls: ['./journey.component.css']
})
export class JourneyComponent implements OnInit {

    @Input() journey: JourneyModel[] = [];

    constructor() {
    }

    ngOnInit(): void {
    }

}
