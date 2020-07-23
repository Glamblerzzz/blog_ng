import { Injectable } from '@angular/core';
import { errorDetail } from './http-error'
@Injectable()
export class MessageService {
  messages: string[] = [];
  errMsg: errorDetail;
  emptyErr: errorDetail
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  addErr(obj: errorDetail) {
    this.errMsg = obj
  }

  clearErr() {
    this.errMsg = this.emptyErr
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/