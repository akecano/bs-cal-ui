import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private baseUrl = 'http://localhost:3000/api';

  constructor() {}

  getBaseUrl() {
    return this.baseUrl;
  }
}
