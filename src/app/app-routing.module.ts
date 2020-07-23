import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogArticleComponent } from './pc/content/blog-article/blog-article.component';
import { MsgComponent } from './pc/content/msg/msg.component';
import { Msg2Component } from './pc/content/msg2/msg2.component';
import { ProjectComponent } from './project/project.component';
import { MobileComponent } from './mobile/mobile.component';
import { PcComponent } from './pc/pc.component';
import { HeroesComponent } from './heroes/heroes.component';
const routes: Routes = [
  {
    path: 'pc',
    component: PcComponent,
    children: [
      {
        path: 'blog_article',
        component: BlogArticleComponent,
        children: [
          {
            path: 'pro',
            component: ProjectComponent
          }
        ]
      },
      {
        path: 'msg',
        component: MsgComponent
      },
      
      {
        path: 'msg2',
        component: Msg2Component
      },
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ]
  },
  {
    path: 'mobile',
    component: MobileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
