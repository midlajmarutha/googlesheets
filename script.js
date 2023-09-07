let inputDate=document.getElementById('input_date');
let inputType = document.getElementById('type');
let inputAmount = document.getElementById('amount');
let inputDescription = document.getElementById('discription')
inputDate.valueAsDate = new Date();


let url = 'https://api.apispreadsheets.com/data/lOZkv5h6dsVhu0ax/';
function handleSubmit(e){
    e.preventDefault()
    let data = {
        Date : inputDate.value,
        Type : inputType.value,
        Amount : inputAmount.value,
        Description : inputDescription.value
    }
    console.log(e.target)
    console.log(data)
    fetch(url,{
        method:'POST',
        body:JSON.stringify(data)
    }).then(res=>{
        if(res.status == 201){
            alert("submitted");
        }else{
            alert('err');
        }
    })
}