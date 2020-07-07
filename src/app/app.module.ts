import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AmbulanceTransferComponent} from './views/ambulance-transfer/ambulance-transfer.component';
import {AmbulanceComponent} from './views/ambulance-transfer/ambulance/ambulance.component';
import {JourneyComponent} from './views/ambulance-transfer/journey/journey.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { StatusToStylePipe } from './pipes/status-to-style.pipe';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { StatusToStatusMessagePipe } from './pipes/status-to-status-message.pipe';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { FilterByAmbulanceIdPipe } from './pipes/filter-by-id.pipe';

@NgModule({
    declarations: [
        AppComponent,
        AmbulanceTransferComponent,
        AmbulanceComponent,
        JourneyComponent,
        StatusToStylePipe,
        StatusToStatusMessagePipe,
        FilterByAmbulanceIdPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule,
        NoopAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatTableModule,
        MatButtonToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
