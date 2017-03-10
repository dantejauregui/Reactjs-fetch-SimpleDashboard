const baseUrl = 'https://jsonplaceholder.typicode.com/users';


const api = {

  data1() {
    fetch(baseUrl)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
        return data;
      })
  }
}


// const api = {
//
//     async getList(page = 1) {
//       const response = await fetch(`${baseUrl}/posts?_page=${page}`);
//       const data = await response.json();
//       return data;
//     },
//     async getSingle(id = 1) {
//       const response = await fetch(`${baseUrl}/posts/${id}`);
//       const data = await response.json();
//       return data;
//     },
//     async getComments(id = 1) {
//       const response = await fetch(`${baseUrl}/posts/${id}/comments`);
//       const data = await response.json();
//       return data;
//     }
//   },
//
//   users: {
//     async getSingle(id = 1) {
//       const response = await fetch(`${baseUrl}/users/${id}`);
//       const data = await response.json();
//       return data;
//     },
//     async getPosts(id = 1) {
//       const response = await fetch(`${baseUrl}/posts/?userId=${id}`);
//       const data = await response.json();
//       return data;
//     }
//   }
// };

export default api;
