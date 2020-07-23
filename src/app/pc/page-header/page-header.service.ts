import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { HttpErrorHandler, HandleError } from '../../http-error-handler.service';
import { MenuList } from './head-interface'
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
}

@Injectable()
export class PageHeaderService {
    menuList = '/api/get_vlist'
    private handleError: HandleError
    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler
    ) {
        this.handleError = httpErrorHandler.createHandleError('pageHeaderService');
    }

    getMenuList(): Observable<MenuList[]> {
        return this.http.get<MenuList[]>(this.menuList)
            .pipe(
                retry(1),
                catchError(this.handleError('getMenuList', []))
            );
    }
    
}