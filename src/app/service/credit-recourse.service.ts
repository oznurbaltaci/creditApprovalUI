
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import CreditRecourseModel from '../model/credit-recourse.model';

@Injectable()
export class CreditRecourseService{

    private clientURL: string;

    constructor(private http: HttpClient) {
        this.clientURL = environment.baseApiUrl +'client/recourse';
    }


    public getCreditApprovalResponse(creditRecourseModel : CreditRecourseModel){
        return this.http.post(this.clientURL,creditRecourseModel);
    }
}