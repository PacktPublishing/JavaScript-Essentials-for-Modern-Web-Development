import { Observable } from 'rxjs';
import { map, filter, flatMap } from 'rxjs/operators';
import * as axios from 'axios';

function fetchToDos() {
    return Observable.create(observer => {
        axios.default.get("https://jsonplaceholder.typicode.com/todos").then(response => {
            observer.next(response.data);
            observer.complete();
        }).catch(err => {
            observer.error(err);
        });
    });
}

let todos$ = fetchToDos();
todos$.pipe(
    flatMap(t => t),
    filter(t => t.completed),
    map(t => t.title)
).subscribe({
    next: todos => console.log("Todo: ", todos),
    complete: () => console.log("Stream completed"),
    error: err => console.log("Oops something went wrong:", err)
});