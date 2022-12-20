const appConfig = {
  container:{
    bgColor:"#6a5aab"
  },
  title:{
    name:"todo app",
    textColor:"#fff"
  },
  form: {
    actions:{
      action:"#FIXME",
      name:"todo-form",
    },
    inputs:[
      {
        type:"text",
        name:"todo-text",
        styleName:"todo-form__input",
        basis:"60%"
      },
      {
        type:"submit",
        name:"submit-btn",
        styleName:"btn btn-submit",
        basis:"10%"
      }
    ]

  },
  tabs:[
    "active",
    "completed",
    "all"
  ]
};

export default appConfig;