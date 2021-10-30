import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListemployeComponent } from './listemploye/listemploye.component';
import { SuppemployesComponent } from './suppemployes/suppemployes.component';
import { ListvoituresComponent } from './components/listvoitures/listvoitures.component';
import { InfosvoituresComponent } from './components/infosvoitures/infosvoitures.component';

@NgModule({
  declarations: [
    AppComponent,
    ListemployeComponent,
    SuppemployesComponent,
    ListvoituresComponent,
    InfosvoituresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
