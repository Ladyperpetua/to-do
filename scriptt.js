const myList2 = document.getElementById("app")
const countryList = ["Nigeria", "Germany", "USA", "Ghana", "China",
"South Korea", "North Korea", "Canada", "Russia", "Ukraine"
]''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    function country (country){
    countryList.forEach(country=>{
       const div = document.createElement("div")
       const p = document.createElement("p")
       div.className = "country"
       const pTextNode = document.createTextNode(country)
       p.appendChild(pTextNode)
       div.appendChild(p)

       app.appendChild(div)
    })
}
window.addEventListener("load",function(){
    country()
})
 