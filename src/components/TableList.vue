<script setup>
import { ref } from 'vue';
import { useListDataStore } from '../store/store';
const store = useListDataStore();
const finishTodo = ref(false);



function sendId(id) {
    store.activeEdit = true;
    store.getTodo(id);

}
function sendTodoDelete(todo) {
    store.deleteTodo(todo);
}
function handleChange(e, item) {
    let todoCompleted = e.target.checked;
    store.completedTodo(item, todoCompleted);

}

</script>

<template>
    <div class="table-list">
        <h2 class="my-2">To do</h2>
        <div class="table">
            <div>
                <div class="head-table">
                    <div scope="col">Tasks</div>
                    <div scope="col">Description</div>
                    <div scope="col">Action</div>
                </div>
            </div>
            <div>
                <div class="body-table-item " v-for="item in store.data" :key="item.id">
                    <div scope="row">
                        <input class="check" type="checkbox" @change="(e) => handleChange(e, item)">
                        {{ item.numberList }}
                    </div>
                    <div :class="['item-description', item.todoCompleted ? 'todo-completed' : false]">
                        {{ item.description }}
                    </div>
                    <div class="btn-action">
                        <div>
                            <div @click="sendId(item)">
                                <font-awesome-icon icon="fa-solid fa-pen" />
                            </div>
                            <div @click="sendTodoDelete(item)">
                                <font-awesome-icon icon="fa-solid fa-trash" />
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>

</template>

<style scoped>
.table-list {
    margin-top: 30px;
    
}

.table-list h2 {
    text-align: center;
    color: rgb(180, 190, 199);
}

.table {
    width: 22rem;
    margin: 0 auto;
    background: #383858b7;
    border-radius: 15px;
    padding: 1px;
}

.head-table {
    display: flex;
    justify-content: space-around;
    color: antiquewhite;
    background: #52527cb7;
    border-radius: 15px;
    font-weight: 700;

}

.item-description {
    width: 12rem;
    min-height: 4rem;
    font-weight: 400;

}

.check {
    background-color: green;
    /* color: green; */
}

.body-table-item {
    display: flex;
    justify-content: space-around;
    background: #52527cb7;
    color: rgb(172, 168, 168);
    margin-top: 15px;
    font-size: 1.1rem;
    border-radius: 15px;
}

.body-table-item img {
    width: 30px;
}

.todo-completed {
    text-decoration: line-through;
    color: rgb(176, 89, 89);
}

.btn-action {
    display: flex;
    justify-self: end;
    align-items: center;
    height: 100%;
    width: 5rem;
    color: antiquewhite;
    align-self: center;
}

.btn-action div {
    display: flex;
    width: 100%;
    justify-content: center;

}

.btn-action div:hover {
    opacity: 0.8;
    cursor: pointer;
}

@media (min-width: 750px) {
    .table {
        width: 40rem;
       
    }
    .item-description{
        width: 15rem;
        text-align: center;
    }
    .body-table-item{
        font-size: 1.2rem;
    }
}
</style>