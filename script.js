function search(){
    let {value} = document.getElementById("searchInput")

    const baseUrl = "https://www.google.com/search?q="
    if(!value) value = "google"
    location.replace(baseUrl + value)

}