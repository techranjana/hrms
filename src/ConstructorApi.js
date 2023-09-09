import React, { Component } from 'react';

class ConstructorApi extends Component {

   constructor(props) {
      super(props);
      this.state = {
         posts: [],
      };
   }
   
   // ...   

   handleSubmit = (e) => {
      e.preventDefault();
      fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify({
            title: this.state.title,
            body: this.state.body,
            userId: Math.random().toString(36).slice(2),
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((data) => {
            this.setState({ posts: [data, ...this.state.posts] });
            this.setState({ title: '' });
            this.setState({ body: '' });
         })
         .catch((err) => {
            console.log(err.message);
         });
   };

   render() {
      const { posts, title, body } = this.state;
      return (
           <>JSX here</>
      );
   }
}

export default ConstructorApi;