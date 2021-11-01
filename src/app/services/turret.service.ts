import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class TurretService {
  constructor(private http: HttpClient, private config: ConfigService) {}

  submitSettings(calibrationSettings: any): Observable<any> {
    return this.http.put(
      this.config.getBaseUrl() + '/calibration/settings',
      calibrationSettings
    );
  }

  // TODO type any
  runCalibration(): Observable<any> {
    return this.http.post(this.config.getBaseUrl() + '/calibration/run', {});
  }
}
