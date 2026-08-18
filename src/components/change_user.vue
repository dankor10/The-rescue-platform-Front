<template>
    <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Аккаунт</title>
           <link rel="stylesheet" href="style.css">
       </head>
       <body>
           
        <router-view></router-view>

      
           <main>
              
            <div class="all"> 
               <form action="/users">  
               <button type="submit" class="btn-canc"><a class="otmena">Отмена</a></button>
           </form>
   
           <div class="account-form"> 
               <div class="heads">
                   <p class="aded-user">Пригласить нового пользователя </p>  
               </div>
                                                                                                                             
           <form>      
                       <input type="email" id="email" name="email" placeholder="Почта">
                       <input type="text" id="name" name="name" placeholder="Имя">
                       <input type="text" id="surname" name="surname" placeholder="Фамилия">
                       <input type="text" id="patronymic" name="patronymic" placeholder="Отчество">
                       <input type="tel" id="phone" name="phone" placeholder="Телефон">
                       <input type="text" id="position" name="position" placeholder="роль">
               
                   <button class="change" type="submit">Зарегистрировать</button>
               </form>   
           </div>
       </div>
           </main>         
       
       </body>
   </template>
   
   <script>
   
   </script>
   
   <style>
   .otmena{
       color: #f4f4f4;
   }
   .btn-canc{
       width: 70px;
       height: 30px;
       border:solid 2px black;
       margin-left: 350px;
       background-color: #C93B3D;
       border-radius:  5px;
       position: absolute;
        
       
       
   }
   .aded-user{
       text-align: center;
       font-size: 20px;
       margin-left: 40px;
   }
   .heads{
       margin-top: 75px;
       font-size: 30px;
       text-align: center;
       margin-right: 50px;
       color:#757575 ;
       
   
   
   }
   .user-reg{
       border:solid 2px black;
       width: 1200px;
       height: 550px;
       margin-left: 200px;
   }  
   
   body { 
       font-family: Arial, sans-serif; 
       background-color: #f4f4f4; 
       margin: 0; 
       overflow: hidden; 
       background-size: cover; 
       background-image: url(background-image.svg); 
       font-family: "Poiret One", sans-serif;
         
     } 
   </style>
   