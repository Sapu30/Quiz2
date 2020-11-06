function check(){
    var c=0;
    var q1=document.quiz.que1.value;
    var q2=document.quiz.que2.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    result.setAttribute('style','white-space: pre;');
    if(q1=="P=E/t") {c++}
    if(q2=="Joule") {c++}
    quiz.style.display="none";
    result.textContent="RESULT:\r\n\r\n"; 
    result.textContent+="You scored ";
    result.textContent+=c;
    result.textContent+="/2\r\n";
    result.textContent+="Congratulations!";
       
}