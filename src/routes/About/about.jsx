import React from 'react'

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>Below are the API calls utilized in this full CRUD MERN App. Happy Listening!</p>
      <br />
      <table style={{width: "100%"}}>
        <thead>
          <tr>
            <th>ACTION</th>
            <th>URL</th>
            <th>HTTP</th>
            <th>BODY</th>
            <th>RESULT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>READ</td>
            <td>/api/albums</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Returns All Albums</td>
          </tr>
          <tr>
            <td>READ</td>
            <td>/api/albums/:id</td>
            <td>GET</td>
            <td>Empty</td>
            <td>Returns A Single Album</td>
          </tr>
          <tr>
            <td>CREATE</td>
            <td>/api/albums</td>
            <td>POST</td>
            <td>JSON</td>
            <td>Creates New Album</td>
          </tr>
          <tr>
            <td>UPDATE</td>
            <td>/api/albums/:id</td>
            <td>PUT</td>
            <td>JSON</td>
            <td>Updates Selected Album</td>
          </tr>
          <tr>
            <td>DELETE</td>
            <td>/api/albums/:id</td>
            <td>DELETE</td>
            <td>JSON</td>
            <td>Deletes Selected Album</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default About