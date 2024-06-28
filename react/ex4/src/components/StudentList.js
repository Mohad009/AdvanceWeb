import React from 'react'
// import StudentsData from './StudentsData.js'

const StudentList = () => {
  const studData=[{name:'Mazin',mark:90},
  {name:'Ahmed',mark:80},
  {name:'asma',mark:60},
  {name:'bilal',mark:50}];
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mark</th>
        </tr>
      </thead>
      <tbody>
        {studData.map((item,index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.mark}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default StudentList
