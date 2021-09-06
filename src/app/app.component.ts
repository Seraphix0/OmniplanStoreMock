import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OmniplanStoreMock';

  // $login: Observable<boolean>;

  constructor(private store: Store) {
    console.log(this.store.select(state => console.log(state)));
  }

  login(): void {

  }
}
