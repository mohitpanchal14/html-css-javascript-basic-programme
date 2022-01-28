function swap(){
    var n1 = parseInt(frm.txt1.value);
    var n2 = parseInt(frm.txt2.value);
    var temp;
    document.write("Before Swaping A is "+n1+" B is "+n2);
    document.write("<br>");
    //using third variable
    // temp=n1;
    // n1=n2;
    // n2=temp;

    //Without Third Variable
    n1=n1+n2;
    n2=n1-n2;
    n1=n1-n2;
    document.write("After Swaping A is "+n1+" B is "+n2);
}

function oddeven(){
    var n=frm.txt1.value;
    if (n%2==0) {
        alert(n+" Even Number");
    }
    else{
        alert(n+" Odd Number.");
    }
}

function squreroot(){
    var n1=parseInt(frm.txt1.value);
    //var root,temp=0;
    //root=n1/2;
    //while(root!=temp){
    //    temp=root;
    //    root=(n1/temp+temp)/2;
    //}
    //document.write(root+" Is Squre Root Of "+n1);
    for(var i=0;i<n1;i++){
        if(i*i==n1){
            document.write(i+" Is Squre Root Of "+n1);
        }
    }
}

function checknum(){
    var n1 = frm.txt1.value;

    if (n1>0) {
        alert(n1+" Is Positive Number.");
    }
    else if (n1<0) {
        alert(n1+" IS Negative Number.");
    }
    else{
        alert(n1+" IS Zero Number.");
    }
}
