const github=new Github;
const ui=new Ui;

const searchUser=document.getElementById('search-user');


// event lintner to search user

searchUser.addEventListener('keyup',(e)=>{
    const user=e.target.value;

    if(user !==""){
        github.gitUser(user).then(data=>{
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User Not Found', 'alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
            }
        })
    }else{
         ui.profile.innerHTML='';       
    }
})