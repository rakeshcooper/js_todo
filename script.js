let todoInput = document.querySelector(".todoInput")
let addTodo = document.querySelector(".addTodo")
let dataElement;
let dataArray = [];
let domHTML 
let updatedData;
let updatedDomdata;
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
        let cancelBtn = e.target.classList.contains("cancelBtn")
        let cancelBn = document.querySelectorAll(".cancelBtn")
        let updateBtn = e.target.classList.contains("updateBtn")
        let updateBn = document.querySelectorAll(".updateBtn")
        let updateInput = document.querySelectorAll(".updateInput")
        let nodeL = document.querySelectorAll(".nodeList")
        if(editBtn){
            console.log("edited");
            dataArray.forEach((data, i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === data.rId){
                    console.log(data.todo);   
                    isEdited = true
                    data.isEdited = true  
                    return data  
                }
                
                // console.log(elementrId);
             })
             console.log(isEdited);
             dataArray.forEach((dat,i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === dat.rId){
                    if(dat.isEdited === true){
                        editIp[i].style.display = "block"
                        editBn[i].style.display = "none"
                        console.log(dat.isEdited);
                        updateInput[i].value = dat.todo   
                    } 
                    //  
                    // updateInput[i].addEventListener("input", (e) => {
                    // updatedDomdata = e.target.value
                    // console.log(updatedDomdata);
                    // })
                 
                         
                }
            })
        } else if(cancelBtn){
            console.log("cancel");
            dataArray.forEach((data, index) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === data.rId){
                    console.log(data.todo);    
                    isEdited = !isEdited
                    data.isEdited = false   
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
        } else if(updateBtn){
            console.log("updated");
            dataArray.forEach((data, i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === data.rId){
                    console.log(data.todo);    
                    isEdited = !isEdited
                    // let udata = updatedDomdata
                    let udata = updateInput[i].value
                    data.todo = udata
                    data.isEdited = false
                    return data      
                }
             })

             dataArray.forEach((dat,i) => {
                let elementrId = nodeList.getAttribute("dataRid")
                if(elementrId === dat.rId){
                    // nodeL[i].innerHTML = domHTML
                    // nodeL[i].firstChild.children[1].innerText = dat.todo
                    // console.log(nodeL[i]);
                    if(dat.isEdited === false){
                        console.log(updatedDomdata);
                        editIp[i].style.display = "none"
                        editBn[i].style.display = "block"
                        console.log(dat.isEdited);
                        nodeL[i].innerHTML = `<div class="row"><span>${dat.todo}</span><span class="editInput"><input type="text" name="updateInput" id="updateInput" class="updateInput"><button class="updateBtn">update</button><button class="cancelBtn">cancel</button></span><button class="editBtn">edit</button><button class="delBtn">delete</button><button>done</button></div>`
                           
                    }      
                }
            })
        }
        console.log(dataArray);
    })    
})






