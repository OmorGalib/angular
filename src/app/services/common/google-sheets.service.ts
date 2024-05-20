import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleSheetsService {
  private apiKey: string = 'AIzaSyCgvfKg-geTnrUWjNvs7-eLYND9Kk-E8QM';
  private spreadsheetId: string = '1edpgHh93WJfZdhtJIOZ8KjVg5DVIJ1EyWux0SOASYsw';

  constructor(private httpClient: HttpClient) {}

  getData(range: string): Observable<any> {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${range}?key=${this.apiKey}`;
    return this.httpClient.get<any>(url);
  }
}
