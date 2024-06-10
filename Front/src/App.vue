<script>
import Home from './Pages/Home.vue'
import  UserForm from './components/UserForm.vue'
import { mapActions } from 'vuex';
export default {

    methods: {
        ...mapActions(['setFormVisible']),
        SetFormVisible(){
            this.setFormVisible();
        },
    },
	components: {
		Home, UserForm
	},
    
}
</script>
<template>
	<div class="header">
		<header>
			<router-link to="/" class="home">Главная</router-link>
			<router-link to="/about" class="about">Данные</router-link>
			<router-link to="/telephone" class="about">Телефоны</router-link>
            <button @click="SetFormVisible">
            Войти/Зарегистрироваться   
                <img src="./assets/images/user.svg" width="50" alt="">
            </button>
		</header>
        <div class="content-wrapper" :class="{ 'blurred': $store.getters.getFormVisible }">
            <router-view></router-view>
        </div>
        <UserForm v-if="$store.getters.getFormVisible" class="user-form"></UserForm>
	</div>
</template>

<style scoped>
body{
    margin: 0;
    padding: 0;
    overflow: hidden;
}
.content-wrapper {
  position: relative;

}
.blurred {
  filter: blur(3px); 
}
.user-form {
  z-index: 999; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
header {
    background-color: #f0f0f0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

.about, .home {
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    font-size: 25px
}
img {
    position: relative;
    top: 3px;
}
button {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 2px;
    font-size: 23px;
    margin-left: auto; 
    color: white;
    background-color: #1d86b4;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}
button:hover {
    cursor: pointer;
    background-color: #0a3461ae;
}

.home:hover, .about:hover {
    background-color: #8edd34; /* Цвет кнопки при наведении */
    cursor: pointer;
}
</style>
