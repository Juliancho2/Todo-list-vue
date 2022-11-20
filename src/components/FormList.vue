<script setup>
import { ref, watch } from 'vue';
import { useListDataStore } from '../store/store';

const store = useListDataStore();
const todo = ref('');



watch(store, () => {
    if (store.itemEdit !== null) {
        todo.value = store.itemEdit[0].description;
    }
    if (!store.activeEdit) todo.value = "";
});

function sendTodo() {


    if (todo.value.length > 1 && todo.value.length < 50) {

        const number = store.data.length + 1;
        const newTodo = {
            id: crypto.randomUUID(),
            numberList: number,
            description: todo.value,
            todoCompleted: false,
        }
        store.addTodo(newTodo);

    };

}

</script>

<template>
    
    <div class="form-list">
        <form action="" @submit.prevent="sendTodo">

            <!-- <label class="title-form" for="">Tarea</label> -->
            <div class="icon-calendar">
                <font-awesome-icon  icon="fa-solid fa-calendar-days" />
            </div>
            <div class="input-container">
                <input type="text" name="tarea" id="" v-model="todo" placeholder="Add task" />
                <button type="submit" class="btn ">
                    <font-awesome-icon icon="fa-solid fa-paper-plane" />
                </button>
            </div>

        </form>
    </div>

</template>

<style scoped>
form{
    display: flex;

}
.form-list{
  margin-top: 50px;
}
.icon-calendar{
    display: flex;
    align-items: center;
    font-size: 2rem;
    margin-right: 1rem;
    color: #3776AB;
}
.title-form {
    color: aliceblue;
    font-size: 1.5rem;
}

.input-container input {
    outline: none;
    background: transparent;
    border: none;
    width: 80%;
    color: aliceblue;
}

.input-container input::placeholder {
    color: rgb(175, 170, 163);
}

.input-container {
    background: #27264D;
    width: 18rem;
    padding: 8px;
    border-radius: 30px;
}

.btn {
    color: aliceblue;
    background: #3776AB;
    width: 3rem;
    border-radius: 50%;
    font-size: 1rem;

}
.btn:hover{
    opacity: 0.8;
}
</style>