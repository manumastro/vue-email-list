
const app = new Vue({

  el: '#app',

  data: {
    emailList: [],
    isLoading: true,
  },

  methods: {
    getEmailList(){
      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res => {
        //console.log(res.data.response);
        this.emailList.push(res.data.response);
        if(i === 9) this.isLoading = false;
        })
      }
      console.log(this.emailList);
    }
  },

  mounted(){
    this.getEmailList();
  }

})