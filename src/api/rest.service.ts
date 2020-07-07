import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

/**
 * Rest Service that connects with the Backend API
 */
@Injectable({
    providedIn: 'root'
})
export class RestService {

    private endpoint = 'http://localhost:8080/';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    getAmbulances(): Observable<any> {
        return this.http.get(this.endpoint + 'ambulances', this.httpOptions);
    }

    getJourney(): Observable<any> {
        return this.http.get(this.endpoint + 'journey', this.httpOptions);
    }

    transfer(id: number): Observable<any> {
        const body = new HttpParams()
            .set('ID', String(id));

        return this.http.post(this.endpoint + 'transfer',
            body.toString(),
            {
                headers: new HttpHeaders()
                    .set('Content-Type', 'application/x-www-form-urlencoded')
            }
        );
    }
}
