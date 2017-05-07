var number = Math.floor(Math.random()*9);
var passwords = new Array(10);
passwords[0] = "The rest is silence";
passwords[1] = "Better late than never";
passwords[2] = "Love is blind";
passwords[3] = "Where there is a will there is a way";
passwords[4] = "The future starts today not tomorrow";
passwords[5] = "Nobody is good by accident";
passwords[6] = "Each day is drive through history";
passwords[7] = "Assassination is the extreme form of censorship";
passwords[8] = "Some things will never change";
passwords[9] = "We mortals are but shadows and dust";
var password = passwords[number];
password = password.toUpperCase(); 
var password1 = "";
var leng = password.length;
var errors = 0;
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for (i=0;i<leng;i++)
    {
        if(password.charAt(i)==" ") password1 = password1 + " ";
        else
            password1 = password1 + "-";
    }
function display_password()
{
    document.getElementById("board").innerHTML = password1;
}

window.onload = start; 

var letters = new Array(26);

letters[0] = "A";
letters[1] = "B";
letters[2] = "C";
letters[3] = "D";
letters[4] = "E";
letters[5] = "F";
letters[6] = "G";
letters[7] = "H";
letters[8] = "I";
letters[9] = "J";
letters[10] = "K";
letters[11] = "L";
letters[12] = "M";
letters[13] = "N";
letters[14] = "O";
letters[15] = "P";
letters[16] = "Q";
letters[17] = "R";
letters[18] = "S";
letters[19] = "T";
letters[20] = "U";
letters[21] = "V";
letters[22] = "W";
letters[23] = "X";
letters[24] = "Y";
letters[25] = "Z";

function start()
{
    var content_div = "";
    for(i=0;i<26;i++)
        {
            var element = "let" + i;
            content_div = content_div + '<div class="letter" onclick="check('+i+')"id="'+element+'">' + letters[i] + '</div>';
            if((i+1) % 7 == 0) content_div = content_div + '<div style="clear:both"></div>';
        }
    document.getElementById("alphabet").innerHTML = content_div;
    
    
    
    display_password();
}

String.prototype.ssign = function(place, sign)
{
    if(place>this.length - 1) return this.toString();
    else
        return this.substr(0, place) + sign + this.substr(place+1);
}

function check(nr)
{
    var guessed = false;
    
    for(i=0;i<leng;i++)
        {     
          if(password.charAt(i) == letters[nr]) 
              {
                  password1 = password1.ssign(i, letters[nr]);
                  guessed = true;
              }
        }
    
     display_password();
    
    if(guessed == true)
        {
            yes.play();
            var element = "let" + nr;
            document.getElementById(element).style.background = "#003300";
            document.getElementById(element).style.color = "#00C000";
            document.getElementById(element).style.border = "3px solid #00C000";
            document.getElementById(element).style.cursor = "default";
            
            display_password();
        }
    else
        {
            no.play();
            var element = "let" + nr;
            document.getElementById(element).style.background = "#330000";
            document.getElementById(element).style.color = "#C00000";
            document.getElementById(element).style.border = "3px solid #C0000";
            document.getElementById(element).style.cursor = "default";
            document.getElementById(element).setAttribute("onclick",";");
            errors++;
            var display = "img/s"+ errors + ".jpg";
            document.getElementById("hangman").innerHTML = '<img src="'+display+'" alt="#" />';
        }
    
    if(password == password1)
        {
            document.getElementById("alphabet").innerHTML = " You've been able to guess the password: " +password+'<br/><br/><span class="reset" onclick="location.reload()">Again?</span>';
        }

    if(errors>=9)
        {
            document.getElementById("alphabet").innerHTML = 'Game over! <br/>Unfortunately, you have not been able to guess the password.<br/><br/><span class="reset" onclick="location.reload()">Again?</span>';
        }
    
}