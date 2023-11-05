import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = "Narae's First Angular Project";
  description = 'This project demonstrates how to build an Angular app based on Learning Angular, 4th edition.';

  ngOnDestroy(): void {
  }
}
