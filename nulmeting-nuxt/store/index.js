import axios from 'axios'

export const state = () => ({
  messages: [],
  responseData: {
    firstName: "",
    surName: "",
    color: ""
  }
})
    
export const mutations = {
  addMessage(state, newMessage){
    state.messages.push(newMessage)
  },
  
  setEchoResponse(state, response){
    state.responseData = response.echo
  }
}

export const actions = {
  async echo ({ commit }, formData) {
    let data = {
      echo: formData
    }
    let options = {
      url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
      method: "POST",
      headers: {
        "x-api-key": process.env.apiKey
      },
      data
    }
    let response = await axios(options);
    commit('setEchoResponse', response.data);
  }
}
        