const residents = document.querySelector("#residents")

function buttonClicked () {
    
    console.log("Button Clicked!")
    axios.get('https://swapi.dev/api/planets/?search=Alderaan').then((res) => { 
        const residents = res.data.results[0].residents 
        console.log(residents)
        residents.forEach(element => {
            axios.get(element).then((res) => {
            const head2 = document.createElement("h2")
            head2.textContent = res.data.name
            console.log(res.data.name)
            const body = document.getElementById("theBody")
            body.appendChild(head2)
        })
    });
})
}


residents.addEventListener('click', buttonClicked)