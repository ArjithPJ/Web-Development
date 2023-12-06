/*console.log(document.cookie);
localStorage.setItem('name','Bob');
sessionStorage.setItem('name','Wayne');
document.cookie='name=Bob';
*/

var myObj={
  'name':'Bob',
  'age':30
};

let myObjSerialized=JSON.stringify(myObj);
localStorage.setItem('myObj',myObjSerialized);

let myObjDeserialized=JSON.parse(myObjSerialized);
localStorage.setItem('myObj1',myObjDeserialized);