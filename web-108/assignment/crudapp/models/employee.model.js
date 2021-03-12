const mongoose = require('mongoose');

var employeeSchema = new Mongoose.Schema({
  fullName:{
    type:string
  },
  email:{
    type:string
  },
  mobile:{
    type:string
  },
  city: {
  type: string
}
});
mongoose.model("Employee", employeeSchema);