import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/state/app.state';
import { selectCount } from 'src/state/counter.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count$ !: Observable<any>;
  constructor(private  store : Store<AppState>){

  }
  ngOnInit(): void {
    this.count$ = this.store.select(selectCount)
  }
  title = 'ngrx_demo';
}
