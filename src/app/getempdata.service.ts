import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetempdataService {

  constructor(private _httpClient: HttpClient) { }

  public getMenuData(): Observable<any> {
    return this._httpClient.get<any>('assets/employee.json');
  }
}
