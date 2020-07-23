import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './pc/page-header/page-header.component';
import { PageFooterComponent } from './pc/page-footer/page-footer.component';
import { BlogArticleComponent } from './pc/content/blog-article/blog-article.component';
import { MsgComponent } from './pc/content/msg/msg.component';
import { Msg2Component } from './pc/content/msg2/msg2.component';
import { ProjectComponent } from './project/project.component';
import { MobileComponent } from './mobile/mobile.component';
import { PcComponent } from './pc/pc.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesService } from './heroes/heroes.service';
import { ConfigService } from './config/config.service';
import { HttpErrorHandler } from './http-error-handler.service'
import { MessageService } from './message.service'
import { HttpInterceptorProviders } from '../app/http-interceptors/index'
import {AuthService} from '../app/auth.service';
import { ContentComponent } from './pc/content/content.component';
@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageFooterComponent,
    BlogArticleComponent,
    MsgComponent,
    Msg2Component,
    ProjectComponent,
    MobileComponent,
    PcComponent,
    HeroesComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HeroesService,
    ConfigService,
    HttpErrorHandler,
    MessageService,
    HttpInterceptorProviders,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
