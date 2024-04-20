import axios from 'axios';

// Todo item specification
interface TodoItem {
    id: string
    assignee: string
    dueDateTime: string
    description: string
}

export const useTodoStore = defineStore("todoStore", {
  state: () => {
    return {
      todoItems: [] as TodoItem[]
    }
  },

  actions: {
    async addItem(){
      const config = useRuntimeConfig();   
      // API request for new todo item
      await await axios.get('https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/nulmeting/todo',{
        headers:{
          'x-api-key': config.public.apiKey
        }})
      .then((response: any) => {
        console.log(response)
        const todoResponse = response.data.todo;
        // Check for existing ids 
        if(this.todoItems.some((item) => item.id == todoResponse.id)){
          console.log(`Todo item met id ${todoResponse.id} bestaat al, vraag opnieuw een todo item aan.`)
          return;
        }

        // Add new todo item to state
        this.todoItems.push({
            id: todoResponse.id,
            assignee: todoResponse.assignee,
            dueDateTime: new Date(todoResponse.dueDateTime).toLocaleString(),
            description: todoResponse.description
        })    
      })
      .catch((error: any) => {
        console.log(error);
      });
    }
  }
});