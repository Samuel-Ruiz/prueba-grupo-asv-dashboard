import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AmbulanceTransferComponent} from './views/ambulance-transfer/ambulance-transfer.component';

const routes: Routes = [
    { path: '',      component: AmbulanceTransferComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
