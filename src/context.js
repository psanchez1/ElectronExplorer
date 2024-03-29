    //set up context menu depending on right clicked element
    document.addEventListener('contextmenu', (e) =>{
        rightClickedElement = e.srcElement;
        console.log("addEventListener: ");
        console.log(e.srcElement);
        console.log(e.srcElement.tagName);
        if (e.srcElement.tagName === "IMG"){
            rightClickedElement = getContainer(rightClickedElement);
            remote.getGlobal('contextMenu').popup(remote.getCurrentWindow());
        }
        else{
            rightClickedElement = getContainer(rightClickedElement);
            remote.getGlobal('genCM').popup(remote.getCurrentWindow());
        }
        
    
       });

       //get the container of explorer item
       function getContainer(element){
        //    console.log("getContainer:");
        //     console.log(element);
        //     console.log(element.parentElement);

           if(element.classList.contains('fileContainer'))
           return element;

           if(element.parentElement === null){
               return null;
           }

        if (element.parentElement.classList.contains('fileContainer')){
            return element.parentElement;
        }
        else{
            return getContainer(element.parentElement);
        }
       }