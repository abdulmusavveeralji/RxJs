import {filter, fromEvent, of, reduce} from "rxjs";
import { map, pluck } from "rxjs/operators"

const observable = of(1,2,3,4,5,6)
    .pipe(
        reduce(
            (acc, val) => acc + val, 0
        )
    )

observable.subscribe({
    next(value) {
        console.log(value);
    }
})

console.log('hello')