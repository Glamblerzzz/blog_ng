import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pc',
  templateUrl: './pc.component.html',
  styleUrls: ['./pc.component.scss']
})

export class PcComponent implements OnInit {

  constructor() { }
  @ViewChild('myattr') myattr: any;

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    // console.log(window.screen.availHeight);
    // console.log(document.getElementsByClassName('index_back'))
    // this.myattr.nativeElement.style.color = '#'
    // var boxDom: any = document.getElementById('box');
    // boxDom.style.color = 'red';
  }
  navbarNumber(e):void {
    if(e===0){
      this.myattr.nativeElement.style.height = '100vh'
    } else {
      this.myattr.nativeElement.style.height = '50vh'
    }
  }

}
