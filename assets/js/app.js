// alert('hello')

// what is object? //
// object >> where we can store multiple information in the form (key,value) pair, which are saperated by comma.

var person ={
	//key: value //
	fname: "shashikant",
	lname: "kadam",
	from :"parbhani",
	dob:26,
	canfly : false,
}

console.log(person,typeof person);
// if we have to check the o/p or key value and it'data type//
var getfname= person.fname;
console.log(getfname,typeof getfname);
var getlname=person.lname;
console.log(getlname,typeof getlname);
var getdob=person.dob;
console.log(getdob, typeof getdob);
var getcanfly = person.canfly;
console.log(getcanfly, typeof getcanfly);

// if we have to add an key and value we can add without going to object by following way //
// objectname.keyname= value  
 person.candrive = "true";
 console.log(person);
 var getcandrive =person.candrive;
 console.log(getcandrive, typeof getcandrive);
 
 //write only(key) = read only(value)
 
 // if we have to delete or remove any key value pair from object we use
 // 'delete objectname.keyname'
 
 delete person.dob;
 console.log(person);
 
 // if we have to change or update the value of key then,
 person.from = "hingoli";
 console.log(person);
 
 var team={
	 tname:"rcb",
	 cname:"faf",
	 players:11,
	 bcoach:"bangar",
	 canrun:true,
	 canbat:true,
	 
 }
 console.log(team);
 var getcname= team.cname;
 console.log(getcname,typeof getcname);
 var getplayers = team.players;
 console.log(getplayers,typeof getplayers);
 // add key value pair //
 team.bowler ="siraj";
 console.log(team);
 // delete or remove key //
 delete team.canrun;
 console.log(team);
 
 team.tname="royal challengers";
 console.log(team);
 
 var car ={
	 cname: "audi",
	 ambesseder:"virat",
	 canrun: true,
	 price: 1000000,
	 speed:100,
	 engine:"diesel",
 }
 console.log(car);
 var getcname = car.cname;
 console.log(getcname, typeof getcname);
 var getprice = car.price;
 console.log(getprice, typeof getprice);
 var getcanrun = car.canrun;
 console.log(getcanrun, typeof getcanrun);
 
 delete car.ambesseder;
 console.log(car);
 
 car.canfly="false";
 console.log(car);
 
	 