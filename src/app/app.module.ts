import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EmployeeComponent } from './components/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials.module';
import { lazyRoutes } from './routes/app.routes';
import { AppComponent } from './app.component';
import { LazyModule } from './modules/lazy.module';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { DialogfirstComponent } from './dialogfirst/dialogfirst.component';
import { DialogsecondComponent } from './dialogsecond/dialogsecond.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DialogfirstComponent,
    DialogsecondComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LazyModule,
    lazyRoutes,
    MatButtonModule,
    MatDialogModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [DialogfirstComponent]
})
export class AppModule { }
