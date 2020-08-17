import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SpaModule} from 'src/SPA/spa.module'
import { appRoutes } from './routes/app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    SpaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
