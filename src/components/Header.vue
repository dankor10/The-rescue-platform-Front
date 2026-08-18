<template>
    <header >
<div class="cnt">
        <div class="cont-navig">
            <button id="btn-call" class="call"><a class="clng-header" href="call">Вызовы</a></button>
            <button class="users"><a class="clng-header"  href="users">Пользователи</a></button>
            <button class="statistika"><a class="clng-header"  href="statistika">Статистика</a></button>
            <button class="Account22"><a class="clng-header" href="Account22">Аккаунт</a></button>
        </div>
</div>
</header>
</template>
 
<script>
 export default{

}
</script>
<style>
.clng-header{
  outline: none;
  text-decoration: none; 
  color: #D9D9D9 ;
}

/* a:hover{
    outline: none;
  text-decoration: none; 
  color:  #525252;
} */

.cnt{
    width: 800px;
    height: 50px;
    background-color: #525252;
    margin-left: auto;
    margin-right: auto;
    border-radius: 7px;
}
/* .cont-navig{
    width: inherit;
} */
.call{
    border:solid 2px #525252 ;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color: #D9D9D9;
    
}
.users{
    border:solid 2px  #525252;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color: #D9D9D9;
}
.statistika{
    border:solid 2p #525252 ;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color: #D9D9D9;
}
.Account22{
    border:solid 2px #525252 ;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color:#D9D9D9;
    background-color:#525252;
}

.call:hover{
    border:solid 2px #D9D9D9 ;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color:#525252;
    background-color:#D9D9D9;
}
.users:hover{
    border:solid 2px #D9D9D9 ;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color:#525252;
    background-color:#D9D9D9;
}
.statistika:hover{
    border:solid 2px #D9D9D9 ;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color:#525252;
    background-color:#D9D9D9;
}
.Account22:hover{
    border:solid 2px #D9D9D9 ;
    width: 200px;
    height: 50px;
    border-radius: 7px;
    color:#525252;
    background-color:#D9D9D9;
}
.call:hover a, .Account22:hover a, .statistika:hover a, .users:hover a{
    color:#525252;
}
</style>
