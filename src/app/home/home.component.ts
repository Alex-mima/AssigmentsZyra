import { UserService } from './../user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private ObservbleSubsrciption: Subscription;

  constructor() {}
  ngOnInit() {
    // this.ObservbleSubsrciption = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(
            new Error('I dont know how to count higher than 3 brudda!')
          );
        }
        count++;
      }, 1000);
    });
    this.ObservbleSubsrciption = customObservable.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert(error);
      },
      () => {
        console.log('completion');
      }
    );
  }

  ngOnDestroy() {
    this.ObservbleSubsrciption.unsubscribe();
  }
}
