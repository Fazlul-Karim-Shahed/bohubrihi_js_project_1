
// Select all ADD TO CART button-
var adds = document.querySelectorAll(".add")

adds.forEach(item => {

    item.addEventListener("click", function(event){

        let prodList = event.target.parentElement

        let cartItem = prodList.querySelectorAll("span")[0].textContent;

        let cartList = document.createElement("li");
        cartList.appendChild(document.createTextNode(cartItem))

        let remove = document.createElement("button");
        remove.innerHTML = " remove "
        cartList.appendChild(remove)
        document.querySelector(".cart_list ol").appendChild(cartList)

        addToLocal(cartItem);
        itemCount()

        document.querySelectorAll(".cart_list button").forEach(item => {

            item.addEventListener("click", function(event){

                var remItem = event.target.parentElement.firstChild.textContent
                
                removeFromLocal(remItem)
                event.target.parentElement.remove()
                itemCount()

            })
            
        })        

    })

})




// Adding item to the local storage-

function addToLocal(item){

    if(localStorage.getItem("itemArray")){
        itemArray = JSON.parse(localStorage.getItem("itemArray"))
    }
    else {
        var itemArray = []
    }

    itemArray.push(item)
    localStorage.setItem("itemArray", JSON.stringify(itemArray))
    itemCount()


}





// Remove item from local storage-

function removeFromLocal(item){

    if(localStorage.getItem("itemArray")){

        itemArray = JSON.parse(localStorage.getItem("itemArray"))

        for(var i=0; i<itemArray.length; i++){

            if(itemArray[i].trim(" ") == item.trim(" "))
            itemArray.splice(i, 1)

        }

        localStorage.setItem("itemArray", JSON.stringify(itemArray))
        itemCount()

    }

}





// Collecting data from local storage when reload the page

document.addEventListener("DOMContentLoaded", function(){

    if(localStorage.getItem("itemArray")){

        itemArray = JSON.parse(localStorage.getItem("itemArray"))

        for(var i=0; i<itemArray.length; i++){

            let cartList = document.createElement("li");

            cartList.appendChild(document.createTextNode(itemArray[i]))

            let remove = document.createElement("button");
            remove.innerHTML = " remove "
            cartList.appendChild(remove)
            document.querySelector(".cart_list ol").appendChild(cartList)




            document.querySelectorAll(".cart_list button").forEach(item => {

                item.addEventListener("click", function(event){

                    var remItem = event.target.parentElement.firstChild.textContent
                    
                    removeFromLocal(remItem)
                    event.target.parentElement.remove()

                })

            })

        }

    }
    itemCount()

})





// Counting number of item in the court

function itemCount(){

    if(localStorage.getItem("itemArray")){
        itemArray = JSON.parse(localStorage.getItem("itemArray"))
        document.getElementById("demo").innerHTML = "Total item : " + itemArray.length
    }
    

}

