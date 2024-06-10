<script>
import UserForm from "../components/UserForm.vue"
import Modal from "../components/Modal.vue"
import Sidebar from "../components/Sidebar.vue"



export default {
  data() {
    return {
      UserList:[{
        id: 1,
        name: 'Alex',
        phone: 89923052112
      },
      {
        id: 2,
        name: 'Vasya',
        phone: 89923765212
      },
      {
        id: 3,
        name: 'Den',
        phone: 89623052311
      },
      {
        id: 4,
        name: 'Den',
        phone: 89623052311
      },
      {
        id: 5,
        name: 'Den',
        phone: 89623052311
      }
    ]
    }
  },
    components: {
        UserForm,
        Modal,
        Sidebar
    },
    methods: {
    },
}
</script>
<template>
  <div class="wraper">
    <Sidebar></Sidebar>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Открыть окно с данными
  </button>
    <modal
    :users="UserList">
    </modal>
  </div>
</template>


<style scoped>

.wraper{
  display:grid;
  justify-content: center;
  align-items: center;
  gap: 4vh;
  margin-bottom: 2vh;
}
</style>