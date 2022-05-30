let map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);

console.log(map.size);

map.set(['key4', 'value4']);

console.log(map.get('key3'));
console.log(map.has("key3"));

if(map.has("key5")) {
    console.log(map.get("key3"));
} else {
    console.log("this element does not exist");
}

console.log("Tring to delete key");

console.log(map.delete("key5"));

// map.clear();
// console.log(map.size);

for(let value of map.keys()) {
    console.log(value);
}

map.set("value5");

console.log("");
console.log(map.get("value5"));

map.set("key6", "value6");

map.delete(['key4', 'value4']);

for(let value of map.keys()) {
    console.log(value);
}

for(let pair of map.entries()) {
    console.log(`Key: ${pair[0]}, value: ${pair[1]}`);
}