import {Component, Input, OnInit} from '@angular/core';
import {JourneyModel} from '../../../../api/model/journey.model';
import {AmbulanceModel} from '../../../../api/model/ambulance.model';
import {RestService} from '../../../../api/rest.service';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {

  @Input() ambulances: AmbulanceModel[] = [];
  @Input() group: JourneyModel[] = [];

  constructor(private api: RestService) { }

  ngOnInit(): void {
  }

  transfer(id: number): void {
    this.api.transfer(id).subscribe( response => {
    });
  }
}
