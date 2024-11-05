let todoInput = document.querySelector(".todoInput")
let addTodo = document.querySelector(".addTodo")
let dataElement;
let dataArray = [];
let domHTML 
let updatedData;
let lcon = document.querySelector(".listcon")
let nodeList = document.querySelectorAll(".nodeList")
let isEdited = false
// elementControl()

todoInput.addEventListener("input", (e) => {
    console.log(e.target.value);
    dataElement =  e.target.value
    domHTML = `<div class="row"><span>${dataElement}</span><span class="editInput"><input type="text" name="updateInput" id="updateInput" class="updateInput"><button class="updateBtn">update</button><button class="cancelBtn">cancel</button></span><button class="editBtn">edit</button><button class="delBtn">delete</button><button>done</button></div>` 
})

addTodo.addEventListener("click", () => {
    let rId = crypto.randomUUID()
    dataArray.unshift({todo: dataElement, rId: rId, isEdited: false, isChecked: false})
    console.log(dataArray);
    let newElement = document.createElement("li")
    newElement.classList.add("nodeList")
    newElement.innerHTML = domHTML
    newElement.setAttribute("dataRid", rId)
    newElement.firstChild.children[1].value = dataElement
    lcon.prepend(newElement)
    todoInput.value = ""
    let nodeList = document.querySelector(".nodeList")
    nodeList.addEventListener("click",(e) => {
        
        let editBtn = e.target.classList.contains("editBtn")
        let editBn = document.querySelectorAll(".editBtn")
        let editIp = document.querySelectorAll(".editInput")
        let updateIp = document.querySelectorAll(".updateInput")
        let cancelBtn = e.target.classList.contains("cancelBtn")
        let cancelBn = document.querySelectorAll(".cancelBtn")
        let updateBtn = e.target.classList.contains("updateBtn")
        let updateBn = document.querySelectorAll(".updateBtn")
        let updateInput = document.querySelectorAll(".updateInput")
        if(editBtn){
            console.log("edited");
            dataArray.forEach((data, i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === data.rId){
                    console.log(data.todo);  
                    updateInput[i].addEventListener("input", (e) => {
                        let updatedDom = e.target.value
                        console.log(updatedDom);
                        
                    })  
                    isEdited = !isEdited
                    return data.isEdited = !data.isEdited      
                }
                
                // console.log(elementrId);
             })
             console.log(isEdited);
             dataArray.forEach((dat,i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === dat.rId){
                    if(dat.isEdited === true){
                        updateIp[i].value = dat.todo
                        editIp[i].style.display = "block"
                        editBn[i].style.display = "none"
                        console.log(dat.isEdited);   
                    }      
                }
            })
        } else if(cancelBtn){
            console.log("cancel");
            dataArray.forEach((data, index) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === data.rId){
                    console.log(data.todo);    
                    isEdited = !isEdited
                    return data.isEdited = !data.isEdited      
                }
             })

             dataArray.forEach((dat,i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === dat.rId){
                    if(dat.isEdited === false){
                        editIp[i].style.display = "none"
                        editBn[i].style.display = "block"
                        console.log(dat.isEdited);   
                    }      
                }
            })
        } else if(updateBtn){
            console.log("updated");
            dataArray.forEach((data, i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === data.rId){
                    console.log(data.todo);    
                    isEdited = !isEdited
                    data.isEdited = !data.isEdited
                    return data      
                }
             })

             dataArray.forEach((dat,i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === dat.rId){
                    if(dat.isEdited === false){
                        editIp[i].style.display = "none"
                        editBn[i].style.display = "block"
                        console.log(dat.isEdited);   
                    }      
                }
            })
        }
        console.log(dataArray);
    })    
})

// elementControl()


// function elementControl(currentIndex){
//     lcon.addEventListener("click",(e) => {
//         let nodeList = document.querySelectorAll(".nodeList")
//         let editBtn = e.target.classList.contains("editBtn")
//         let editBn = document.querySelectorAll(".editBtn")
//         currentIndex + 1
//         if(editBtn){
//             console.log("edited");
//             nodeList.forEach((element, index) => {
//                 let elementrId = element.getAttribute("dataRid")
//                 if(elementrId === dataArray[index].rId){
//                     // console.log(dataArray[index].rId);
//                     // console.log(elementrId);
//                   editBn[index].style.color = "red";      
//                 }
//                 // console.log(elementrId);
//              })
//         }
//     })
// }





