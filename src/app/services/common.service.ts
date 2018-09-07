import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiEndpoint} from '../app.constants';
import {Observable} from 'rxjs';
import {IRecordPage, IResponse} from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { } 

  changeField(params: {
    table_name: string,
    row_id: number,
    col_name: string
    col_value: string
  }): Observable<IResponse<any>> {
    return this.http.post<IResponse<any>>(`${ApiEndpoint}/admin/activeInactive`, params);
  }

  post<T>(path: string, params: any): Observable<IResponse<T>> {
    return this.http.post<IResponse<T>>(`${ApiEndpoint}${path}`, params);
  }

  get<T>(path: string, params: any): Observable<IResponse<T>> {
    return this.http.post<IResponse<T>>(`${ApiEndpoint}${path}`, {params});
  }

}
