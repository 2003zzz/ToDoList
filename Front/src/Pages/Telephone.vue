<script>
import { mapActions } from 'vuex';
import  UserForm from '../components/UserForm.vue'
export default {
    data() {
        return {
            name: '',
            phone: '',
            isValue: false,
            id: null,
            IsEdit: false
        }
    },
    methods: {
        ...mapActions(['AddUser','deleteUser','getAllUsers','updateUser']),
        addUser(){
            this.$store.dispatch('AddUser', { name: this.name, phone: this.phone });
            this.name = '';
            this.phone = '';
        },
        getAllUsers() {
            this.$store.dispatch('getAllUsers');
        },
        Remove(id)
        {
           this.$store.dispatch('deleteUser',id);
        },
        StartEdit(phone) {
            this.id = phone.id;
            this.name = phone.name;
            this.phone = phone.phone; 
        },
        ChangeUser() 
        {
            if (this.id !== null)
            {
                this.$store.dispatch('updateUser', { id: this.id, name: this.name, phone: this.phone });                
                console.log("Отправлено:",{id: this.id, name: this.name, phone: this.phone});
                this.id = null;
                this.name = '';
                this.phone = '';
            }
        }, 
        
    },
    computed: {
        IsEdits: function ()
        {
          return this.name.trim() === '' || this.phone.trim() === '';
        }
    },
    mounted() {
        this.getAllUsers();
    },
    components: {
        UserForm
    }
}
</script>

<template>
  <div class="container">
      <h1>Телефонная книга</h1>
      <div class="form-container">
            <input v-model="name" type="text" placeholder="Имя" class="input-name">
            <input v-model="phone" type="text" placeholder="Номер" required maxlength="13" class="input-value">
            <button @click="id ? ChangeUser() : addUser()" :disabled="IsEdits" class="btn-create">
                {{ id ? 'Изменить' : 'Создать' }}
            </button>

        </div>
        <div class="item" v-for="phone in $store.getters.getUser" :key="phone.id">
            <div class="item-info">
                <span class="item-name">{{ phone.name }}</span>
                <span class="item-value">{{ phone.phone }}</span>
            </div>
            <div class="item-buttons">
                <button @click="StartEdit(phone)" class="btn-mark">Изменить</button>
                <button @click="Remove(phone.id)" class="btn-delete">Удалить</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
}


.container {
  width: 100%;
  max-width: 600px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 0px auto;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

.form-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.input-name, .input-value {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-value {
  margin-right: 0;
}

.btn-create {
  padding: 10px 20px;
  background-color: #1ee524;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 5px;
}
.btn-create:hover {
  background-color: #27692a;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

.item-info {
  display: flex;
  flex-direction: column;
}

.item-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.item-buttons button {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

.btn-mark {
  background-color: #007BFF;
  color: white;
}
.btn-mark:hover {
  background-color: #05478f;
}

.btn-delete {
  background-color: #FF4136;
  color: white;
}
.btn-delete:hover {
  background-color: #a30000;
}

/* Адаптивность */
@media (max-width: 600px) {
  .form-container {
      flex-direction: column;
  }

  .input-name, .input-value {
      margin-right: 0;
      margin-bottom: 10px;
  }

  .btn-create {
      width: 100%;
      margin-left: -1px;
  }

  .item-buttons {
      flex-direction: column;
      align-items: flex-start;
  }

  .item-buttons button {
      margin-left: 0;
      margin-top: 10px;
      width: 100%;
  }
}

</style>