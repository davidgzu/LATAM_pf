import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Routes
import { APP_ROUTES } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { CasaTomadaComponent } from './Components/casa-tomada/casa-tomada.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CasaTomadaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
