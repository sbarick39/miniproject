import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EmployeeComponent } from './components/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials.module';
import { lazyRoutes } from './routes/app.routes';
import { AppComponent } from './app.component';
import { LazyModule } from './modules/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LazyModule,
    lazyRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
