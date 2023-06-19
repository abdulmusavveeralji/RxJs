import { of } from "rxjs";

const observable = of([1,2,3,4,5,6]);

observable.subscribe({
    next: (value) => {
        console.log(value)
    },
    complete: () => {
        console.log('complete')
    }
})
