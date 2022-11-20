import { defineStore } from "pinia"
import { ref } from "vue";

export const useListDataStore = defineStore({
    id: 'liststore',

    state: () => {
        return {
            data: [
                {
                    id: crypto.randomUUID(),
                    numberList: 1,
                    description: "Aprender a programar",
                    todoCompleted:false,

                },
                {
                    id: crypto.randomUUID(),
                    numberList: 2,
                    description: "Entregar el proyecto de mision tic",
                    todoCompleted:false,
                }
            ],
            itemEdit: null,
            activeEdit: ref(false),

        }
    },
    actions: {
        addTodo(todo) {
            if(this.activeEdit){
                this.data.find(item=>{
                    if(item.id == this.itemEdit[0].id){
                        item.description = todo.description;
                    }
                })
               
                this.activeEdit=false;
            }
            else{
                this.data.push(todo);
            }
            
        },
        getTodo(todo) {
            this.itemEdit = this.data.filter(item => {
                return item.id == todo.id;
            });
        },
        deleteTodo(todo) {
            let itemDelete = this.data.filter(item => {
                return item.id !== todo.id;
            });

            this.data = itemDelete;
        },
        completedTodo(todo,check){
            this.data.find(item=>{
                if(item.id == todo.id){
                    item.todoCompleted=check;
                }
            })
            
        }


    }
})