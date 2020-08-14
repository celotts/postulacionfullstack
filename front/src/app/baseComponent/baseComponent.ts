import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class BaseComponent implements OnDestroy {

  public ngUnSubscribe$ = new Subject<void>();

  ngOnDestroy(): void {
    //console.log('Destroy');
    this.ngUnSubscribe$.next();
    this.ngUnSubscribe$.complete();
  }
}
