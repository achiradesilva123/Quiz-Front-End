const array= [] ;
let quection='';

$("#btn-create").click(function () {
    console.log("wada");
    let count=$("#input-PnoOfQ").val();
    this.array = new Array(count);
    for (let i = count; i > 0 ; i--) {
        let tamplate =`<div class="card">
                 <div class="card-header">
                   Quection : `+ (count-(i-1))+`
                  </div>
                 <div class="card-body">
                 <input class="card-title" type="text" placeholder="Enter Your Quections"></input>
                 <p class="card-text"> i    :  <input class="card-title" type="text" placeholder="Enter Your Quections" id="quection" onchange="myFunction(this.value)"/></p>
                 <p class="card-text"> ii  :  <input class="card-title" type="text" placeholder="Enter Your Quections"></input></p>
                 <p class="card-text"> iii :  <input class="card-title" type="text" placeholder="Enter Your Quections"></input></p>
                 <p class="card-text"> iv  :  <input class="card-title" type="text" placeholder="Enter Your Quections"></input></p>
                  <input type="button" class="btn btn-primary" id="btn-answer" value="sumbit answer" onclick="add()"></input>
                  </div>
                  </div>`;
        $("#cards").append(tamplate);
    }
});

function add() {
   // array.push(data);
    console.log("function :"+quection)
}
function myFunction(value) {
    quection=value;
    console.log(value)
}
