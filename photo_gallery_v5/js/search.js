function search_gallery() { 
    let input = document.getElementById('search').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('gallery')[0].children; 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].dataset.caption.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="grid";                  
        } 
    } 
}