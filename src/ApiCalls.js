const fetchApi = () => {
    let fetchCall =  fetch(`http://localhost:8080/api/employees/`)
     .then(response => {
         if (response.status === 404) {
             throw new Error("404: Not Found")
         } else if (response.status === 500) {
             throw new Error("500: Server is having issues")
         }
         return response.json()
     })
     return fetchCall
 }

 const postNewEmployee = (newEmployee) => {
    return fetch('http://localhost:8080/api/employees/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEmployee)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Please make sure that all fields are filled out")
        } else {
          return response.json()
        }
      })
  }

 export { fetchApi, postNewEmployee }