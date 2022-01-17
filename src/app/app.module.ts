//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from "@angular/common/http";
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { ChartComponent } from './components/chart/chart.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    ContentHeaderComponent,
    ChartComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
