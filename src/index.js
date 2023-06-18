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
    const id = setInterval(() => {
        subscriber.next('Alji')
        console.log('test')
    }, 1000)
    subscriber.complete()
    return () => {
        clearInterval(id)
    }

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