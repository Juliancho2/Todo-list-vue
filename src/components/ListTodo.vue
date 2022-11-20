<template>
    <div class="list-todo">
        <div class="completed">
            <h2>Task completed:</h2>
            <div class="completed-item">
                <span> {{ counTodoCompleted }} </span>
            </div>
        </div>
        <div class="no-completed mt-3">
            <h2>Task not completed:</h2>
            <div class="completed-no-item">
                <span>{{ counTodoNoCompleted }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useListDataStore } from '../store/store';
import { onMounted, ref, watch } from 'vue';
const counTodoCompleted = ref(0);
const counTodoNoCompleted = ref(0);

const store = useListDataStore();
onMounted(() => {
    counTodoNoCompleted.value = store.data.length;
})


watch(store, (value) => {
    counTodoNoCompleted.value = store.data.length;

    const itemFilterCompleted = store.data.filter(item => {
        return item.todoCompleted ? item : false
    });
    const itemFilterNoCompleted = store.data.filter(item => {
        return !item.todoCompleted ? item : false
    });
    counTodoCompleted.value = itemFilterCompleted.length;
    counTodoNoCompleted.value = itemFilterNoCompleted.length;


});



</script>
<style scoped>
.list-todo {
    margin-top: 50px;
    width: 20rem;
    font-weight: 200;
    background:#383858b7;
    border-radius: 15px;
}


.completed,
.no-completed {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #52527cb7;
    border-radius: 20px;
    width: 100%;
    padding: 10px;
    color: aliceblue;
}


.list-todo h2 {
    font-size: 1.1rem;
    color: rgb(182, 181, 181);

}
.completed span {
    display: inline-block;
    padding: 4px;
    background: rgb(12, 128, 12);
    border-radius: 50%;
    color: aliceblue;
    width: 2rem;
    height: 2rem;
    text-align: center;
}

.no-completed span {
    display: inline-block;
    padding: 4px;
    background: rgb(140, 20, 20);
    border-radius: 50%;
    color: aliceblue;
    width: 2rem;
    height: 2rem;
    text-align: center;
}

@media (min-width: 750px){
    .list-todo{
        width: 40rem;
    }
    .list-todo h2{
        font-size: 1.2rem;
    }
}
</style>
