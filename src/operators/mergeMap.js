import {fromEvent, interval, mergeMap, tap} from "rxjs";
import {ajax} from "rxjs/ajax";
import {take} from "rxjs/operators";

const button = document.querySelector('#btn');
const observable = fromEvent(button, 'click')
    .pipe(
        mergeMap((value) => {
            return interval(1000).pipe(
                tap(console.log)
            )
        }),
        take(5)
    )

observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() { console.log('complete')}
})

console.log('hello')