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

   const carrentDiposit=document.getElementById("currentDiposit").innerText;
   const currentDipositnumber=parseFloat(carrentDiposit);
   const totalResult=dipositNumber+currentDipositnumber;
   document.getElementById("currentDiposit").innerText=totalResult;

    const carrentBlance=document.getElementById("currentBlance").innerText;
    const currentBlanceNumber=parseFloat(carrentBlance);
    const totalBalnce=dipositNumber+currentBlanceNumber;
    document.getElementById("currentBlance").innerText=totalBalnce;

   document.getElementById("depositAmount").value="";

   

})
//withdrow event
const withdrawBtn=document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click",function(){
    const withdrawAmount=document.getElementById("withdrawAmount").value;
    const withdrawNumber=parseFloat(withdrawAmount);
    
    const currentWithdraw=document.getElementById("currentWithdraw").innerText;
    const currentWithdrawNumber=parseFloat(currentWithdraw);
    const totalWithdraw=withdrawNumber+currentWithdrawNumber;
    document.getElementById("currentWithdraw").innerText=totalWithdraw;


    const carrentBlancee=document.getElementById("currentBlance").innerText;
    const currentBlanceNumbere=parseFloat(carrentBlancee);
    const totalBalncee=currentBlanceNumbere-withdrawNumber;
    document.getElementById("currentBlance").innerText=totalBalncee;
    document.getElementById("withdrawAmount").value="";
    

})