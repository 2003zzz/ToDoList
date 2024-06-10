<script>
export default {
    data() {
	return {
        isVisible: true,
        name: '',
        email: '',
        password: '',
        users:[{
            id: 1,
            name: 'Александр',
            email: 'V5zQs@example.com',
            password: '12345'
        },
        {
            id: 2,
            name: 'sanya',
            email: 'V5zQs@example.com',
            password: '12345'
        },
    ]
	}
},
methods: {
    submitForm(flag) {
        console.log(flag)
        if (flag == 'reg') {
            console.log("Зарегистрирован аккаунт:", {name: this.name, email: this.email, password: this.password})
            this.users.unshift({
                id: this.users.length + 1,
                name: this.name,
                email: this.email,
                password: this.password
            })
        }
        if (flag == 'auto') {  
            this.users.forEach(user => {
                if (user.name == this.name && user.password == this.password) {
                    alert('Вы вошли в аккаунт')
                }
            })
        }
    }
},
computed: {
    Visible()
    {
        this.isVisible=!this.isVisible
    },

}
}
</script>

<template>
	<div class="container">
        <form v-if="isVisible" class="form">
            <div class="input-group">
                <label for="username">Имя пользователя</label>
                <input type="text" v-model="name">
            </div>
            <div class="input-group">
                <label for="email">Электронная почта</label>
                <input type="email" v-model="email">
            </div>
            <div class="input-group">
                <label for="password">Пароль</label>
                <input type="password" v-model="password">
            </div>
            <button  @click.prevent="submitForm('reg')" class="btn">Зарегистрироваться</button>
            <label class="login-link" @click="Visible">У меня уже есть аккаунт</label>
        </form>

        <form v-if="!isVisible" class="form" >
            <div class="input-group">
                <label for="login-username">Имя пользователя</label>
                <input type="text" v-model="name">
            </div>
            <div class="input-group">
                <label for="login-password" >Пароль</label>
                <input type="password" v-model="password">
            </div>
            <button @click.prevent="submitForm('auto')" class="btn">Войти</button>
            <label class="login-link" @click="Visible">У меня нет аккаунта</label>
        </form>
    </div>
</template>


<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

.container {
    display: flex;
    font-size: 22px;
    gap: 20px;
    align-items: center;
    justify-content: center;
}

.form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 350px;
}

.input-group {
    margin-bottom: 15px;
}

.input-group label {
    display: block;
    margin-bottom: 5px;
}

.input-group input {
    width: 100%;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 23px;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}

.btn {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 25px;
}

.btn:hover {
    background-color: #0056b3;
}


.login-link{
    cursor:pointer;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    margin-top: 10px;
} 
.login-link:hover{
    color: #127fd3;
}
</style>