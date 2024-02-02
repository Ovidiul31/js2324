
var nrProduse = 0;
function addProduct(){
    let product = document.getElementById('product').ariaValueMax;
    if(!product)
    return;
const text="<li class='product'>" + product + "<span id='" +nrProduse+ "'>Sterge</span></li>"
document.getElementById('list').insertAdjacentHTML('before', text)
document.getElementById('product').value='';
nrProduse = nrProduse+1;
if(typeof(Storage)!=="undefined"){
    //Store
    localStorage.setItem(nrProduse, text);
    localStorage.setItem('numarProduse', nrProduse);
    
    }
}
document.getElementById('add').addEventListener('click', addProduct);

//PAS 2 selectam/ deselectam produsele