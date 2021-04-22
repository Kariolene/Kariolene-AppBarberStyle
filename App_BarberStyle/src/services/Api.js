const BASE_API='https://607a5bfdbd56a60017ba29de.mockapi.io/api';


export default {

    
//........................................................
/*Cadastrar autenticação */

    signIn: async (email,password) => {
    
            var link = '/appBarberStyle/signIn/';
            var link2 = BASE_API+link;

            const req = await fetch(`${link2}`,{
                method: 'POST',
                headers: {
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,password}) });

                const json = await req.json();
                return json;

    },

    
//........................................................
//Cadastrar usuário

    signUp: async (email,name,password) => {

        var link = '/appBarberStyle/user/';
            var link2 = BASE_API+link;
        
            const req = await fetch(`${link2}`,{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email,name,password})});
                const json = await req.json();
                return json;
            
        },

        
//........................................................
//Obter usuário

    getUser: async(userID)=>{

        var link = '/appBarberStyle/signIn/'+userID;
        var link2 = BASE_API+link;
    
         const req = await fetch(`${link2}`,{
               method: 'GET',
               headers: {
                   Accept:'application/json',
                   'Content-Type': 'application/json'
               },
               //body: JSON.stringify({email,password})
         });
            const json = await req.json();
            return json;
    },

    
//........................................................
//Atualizar usuário
    setUser: async(userID,email,name,password)=>{

        var link = '/appBarberStyle/user/'+userID;
        var link2 = BASE_API+link;
    
         const req = await fetch(`${link2}`,{
               method: 'PUT',
               headers: {
                   Accept:'application/json',
                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({email,name,password})
         });
            const json = await req.json();
            return json;
    },


//........................................................
//Atualizar cadastro

    signUpAtualize: async (userID,email,name,password) => {
        alert(userID);
        var link = '/appBarberStyle/user/'+userID;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'PUT',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,name,password})});

         const json = await req.json();
         return json;

    },


//........................................................
//Atualizar autenticação

    signInAtualize: async (userID,email,password) => {

        
        var link = '/appBarberStyle/signIn/'+userID;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'PUT',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})});

         const json = await req.json();
         return json;

    },


//........................................................
//Deletar autenticação de usuario
    signInDelete: async (id) => {

        var link = '/appBarberStyle/signIn/'+id;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'DELETE',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
        });

         const json = await req.json();
         return json;

    },

//........................................................
//Deletar cadastro de usuario
    signUpDelete: async (id) => {

        var link = '/appBarberStyle/user/'+id;
        var link2 = BASE_API+link;

        const req = await fetch(`${link2}`,{
            method: 'DELETE',
            headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
            },
        });

         const json = await req.json();
         return json;
    }

//........................................................


};