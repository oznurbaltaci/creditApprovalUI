
import { RecoursePageComponent } from './views/recourse-page/recourse-page.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatIconModule, MatInputModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './views/partials/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditRecourseService } from './service/credit-recourse.service';
import { HttpClientModule } from '@angular/common/http';
import { ProgressDialogComponent } from './views/partials/progress-dialog/progress-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RecoursePageComponent,
    HeaderComponent,
    ProgressDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [CreditRecourseService],
  bootstrap: [AppComponent],
  entryComponents: [ProgressDialogComponent]
})
export class AppModule { }
