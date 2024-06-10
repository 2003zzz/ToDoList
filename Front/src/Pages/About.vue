<script>
import UserForm from '../components/UserForm.vue'

  export default {
    data() {
      return {
        activeTab: 'personalInfo', // По умолчанию отображаем личные данные
      };
    },
    methods: {
      showPersonalInfo() {
        this.activeTab = 'personalInfo';
      },
      showResources() {
        this.activeTab = 'resources';
      },
      
    },
    components: {
        UserForm
    },

  };
  </script>
<template>
  <div class="personal-cabinet">
      <div class="wrapper">
        <div class="sidebar">
          <ul>
            <li @click="showPersonalInfo" :class="{ active: activeTab === 'personalInfo' }">Личные данные</li>
            <li @click="showPersonalInfo" :class="{ active: activeTab === 'resources' }">Ресурсы</li>
          </ul>
        </div>
        <div class="content">
            <div v-for="user in $store.getters.getUser" :key="user.id" class="group-item">
              <h3>{{ user.name }}</h3>
              <p>{{ user.phone }}</p>
            </div>
          </div>
        </div>
    </div>
  </template>
  
  <style scoped>
.personal-cabinet {
  padding: 0 20px;
}

.wrapper {
  display: flex;
}
.sidebar {
  width: 200px;
  padding-right: 20px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar ul li {
  cursor: pointer;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.sidebar ul li:hover {
  background-color: #f0f0f0;
}
.sidebar ul li.active {
  background-color: #ddd;
}
.content {
  flex: 1;
  padding: 20px;
  max-width: 800px;
  margin: 20 auto;
}
.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 20px;
  background: #a6c2d3;
}
.group-item {
  border: 1px solid #d6c8c8;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  transition: background-color 0.3s;
  background: #f4f5f6;
}
.group-item:hover {
  background-color: #e3dddd;
}
</style>