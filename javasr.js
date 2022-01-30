shownote()
let addbtn=document.getElementById('addnote')
addbtn.addEventListener('click',function fun1()
{
    let tit=document.getElementById('exampleInputEmail1').value
    // let des=document.getElementById('exampleInputPassword1').value
    let notes=localStorage.getItem('notes')
     if(notes == null){
         array=[];
     }
     else{
         array = JSON.parse(notes);
     }
     array.push(tit);
     localStorage.setItem('notes',JSON.stringify(array));
    document.getElementById('exampleInputEmail1').value="";
    // document.getElementById('exampleInputPassword1').value="";
    shownote();
       
}
)
  function shownote(){
    let notes=localStorage.getItem('notes')
    if(notes == null){
        array=[];
    }
    else{
        array = JSON.parse(notes);

    }
    let html="";
    array.forEach(function (element,index,arr) {

        html+=
        `
        <tr id=${index}>
                <th scope="row">${index+1}</th>
               
                <td>${element}</td>
                
                <td><button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button></td>
               
              </tr>
        `;
        // console.log(element,arr[index+1]);
    });
    let tb= document.getElementById('tb');
    if (array.length != 0){
        tb.innerHTML = html;
    }
    else{
        tb.innerHTML=` <tr>
        <th scope="row">nothing</th>
        <td>na</td>
        <td>na</td>
      </tr>`
    }
  
  }
//   function Edit(index){
//       console.log('i am editing');
//   }
  function deleteNote(index){
    //   alert('are you sure?');
    let notes=localStorage.getItem('notes')
    if(notes == null){
        array=[];
    }
    else{
        array = JSON.parse(notes);
    }
    array.splice(index,1);//from index remove one items
    localStorage.setItem('notes',JSON.stringify(array));
    shownote()
  }
function fun3(){
    confirm('Deleted item cannot be recovered.');
    localStorage.clear();
    location.reload();
}
// json parse returns array
// json stringify returns string
  
  
  
  
      // method to add new li with out local localStorage

//  
//    var newli= document.createElement('li');
//     newli.classList.add('list')
//     newli.innerHTML = '<li class="lsit"><h5> ${tit} ${des} </h5></li><input type="button" onclick=fun2() value="delete">';
//     let parentlist= document.getElementById('parent');
//     parentlist.appendChild(newli);
// }
    // console.log(tit,des);
    // array=[];
    // array.push([tit,des]);
    // let myjson=JSON.stringify(array);
    // if (localStorage.getItem('mynewjson')==null){
    // localStorage.setItem("mynewjson",myjson);
    // }
    // else{

    // }
    // let tb=document.getElementById('tb');
// function fun2(){
//    document.getElementsByClassName('list').removeitem
// }
//     let str = "";
//     array.forEach((element, index) => {
        // let ele= document.createElement('tr');
        // ele.id='tr${1}';
//         str += `
//         <tr>
//         <th scope="row">${index + 1}</th>
//         <td>${element[0]}</td>
//         <td>${element[1]}</td> 
//         <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
//         </tr>`; 
//     });
//     tb.innerHTML = str;
// }


//     if (localStorage.getItem('mynewjson')==null){
//         array = [];
//         array.push([tit, des]);
//         localStorage.setItem('mynewjson', JSON.stringify(array))
//     }
//     else{
//         arrayStr = localStorage.getItem('mynewjson')
//         array = JSON.parse(arrayStr);
//         array.push([tit, des]);
//         localStorage.setItem('mynewjson', JSON.stringify(array))
//     }
// update();
// }
// function update(){
//     if (localStorage.getItem('mynewjson')==null){
//         array = []; 
//         localStorage.setItem('mynewjson', JSON.stringify(array))
//     } 
//     else{
//         arrayStr = localStorage.getItem('mynewjson')
//         array = JSON.parse(arrayStr); 
//     }

