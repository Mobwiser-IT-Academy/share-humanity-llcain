const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav

    burger.addEventListener('click', () => {

        // Toggle Nav

        nav.classList.toggle('nav-active');

        //Animation Links

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        });

        // Burger Animation

        burger.classList.toggle('toggle');
    });

}

navSlide();


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




