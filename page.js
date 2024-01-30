let link=document.getElementsByClassName("button");
let currentValue=1;

//display method
 function display(){
    var a=document.getElementsByTagName("button").value;
 //checking condition
    if(a=1){
        var data1=fetch("./page[1].json");
        console.log(data1);

    } else if (a=2) 
    { var data1=fetch("./page[2].json");
    console.log(data1);
        
    } else if (a=3) 
    { var data1=fetch("./page[3].json");
    console.log(data1);
        
    }else if (a=4) 
    { var data1=fetch("./page[4].json");
    console.log(data1);
        
    }else if (a=5) 
    { var data1=fetch("./page[5].json");
    console.log(data1);
        
    } else if (a=6) 
    { var data1=fetch("./page[6].json");
    console.log(data1);
        
    }else if (a=7) 
    { var data1=fetch("./page[7].json");
    console.log(data1);
        
    }else if (a=8) 
    { var data1=fetch("./page[8].json");
    console.log(data1);
        
    }
    else if (a=9) 
    { var data1=fetch("./page[9].json");
    console.log(data1);
        
    }
    else 
    { var data1=fetch("./page[10].json");
    console.log(data1);
        
    }
    //for loop to remove active from previous button to next button
      for(l of link){
        l.classList.remove("active");
    }
    //Target make current button to be active by add method
    event.target.classList.add("active");
    currentValue=event.target.value;
}
//function for previous button

function prevButton(){
    if(currentValue >= 1){
        for(l of link){
            l.classList.remove("active");
        }
        //current value reduced to move index front
        currentValue--;
        link[currentValue-1].classList.add("active");
    }
}
//function for next button
function nextButton(){
    if(currentValue < 10){
        for(l of link){
            l.classList.remove("active");
        }
        //current value increased by 1 to move next
        currentValue++;
        link[currentValue-1].classList.add("active");
    }

}
//function for first button
function firstButton(){
    if(currentValue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add("active");
    }


}



