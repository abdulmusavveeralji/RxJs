import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
    subscriber.next('Hello Musavveer')
    subscriber.error('Error!');
    subscriber.next('Test')
    subscriber.complete()
    subscriber.next('Next')
});

observable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log('Complete Called!')
    },
    error: (err) => {
        console.error(err);
    }
})

console.log('before')
const asyncObservable = new Observable((subscriber) => {
    setInterval(() => {
        subscriber.next('Sufiyan')
    }, 1000)
});

asyncObservable.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => {
        console.log('Complete Called!')
    },
    error: (err) => {
        console.error(err);
    }
})

console.log('after')