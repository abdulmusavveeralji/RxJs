import {interval, reduce, tap} from "rxjs";
import {scan, take} from "rxjs/operators"

const observable = interval(500)
    .pipe(
        take(5),
        tap({
            next(value) {
                console.log(value);
            },
            complete() { console.log('tap done')}
        }),
        reduce(
            (acc, val) => acc + val, 0
        )
    )

observable.subscribe({
    next(value) {
        console.log(value);
    },
    complete() { console.log('complete')}
})

console.log('hello')