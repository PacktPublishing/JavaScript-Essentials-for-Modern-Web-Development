import {Observable} from 'rxjs';
import * as faker from 'faker';

let observable = Observable.create(observer => {
    let t = setInterval(() => {
        let randomEmail = faker.internet.email();
        observer.next(randomEmail);
    }, 2000);

    setTimeout(() => {
        clearInterval(t);
        observer.complete();
    }, 15000);
});

observable.subscribe({
    next: currentEmail => console.log(`Current email ${currentEmail}`),
    complete: () => console.log("Stream completed")
});
