import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PageHeaderService } from './page-header.service'
import { MenuList } from './head-interface'
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  providers: [PageHeaderService]
})
export class PageHeaderComponent implements OnInit {
  @Output() navbarNumber = new EventEmitter<number>();
  public menuList: MenuList[]
  public ItemChecked: boolean[] = [true, false, false]
  constructor(public router: Router, private pageHeaderService: PageHeaderService) { }

  /*
  *声明周期
  *init 组件和指令初始化完成，dom未加载完成
  */
  ngOnInit(): void {
    this.getMenuList()
  }

  getMenuList(): void {
    this.pageHeaderService.getMenuList()
      .subscribe(
        (menuList: MenuList[]) => {
          this.menuList = menuList
        },
        error => {
          console.log(error)
          this.menuList = [
            {
              'id': 1,
              'name': '文章',
              'status': 1,
              'url': 'blog_article'
            },
            {
              'id': 2,
              'name': 'asd',
              'status': 1,
              'url': 'msg'
            }
          ]
        } // error path
      )
  }

  ChangeNavbar(e): void {
    let url: String
    url = `/pc/${this.menuList[e].url}`
    for (const key in this.ItemChecked) {
      if (key == e) {
        this.ItemChecked[key] = true;
      } else {
        this.ItemChecked[key] = false
      }
    }
    this.navbarNumber.emit(e)
    this.router.navigate([url])
  }
}
