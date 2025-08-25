import React, { Component } from 'react'
import "./SubjectList.css"; 

interface StateType {
    subjects: string[];

}
export default class SubjectList extends Component <object,StateType> {
    constructor (props:object){
        super(props);
        this.state= {
            subjects:["Toan","Van ","Anh","Li","Hoa","Sinh"]
        }
    }
    
  render() {
    return (
        <div className='container'>
            <h3 className='title'>Danh sach mon hoc</h3>
            <ul className='list'>
                {this.state.subjects.map((subj,index)=> (
                    <li key={index} className='item'>{subj} </li>
                ))}
            </ul>
        </div>

    )
  }
}
