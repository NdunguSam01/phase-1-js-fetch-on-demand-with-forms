const init = () => 
{
    //Getting the form from the HTML page
    const form=document.querySelector("form")

    //Adding an event listener to the form
    form.addEventListener("submit", (event)=>
    {
        //Preventing the page from reloading once form is submitted
        event.preventDefault()

        //Getting the value from the input field
        const input=document.getElementById("searchByID")

        //Fetching data based on the value input by the user
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response=> response.json())
            .then(data=>
                {
                    const title=document.querySelector("section#movieDetails h4")
                    const summary=document.querySelector("section#movieDetails p")

                    title.innerText=data.title
                    summary.innerText=data.summary
                })
    })
}

document.addEventListener('DOMContentLoaded', init);