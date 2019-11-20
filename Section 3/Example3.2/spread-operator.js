const data = {
    a: 1,
    b: 2,
    c: "c"
};

function modifyData(d) {
    d.a++;
    d.b++;
    d.c = d.a + d.b;
    console.log(d);
}

modifyData({...data});
console.log(data);