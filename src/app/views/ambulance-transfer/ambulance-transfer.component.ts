import {Component, OnInit} from '@angular/core';
import {RestService} from '../../../api/rest.service';
import {AmbulanceModel} from '../../../api/model/ambulance.model';
import {JourneyModel} from '../../../api/model/journey.model';

@Component({
    selector: 'app-ambulance-transfer',
    templateUrl: './ambulance-transfer.component.html',
    styleUrls: ['./ambulance-transfer.component.css']
})
export class AmbulanceTransferComponent implements OnInit {

    ambulances: AmbulanceModel[] = [];
    journey: JourneyModel[] = [];
    groupOnAmbulance: JourneyModel[] = [];

    constructor(private api: RestService) {
    }

    ngOnInit(): void {
        setInterval(() => {
            this.api.getAmbulances().subscribe(response => {
                this.ambulances = response;
            });
            this.api.getJourney().subscribe(response => {
                this.journey = response.filter(journey => {
                    return journey.status !== 'END';
                });
                this.groupOnAmbulance = response.filter(journey => {
                    return journey.status === 'ONBOARD' || journey.status === 'TRAVELING';
                });
            });
        }, 1000);
    }

}
