<template>
<head>
  <meta charset="UTF-8">
  <title>Nice dark sign in form</title>	
      <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <h1 class="vhod">Вход</h1>
<div id="wrapper">
	<form id="signin" method="" action="" autocomplete="off">
		<a>Логин:</a>
		<input type="text" v-model="this.login" id="user" name="user" />
		<a>Пароль:</a>
		<input type="password" v-model="this.password" id="pass" name="pass" />
		<p>Забыли пароль? <a class="report"ef="#">Обратитесь к системному администратору</a></p>
		<button class="btn-vhod" @click.prevent="this.entrance" type="submit">Войти</button>

	</form>
	<div :style="{ marginTop: '40px'}"></div>
	<div :style="{ marginTop: '50px', color: 'red' }" v-if="errorMessage">{{ errorMessage }}</div>
</div>
</body>
</template>
<script>
import axios from 'axios';

export default {
	name: "Accaunt",
	data () {
		return {
			login: "",
			password: "",
			errorMessage: ''
		}
	},

	methods: {
		entrance () {
			axios.post(`https://api.sos.lectoria.by/auth/api/auth/login`, {login: this.login, password: this.password})
			.then(res => {
				this.$router.push('call');
				
			}).catch(error => {
				if (error.response) {
					//Сервер вернул ответ с кодом ошибки
					this.errorMessage = `Ошибка: ${error.message || 'Неизвестная ошибка'}`;
				} else {
					// Ошибка в настройках запроса
                    this.errorMessage = 'Неправильный логин или пароль';
				}

			})
		}
  }
	}
</script>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css');



*{
	font-family: 'Open Sans', 'sans-serif', 'FontAwesome';
}
body{
   
}
.vhod{
	color: rgba(34, 32, 32, 0.827);
	margin: 20px auto 0;
	width: 200px;
	text-align: center;
	font-size: 40px;
	font-weight: 5px;
	margin-left:auto ;
	margin-right: auto;
	
}
#wrapper{
	position: absolute;
	width: 320px;
	left: 50%;
	margin-left: -160px;
	top: 50%;
	margin-top: -75px;
}

/* === Sign in Form === */
#signin {
	height: 90px;
	width: 300px;
	border-radius: 8px;
	position: relative;
	padding-bottom:30px;
}

#signin  input[type="text"], #signin  input[type="password"], #signin button[type="submit"]{
	background: rgb(15, 13, 13);
	color: rgb(87, 81, 81);
}
#signin  input[type="text"], #signin  input[type="password"]{
	position: relative;
	width: 280px;
	height: 45px;
	border:solid 2px black;
	border-radius: 7px;
	padding: 0 0 0 20px;
	font-weight: 700;
	background-color: #F4F4F4;
	
}
#signin  input[type="text"], #signin  input[type="password"] :hover{
	position: relative;
	width: 280px;
	height: 45px;
	border:solid 2px black;
	border-radius: 7px;
	padding: 0 0 0 20px;
	font-weight: 700;
	background-color: #F4F4F4;	
}


#signin button[type="submit"]{
	border-radius: 7px;
	margin-top: 30px;
	width: 290px;
	height: 40px;
	background-color: #0043CE;
	color: #F4F4F4;
}


#signin p {
	color: rgb(79, 85, 97);
	padding: 0 20px;
	font-weight: 700;
	font-size: 12px;
	margin: 5px 0 0 0;	
}


#signin p > a:hover{
	border-bottom: 1px solid;
}
</style>
