function count (n) {
  
return function() {

          return ++n;
    };
}

const n = 20; 
const addcount = count(n);

array = [];


for (let i = 0; i < 3; i++) {

  array.push(addcount());
 
};

console.log(array);
