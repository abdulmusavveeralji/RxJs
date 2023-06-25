import {filter, fromEvent} from "rxjs";
import { map, pluck } from "rxjs/operators"

const observable = fromEvent(
    document, 'keydown'
).pipe(
    // map(event => event.code)
    pluck('code'),
    filter(code => code === 'Space')
)

observable.subscribe({
    next(value) {
        console.log(value);
    }
})

console.log('hello')