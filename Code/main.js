const viewer = document.getElementById('viewer');
const viewerport = document.getElementById('viewerport');

function displayViewer(data) {
    viewer.innerHTML = data;
}

function displayViewerPort(data) {
    viewerport.innerHTML = data;
}

// function add(a, b, callback) {
//     callback(a + b);
// }


// add(1, 4, displayViewer);
// setTimeout(()=>{
//     add(1,6,displayViewerPort)
// },3000)

// let myFunc = new Promise(function(success, failure) {
//   let value = 0;
//   if (value == 0) {
//     success("Success");
//   } else {
//     failure("Error");
//   }
// });

// myFunc.then(
//   function(value) {displayViewer(value);},
//   function(error) {displayViewer(error);}
// );


// let myFunc = new Promise(function(success, error) {
//   setTimeout(function() { success(1+4); }, 3000);
// });

// myFunc.then(function(value) {
//   document.getElementById("viewer").innerHTML = value;
// });


async function myDisplay() {
  let myFunc = new Promise(function(success) {
    setTimeout(function() {success(30+40);}, 3000);
  });
  displayViewer(400)
  document.getElementById("viewer").innerHTML = await myFunc;
  displayViewerPort(300)
}

myDisplay();