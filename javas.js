console.log("javascript")
const login1=document.getElementById("login");
const reg=document.getElementById("Register");
const note=document.getElementById("Notes");

if(login1) login1.addEventListener('submit',fun)
if(reg) reg.addEventListener('submit',fun2)
if(note) {
   
    note.addEventListener('submit',fun3);
}
function fun2(e)
{
    e.preventDefault();
    let firstname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    
    
    class User{
        constructor(firstname,lastname,email,password)
        {   
            this.firstname=firstname; 
            this.lastname=lastname;
            this.username=this.username;
            this.password=password;
           
        }
        getusername(){
            return this.username;
        }
        setusername(newusername){
            this.username = newusername;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
        getfirstname(){
            return this.firstname;
        }
        setfirstname(newfirstname){
            this.firstname = newfirstname;
        }
        getlastname(){
            return this.lastname;
        }
        setlastname(newlastname){
            this.lastname=newlastname;
        }
    }
    
    
    const user1=new User(firstname,lastname,username,password);
    console.log(user1);
}

function fun(e)
{
    e.preventDefault()
    
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    class User{
        constructor(username,password)
        {
           
            this.username=username;
            this.password=password;
        }
        getusername(){
            return this.username;
        }
        setusername(newusername){
            this.username = newusername;
        }
        getpassword(){
            return this.password;
        }
        setpassword(newpassword){
            this.password=newpassword
        }
    }
    
    const user1=new User(username,password);
    console.log(user1);
}


function fun3(e)
{
e.preventDefault();
let note=document.getElementById('note').value;

class User{
    constructor(note)
    {
       
        this.note=note;
    }
    getnote(){
        return this.note;
    }
    setnote(newnote){
        this.note = newnote;
    }
    
}
const notes=new User(note);
console.log(notes);
}