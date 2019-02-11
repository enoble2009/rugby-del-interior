import { Component, Inject } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rugby-del-interior';

  ngOnInit() {
    //this.router.navigate('/home');
  }

  constructor(private router: Router) {
  }

}
