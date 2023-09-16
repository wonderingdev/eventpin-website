import { HomeComponent } from './home/home.component';
import { HeaderSectionComponent } from './home/header-section/header-section.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from './app.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BodySectionComponent } from './home/body-section/body-section.component';
import { DownloadItSectionComponent } from './home/download-it-section/download-it-section.component';
import { SupportComponent } from './support/support.component';
import { PlatformModule } from '@angular/cdk/platform';
import { BenefitsComponent } from './home/body-section/benefits/benefits.component';
import { InstructionsComponent } from './home/body-section/instructions/instructions.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderSectionComponent,
    PrivacyPolicyComponent,
    AppComponent,
    TermsOfServiceComponent,
    BodySectionComponent,
    DownloadItSectionComponent,
    SupportComponent,
    BenefitsComponent,
    InstructionsComponent,
  ],
  imports: [
    HttpClientModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    PlatformModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
