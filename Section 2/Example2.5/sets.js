let set = new Set();

set.add("whatever");
set.add("foo");
set.add("bar");

console.log(set.has("foo"));
console.log(set.has("bar"));
console.log(set.has("Foo"));
set.add("Foo");
console.log(set.has("Foo"));
console.log(set);
set.add("foo");
console.log(set);

let arr = ["whatever", "foo", "bar", "Foo"];
console.log(arr);
arr.push("foo");
console.log(arr);
