import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

interface ApiResponse {
  title: string;
  data: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient: HttpClient) { }

  async getData() {
    //make API request
    const req = this._httpClient.get<ApiResponse>('./assets/data.json');
    //extract data with rxjs library
    const value = firstValueFrom(req);
    //when ready, we return data

    return value;
  }
}
