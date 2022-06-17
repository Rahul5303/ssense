function Resort(n,u,e,m,p){
    this.name=n;
    this.username=u;
    this.email=e;
    this.number=m;
    this.pass=p;

}



function get(e){
    e.preventDefault();

    let form=document.getElementById('places');

    let name=form.name.value;
    let username=form.Username.value;
    let email=form.email.value;
    let number=form.number.value;
    let pass=form.pass.value;

    // console.log(name,username,email,number,pass);

    let p1=new Resort(name,username,email,number,pass);
    console.log('p1:',p1);

    setTimeout(function(){
        alert("Successfully Sign Up");

    },2000)

}