import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { ServersInfoComponent } from './servers-info/servers-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerInfoComponent,
    ServersInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
