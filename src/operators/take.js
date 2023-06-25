import {filter, fromEvent, interval} from "rxjs";
import { take, scan } from "rxjs/operators"

const observable = interval(500)
    .pipe(
        take(6),
        scan(
            (acc, val) => acc + val, 0
        )
    )

observable.subscribe({
    next(value) {
        console.log(value);
    }
})

console.log('hello')