import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/state/app.state';
import { decreament, increament, reset } from 'src/state/counter.action';
import { selectCount } from 'src/state/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
// how can we use store in our application 
// first create a observable 
// inject the store , appState in the constructor
// used selector to get updated state form reducer 
 //to connect component with action , need to dispatch the action (so the action will trigger and update the reducer)
  count$ !: Observable<number> ;
  constructor(private store :Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.select(selectCount)
    this.count$.subscribe((res)=>{
      console.log(res)
    })
  }
  
  onIncreament(){
    //dispatching the increment action
   this.store.dispatch(increament())
  }
  onDecreament(){
    //dispatching the decrement action
    this.store.dispatch(decreament())

  }
  onReset(){
        //dispatching the reset action

    this.store.dispatch(reset())

  }
}
