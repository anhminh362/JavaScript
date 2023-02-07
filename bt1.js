
        // if(confirm("Ban co muon tinh dien tich"))
        // {
        //     var a=prompt("input width:");
        // var b=prompt("input lenghth:");
        // var S=a*b;
        // alert(S);
        // document.write("dien tich "+a+"*"+b+" la "+S)
        // }
        // else if(confirm("Do you want to play?")){
        //     var n=prompt("Enter your name:","");
        //     alert (n+"! now you're part of the game, enjoy!");
        // }


        // var D=new Date();
        // var DateOfBirth= prompt("nhap ngay sinh cua ban");
        // // var MonthOfBirth= prompt("nhap thang sinh cua ban");
        // // var YearOfBirth= prompt("nhap nam sinh cua ban");
        // var Age=D.getFullYear();
        // var days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
        // var curDay=D.getDay();
        // var DayOfBirth=days[curDay];
        // document.write("Nam nay ban "+Age+" tuoi"+"</br>");
        // document.write("Ban duoc sinh vao thu:"+DayOfBirth);

        // var bday;
        // bday = prompt("When is your birthday?");

        // var days = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday']

        // var currentTime = new Date();
        // document.write("test"+currentTime);
        
        // var currentDay = currentTime.getDay();
        // document.write("test2"+currentDay);

        // var currentDayName= days[currentDay];

        // document.write("You were born on "+currentDayName+"</br>");
        // var DayOfBirth=bday.getDay();
        // var DateOfBirthName=days[DayOfBirth];
        
        // document.write("Ban duoc sinh vao thu:"+DayOfBirthName);
        // var curYear=currentTime.getFullYear();
        // var curAge=bday.getDay();
        // document.write("Nam nay ban "+Age+" tuoi"+"</br>");
        function birthday(){
            var D=new Date(prompt("input your birthday"));
            var curDate= new Date();
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday']
            // var DateOfBirth=prompt("input date of birth");
            // var MonthOfBirth=prompt("input month of birth");
            // var YearOfBirth=prompt("input year of birthh");
            var day=D.getDay();
            var dayName=days[day];;
            var SoTuoi=curDate.getFullYear()-D.getFullYear();
            // var SoTuoi= D.getFullYear()-YearOfBirth;
            document.write("Nam nay ban "+SoTuoi+" tuoi"+"</br>");
            document.write("Ban duoc sinh vao thu:"+ dayName);
        }
        function myFunction(){
            var a=parseInt(document.getElementById(demo))
        }
        function Lets_Script(){
            alert("Welcome to our web site");
            document.write("This browser is version"+navigator.appVersion);
            document.write("of <Span class='highlight'>"+navigator.appName+"</span>.");
        }
        function Score(){
            var Score=prompt("input your score");
            if(Score<70){
                alert("medium");
            }
            else if(Score<80){
                alert("Fair");
            }
            
            else if(Score<90){
                alert("Good");
            }
            else{
                alert("Very good");
            }
        }




