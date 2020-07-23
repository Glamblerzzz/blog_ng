import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
// import { PageHeadComponent } from './component/page-head/page-head.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    let userAgentInfo: String = navigator.userAgent
    let Agents: string[] = [
      "Android", "iPhone",
      "SymbianOS", "Windows Phone",
      "iPad", "iPod"
    ]
    let flag: Boolean = false
    Agents.forEach(res => {
      if (userAgentInfo.indexOf(res) > 0) {
        flag = true
      }
    })
    // if(flag){
    //   this.router.navigate(['/mobile'])
    // }
    // else {
    //   this.router.navigate(['/pc'])
    // }
    this.router.navigate(['/pc/blog_article'])
  }

  title = 'glambler-blog'
}
