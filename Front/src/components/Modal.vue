<script>

export default {
    props:{
        users: Array
    }
}
</script>
<template>
    <div class="wraper">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Таблица с данными</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Имя</th>
      <th scope="col">Телефон</th>
      <th scope="col">Действие</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.name }}</td>
        <td>{{ user.phone }}</td>
        <td class="button-action">
            <button type="button" class="btn btn-primary me-2"><img style="max-width: 20px;" src="https://img.icons8.com/ios/50/000000/edit--v1.png"/></button>
            <button type="button" class="btn btn-danger"><img style="max-width: 20px;" src="https://img.icons8.com/ios/50/000000/trash.png"/></button>
        </td>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary">Сохранить</button>
      </div>
    </div>
  </div>
</div>
</div>
    
</template>


<style scoped>

</style>
