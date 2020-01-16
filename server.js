const express = require ("express");
const bodyparser =require ("body-parser");
const mongoose = require('mongoose');
const Formdata = require('./formdata')

const app =express();
app.use(bodyparser.json());

var url = "mongodb://192.168.1.55:27017/gopal";
//connect to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true,useFindAndModify: false });



var dat,date,Hours,hrs,temp1,tmp,machine;
 var emp;

 
 you("12-28-1993","10-28-2003",00,23,00,59,15,50,0,9)
function you(date1, date2,startHour, endHour,minminites,maxminites,mintemp,maxtemp,mintempper,maxtempper){
    // you("12-01-2020","10-28-1993",00,23,00,59,15,50,0,9)
    for (let index = 0; index < 40; index++) {
        randomDate(date1, date2)
        randomDatehourminites( startHour, endHour,minminites,maxminites)
        temprature(mintemp,maxtemp,mintempper,maxtempper) 
        emp=new Formdata({
            machine : 1234,
            date : dat,
            hrs : Hours,
            tmp : temp1
        });
        //console.log("emp  : " + emp.machine+" "+emp.date + " " + emp.hrs + " " +emp.tmp);
        //console.log(emp);
        emp.save(function(err) {
            if (err) throw err;
            else 
            console.log('save user successfully...');
        });
    }
}
function temprature(mintemp,maxtemp,mintempper,maxtempper){
	var temp = mintemp + Math.random() * (maxtemp - mintemp) | 0;
	var tempdeg = mintempper + Math.random() * (maxtempper - mintempper) | 0;
	var FullTemp = (temp+"."+tempdeg) 
	var parseFullTemp = parseFloat(FullTemp);
    temp1 = parseFullTemp ;
	//console.log(FullTemp);  	
}
function randomDatehourminites(startHour, endHour,minminites,maxminites){
	var hour = startHour + Math.random() * (endHour - startHour) | 0;
	var minites = minminites + Math.random() * (maxminites-minminites)| 0;
	var HM = (hour+"."+minites) 
	var parseHM = parseFloat(HM);
    Hours = parseHM;
	//console.log(parseHM);  
	//console.log(typeof(parseHM));  
}
function randomDate(date1, date2){
    function randomValueBetween(min, max) {return Math.random() * (max - min) + min;}
    var date1 = date1 
    var date2 = date2 
    date1 = new Date(date1).getTime()
    date2 = new Date(date2).getTime()
	function fure(date1,date2){
    if( date1>date2){
        return new Date(randomValueBetween(date2,date1)).toLocaleDateString() }
        else{return new Date(randomValueBetween(date1, date2)).toLocaleDateString()  }
	}
    //console.log("fure(date1,date2) : "+ fure(date1,date2));
	dat = fure(date1,date2);
}

app.post("/api",you,function(req,res){
    you("12-01-2020","10-28-1993",00,23,00,59,15,50,0,9);
})

app.listen(3003,(err)=> {
    if(!err){ console.log("running succesfully..")}
    else { console.log("issue in running server")}
})