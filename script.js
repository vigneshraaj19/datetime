

var dateelement=document.createElement('input');
dateelement.setAttribute('type','date');
dateelement.setAttribute('id','date');
document.body.append(dateelement);

var button=document.createElement('button');
button.innerHTML="Display data";
button.className="btn btn-primary";
button.setAttribute('type','button');
button.addEventListener('click',displaydata);
document.body.append(button);


function displaydata(){
    let input=document.getElementById("date").value;
   if(Date.parse(input))
   {
    var inputdate=new Date(input);
    var currentdate=new Date();
    // console.log(inputdate,currentdate);
    var millisecdiff=currentdate.getTime()-inputdate.getTime();
    let divi=document.createElement('div');
    divi.innerHTML=millisecdiff;
    document.body.append(divi);

    var seconddiff=Math.floor(millisecdiff/1000);
    let divi1=document.createElement('div');
    divi1.innerHTML=seconddiff;
    document.body.append(divi1);
    
    var minutediff=Math.floor(seconddiff/60);
    let divi2=document.createElement('div');
    divi2.innerHTML=minutediff;
    document.body.append(divi2);

    var hoursdiff=Math.floor(minutediff/60);
    let divi3=document.createElement('div');
    divi3.innerHTML=hoursdiff;
    document.body.append(divi3);
    

    var daydiff=Math.floor(hoursdiff/24);
    let divi4=document.createElement('div');
    divi4.innerHTML=daydiff;
    document.body.append(divi4);

    var yeardiff=currentdate.getFullYear()-inputdate.getFullYear();
    let divi5=document.createElement('div');
    divi5.innerHTML=yeardiff;
    document.body.append(divi5);

    let divi8=document.createElement('div');
    divi8.innerHTML=currentdate.getMonth();
    document.body.append(divi8);
    
    var monthdiff=(yeardiff*12)+(currentdate.getMonth()-inputdate.getMonth());
    let divi6=document.createElement('div');
    divi6.innerHTML=monthdiff;
    document.body.append(divi6);

   }
   else{
    let divi7=document.createElement('div');
    divi7.innerHTML="give a proper valid date";
    document.body.append(divi7);
     
   }

}