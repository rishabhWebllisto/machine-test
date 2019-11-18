import { Observable } from 'rxjs';
import { AuthService } from './../auth/authService';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(public auth: AuthService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
        return next.handle(request);
    }
    
}