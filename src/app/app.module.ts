import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { ChartsModule } from 'ng2-charts';
import { ROUTING } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ApiCallService } from './api-call.service';
import { SampleChartComponent } from './sample-chart/sample-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        SearchBarComponent,
        SampleChartComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        ClarityModule,
        ChartsModule,
        ROUTING
    ],
    providers: [ApiCallService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
