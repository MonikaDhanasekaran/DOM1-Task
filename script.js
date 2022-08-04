function addRow(){
  var fname=document.getElementById('fname');
  var lname=document.getElementById('lname');
  var add1=document.getElementById('add1');
  var add2=document.getElementById('add2');
  var pin=document.getElementById('pin');
  var gen=document.getElementById('gen');
  var f1=document.getElementById('f1');
  var state=document.getElementById('state');
  var country=document.getElementById('country');

  var table=document.getElementsByTagName('table')[0];
  var newRow=table.insertRow(table.rows.length/2+1);
  
  var cel1=newRow.insertCell(0);
  var cel2=newRow.insertCell(1);
  var cel3=newRow.insertCell(2);
  var cel4=newRow.insertCell(3);
  var cel5=newRow.insertCell(4);
  var cel6=newRow.insertCell(5);
  var cel7=newRow.insertCell(6);
  var cel8=newRow.insertCell(7);
  var cel9=newRow.insertCell(8);

  cel1.innerHTML=fname;
  cel2.innerHTML=lname;
  cel3.innerHTML=add1;
  cel4.innerHTML=add2;
  cel5.innerHTML=pin;
  cel6.innerHTML=gen;
  cel7.innerHTML=f1;
  cel8.innerHTML=state;
  cel9.innerHTML=country;

}