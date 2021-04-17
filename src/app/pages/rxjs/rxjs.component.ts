import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})

export class RxjsComponent implements OnDestroy {

  public intervalSub: Subscription;

  constructor() { 

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log(valor),
    //   error => console.warn(error),
    //   () => console.info("ok")
    // );

    this.intervalSub = this.retornaIntervalo().subscribe(console.log)
  }
  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {

    return interval(500)
            .pipe( 
              take(10),
              map( valor => { return valor +1 } ),
              filter( valor => ( valor % 2 === 0 ) ? true : false )
            );

  }

  retornaObservable() {
    let i = 0;

    const obs$ = new Observable<number>( observer => {

     const intervalo = setInterval( () => {
        i++;
        observer.next(i);     
        if (i === 4){
          clearInterval(intervalo);
          observer.complete();
        }

        if (i===2){
          observer.error('i llegó a 2');
        }
      }, 1000)


    });

    return obs$;
  }
}
