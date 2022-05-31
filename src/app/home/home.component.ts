import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myDestroy: Subscription = new Subscription;
  constructor(private routerVariable: Router) { }

  ngOnInit(): void {
    const obs$ = new Observable(obs => {
      console.log("Start")
      obs.next('100');
      obs.next('200');
      //obs.error('Not Working');
      obs.next('300');
      //obs.complete();
      setTimeout(() => {
        obs.next('400');   //Asyncronus
      }, 1000);  
      console.log("End");
    });
  
    this.myDestroy = obs$.subscribe(sub => {
      console.log("First:", sub)
    }, 
    errorVar => {
      console.log('Error', errorVar)
    },
    () => {
      console.log('Completed')
    });
    
    this.myDestroy.unsubscribe(); //It Will not wait for one second
    // obs$.subscribe(sub => {
    //   console.log("second", sub);
    // });
  }



  gotoContactMe(){
    this.routerVariable.navigate(['/contactme'], {skipLocationChange : true})
  }

}
