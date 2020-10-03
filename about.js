const content = document.getElementById('content');
const humanitarianIssue = [
    {title: 'Shelter', summary: 'The people in Nigeria have no shelter. No place to go or call home. They live in tents, which is not shelter at all. They all of bunch up in tent villages.'},
    {title: 'No clean drinking water', summary: 'Nigerians do not have any clean drinking water. Their water is dark brown and have bugs in it. The people get sick from drinking it.'},
    {title: 'Hunger', summary: 'People in Nigeria are going hungry. They cannot get any food. Kids are suffering from malnourishment.'},
    {title: 'Unable to get medical help', summary: 'Since the people in Nigeria have drinking unclean water, they get waterborne diseases. They cannot get the medical help they need to get better. Leaving alot of the kids near dealth or dying.'}

            
];

let list = "<div>";

for(i = 0; i < humanitarianIssue.length; i++) {
    list += "<h1>" + humanitarianIssue[i].title + "</h1>";
    list += "<p>" + humanitarianIssue[i].summary + "</p>"
};
list += "</div>"

content.innerHTML = list;

// Get input element
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames () {
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get names ul
    let ul = document.getElementById('names');

    // Get lis from ul
    let li = ul.querySelectorAll('li.humanitarian-issue');

    // Loop through humanitarian-issue list
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) >
        -1) {
            li[i].style.display = '';
        } else {
            // Not matched
            li[i].style.display = 'none';
        }
    }    

}
