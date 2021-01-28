//login button event handler
const loginBtn= document.getElementById('login');
loginBtn. addEventListener("click", function(){
const loginArea=document.getElementById("login-area");
loginArea.style.display='none';
const transaction=document.getElementById("transaction-area");
transaction.style.display="block";
})
//diposit button event handler
const dipositBtn=document.getElementById("addDiposit");
dipositBtn.addEventListener("click",function(){
   const dipositAmount=document.getElementById("depositAmount").value;
   const dipositNumber=parseFloat(dipositAmount);

   totalDiposit("currentDiposit",dipositNumber);
   updatediposite("currentBlance", dipositNumber);

  document.getElementById("depositAmount").value="";

   

})
//withdrow event
const withdrawBtn=document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount=document.getElementById("withdrawAmount").value;
    const withdrawNumber=parseFloat(withdrawAmount);

    withdrawamount("currentWithdraw",withdrawNumber);
  
    withdrawhistory("currentBlance",withdrawNumber);
    
    document.getElementById("withdrawAmount").value="";
    

})
function totalDiposit(id,dipositNumber){
    const carrentDiposit=document.getElementById(id).innerText;
   const currentDipositnumber=parseFloat(carrentDiposit);
   const totalResult=dipositNumber+currentDipositnumber;
   document.getElementById(id).innerText=totalResult;

}

function updatediposite(id , dipositNumber){
    const carrentBlance=document.getElementById(id).innerText;
    const currentBlanceNumber=parseFloat(carrentBlance);
    const totalBalnce=dipositNumber+currentBlanceNumber;
    document.getElementById(id).innerText=totalBalnce;

}
function withdrawamount(id,withdrawNumber){
    const currentWithdraw=document.getElementById(id).innerText;
       const currentWithdrawNumber=parseFloat(currentWithdraw);
       const totalWithdraw=withdrawNumber+currentWithdrawNumber;
       document.getElementById(id).innerText=totalWithdraw;

}
function withdrawhistory(id ,withdrawNumber){
    const carrentBlancee=document.getElementById(id).innerText;
    const carrentBlanceNumbere=parseFloat(carrentBlancee);
    if (carrentBlanceNumbere>=withdrawNumber){
        const totalBalncee=carrentBlanceNumbere-withdrawNumber;
        document.getElementById(id).innerText=totalBalncee;

    }
}
