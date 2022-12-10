function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputText = document.getElementById('name').value
    Client.checkForName(inputText)
    console.log("::: Form Submitted :::")
    postData('http://localhost:8080/test',inputText);
    
};
    


const postData= async(url,textUrl)=>{
const result = await fetch(url, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({textUrl}),
})  .then(res => res.json())
    .then(function(res) {
    document.getElementById('results').innerHTML = res.message
    }) 
    };
    export {handleSubmit}