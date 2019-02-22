import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'dev-a-day' }),
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    MarkdownModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
