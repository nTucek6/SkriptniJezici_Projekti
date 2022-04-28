var i = 0;

function GetInfo()
{
    var predmet =document.getElementById("predmet").value;
    var godina = document.getElementById("godina").value;
    var ects = document.getElementById("ects").value;


   
   var table = document.getElementById("addInfo");
   table.innerHTML +="<tr><td>"+predmet+"</td><td>"+godina+"</td><td>"+ects+"</td><td onclick='DeleteRowFunction()'><button>D</button></td><td><input onclick='CheckCheckBox()' type='checkbox'></td><tr>";
}


function DeleteRowFunction() {
    // event.target will be the input element.
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    tr.parentNode.removeChild(tr);
}


//var checkbox = document.querySelector("input[name=checkbox]");


function CheckCheckBox()
{
    var checkbox = event.target.checked; 
    var td = event.target.parentNode; 
    var tr = td.parentNode; // the row to be removed
    if(checkbox == true)
    {
    tr.style.backgroundColor  = "Red";
    }
    else
    {
        tr.style.backgroundColor  = "transparent";
    }
}

function Search()
{
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("SearchValue");
        filter = input.value.toUpperCase();
        table = document.getElementById("addInfo");
        tr = table.getElementsByTagName("tr");
      
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      
}
