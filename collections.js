// sidebar 
var toggle = document.querySelector(".toggle")
var sidebar = document.querySelector(".sidebar")
var sideclose = document.querySelector(".sideclose")
toggle.addEventListener("click", function () {
    sidebar.style.marginLeft = "0px"
})
sideclose.addEventListener("click", function () {
    sidebar.style.marginLeft = "-100%"
})

//search and filter conditions
var searchinput = document.getElementById("searchinput")
var collectioncontainer = document.querySelector(".collections__rightboxes")
var collection = collectioncontainer.querySelectorAll(".collections__rightbox")
var notfound = collectioncontainer.querySelector("h3")
var checkboxes = document.querySelectorAll(".filter-checkbox");


// searchinput.addEventListener("keyup",function () {
//     var searchvalue = searchinput.value.toUpperCase()
//     for (let i = 0; i < collection.length; i++) {
//         var collectionname = collection[i].querySelector("h2").textContent.toUpperCase()
//         if (collectionname.indexOf(searchvalue)<0) {
//             collection[i].style.display="none"
//             notfound.style.display="block"
//         }
//         else{
//             collection[i].style.display="block"
//             notfound.style.display="none"
//         }
//     }
// })

function filterCollections() {
    var searchvalue = searchinput.value.toUpperCase();
    var selectedFilters = {
        occasion: [],
        color: [],
        arrival: []
    };

    // Collect selected filters
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedFilters[checkbox.getAttribute("data-category")].push(checkbox.value.toUpperCase());
        }
    });

    var anyMatch = false;
    for (let i = 0; i < collection.length; i++) {
        var collectionname = collection[i].querySelector("h2").textContent.toUpperCase();
        var occasion = collection[i].getAttribute("data-occasion").toUpperCase();
        var color = collection[i].getAttribute("data-color").toUpperCase();
        var arrival = collection[i].getAttribute("data-arrival").toUpperCase();

        var matchesSearch = collectionname.indexOf(searchvalue) >= 0;
        var matchesFilters = (
            (selectedFilters.occasion.length === 0 || selectedFilters.occasion.includes(occasion)) &&
            (selectedFilters.color.length === 0 || selectedFilters.color.includes(color)) &&
            (selectedFilters.arrival.length === 0 || selectedFilters.arrival.includes(arrival))
        );

        if (matchesSearch && matchesFilters) {
            collection[i].style.display = "block";
            anyMatch = true;
        } else {
            collection[i].style.display = "none";
        }
    }

    notfound.style.display = anyMatch ? "none" : "block";
}

// Attach event listeners for filtering
searchinput.addEventListener("keyup", filterCollections);
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", filterCollections);
});

