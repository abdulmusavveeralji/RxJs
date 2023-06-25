import { fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators"

const observable = fromEvent(
    document, 'keydown'
).pipe(
    // map(event => event.code)
    pluck('code')
)

observable.subscribe({
    next(value) {
        console.log(value);
    }
})

console.log('hello')