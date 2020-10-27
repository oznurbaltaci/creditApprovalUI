import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import CreditRecourseModel from 'src/app/model/credit-recourse.model';
import { CreditRecourseService } from 'src/app/service/credit-recourse.service';
import * as alertify from "alertifyjs";
import { MatDialog } from '@angular/material';
import { ProgressDialogComponent } from '../partials/progress-dialog/progress-dialog.component';

@Component({
  selector: 'app-recourse-page',
  templateUrl: './recourse-page.component.html',
  styleUrls: ['./recourse-page.component.css']
})
export class RecoursePageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  creditRecourse: CreditRecourseModel;
  subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog,private formBuilder: FormBuilder, private creditRecourseService: CreditRecourseService) {
    this.buildForm()
   }
  

  ngOnInit() {

    

  }

  ngOnDestroy(){
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  recourse(){
    let dialogRef = this.dialog.open(ProgressDialogComponent,{disableClose: true});
    if(this.form.valid){
      this.creditRecourse = new CreditRecourseModel;
      this.creditRecourse.name = this.form.controls['name'].value;
      this.creditRecourse.surname = this.form.controls['surname'].value;
      this.creditRecourse.identityNumber = this.form.controls['identityNumber'].value;
      this.creditRecourse.phoneNumber = "+90"+this.form.controls['phoneNumber'].value;
      this.creditRecourse.monthlyIncome = this.form.controls['monthlyIncome'].value;

      this.subscriptions.push(this.creditRecourseService.getCreditApprovalResponse(this.creditRecourse).subscribe(res=>{
        console.log(res);
        dialogRef.close();
        alertify.alert()
        .setting({
          'label': "TAMAM",
          'message': "Başvurunuz alınmıştır. Bilgilendirme mesajı sms ile gönderilmiştir.",
          'title': '<span class="fa fa-info-circle" '
            + 'style="vertical-align:middle;color:#0000e1;">'
            + '</span> &nbsp Bilgilendirme'
        }).show();
        this.form.reset();
      },err=>{
        dialogRef.close();
        alertify.alert()
        .setting({
          'label': "TAMAM",
          'message': "Başvuru sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
          'title': '<span class="fa fa-info-circle" '
            + 'style="vertical-align:middle;color:#0000e1;">'
            + '</span> &nbsp HATA'
        }).show();
        console.log(err);
      }));

    }else{
      dialogRef.close();
      alertify.alert()
        .setting({
          'label': "TAMAM",
          'message': "Lütfen zorunlu alanları doğru bir şekilde doldurunuz!",
          'title': '<span class="fa fa-info-circle" '
            + 'style="vertical-align:middle;color:#0000e1;">'
            + '</span> &nbsp Uyarı'
        }).show();
    }
  }


  buildForm(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      identityNumber: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      monthlyIncome: ['', Validators.required],
    });
  }

}
