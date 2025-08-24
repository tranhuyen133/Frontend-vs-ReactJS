import React, { Component } from 'react'

interface StateType{
    name: string;
    email:string
}
export default class Form extends Component <object,StateType>{
    constructor(props:object) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        super(props),
        this.state = {
            name:"",
            email:""
        }
        
    }
   submitForm = (event: React.FormEvent) => {
    event.preventDefault(); // Ngăn reload trang
    // console.log("Biểu mẫu đã được nộp");
}
    handleInput(event: React.ChangeEvent<HTMLInputElement>){
        this.setState({
            [event.target.name]: event.target.value,
        } as Pick<StateType, keyof StateType>) 
        // console.log("Nguoi dung nhap");
    }

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
            <label htmlFor="">Ho va ten</label>
            <input type="text" name="name" onChange={this.handleInput } />
            <label htmlFor="">Email</label>
            <input type="text" name="email" onChange={this.handleInput } />
            <br />
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
