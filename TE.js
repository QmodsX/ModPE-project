Tap and Explode
=============
//by QmodsX and its my first project on Github

var Explo = [0,3,5,7,10];
var rnd = Math.floor(Math.random()*(Explo.length));

function useItem(x,y,z,i,b,s)
{
   if(b==49)//if the tapped block is 49/obsidian
   {
   if(i==280)//if its apped with stick
   {
       Level.explode(x,y,z,Explo[rnd]);//it will explode with random radius
       }
     }
   }
