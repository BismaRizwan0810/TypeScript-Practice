class Employeepractice{
     names:string;
     id:number;

     constructor(names:string,id:number)
     {
        this.names=names;
        this.id=id;
     }
   
}
 //  Object Create 
    let emp2 = new Employeepractice("Bisma",101);
    console.log(emp2.names);
    console.log(emp2.id);
