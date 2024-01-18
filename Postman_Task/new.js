function createPost(post) {

    return new Promise((resolve) => {
     setTimeout(() => {
      console.log("Post created:", post);
      resolve(post);
     }, 1000);
    });
   }   

   function updateLastUserActivityTime() {
    return new Promise((resolve) => {
     setTimeout(() => {
      const lastActivityTime = new Date().toLocaleTimeString();
      console.log("Last activity time updated:", lastActivityTime);
      resolve(lastActivityTime);
     }, 1000);
    });
   }

   function deletePost(post) {
    return new Promise((resolve) => {
     setTimeout(() => {
      console.log("Post deleted:", post);
      resolve();
     }, 1000);
    });
   }
   
   function main() {
    const postPromise = createPost("New post content");
    const lastActivityTimePromise = updateLastUserActivityTime();
    Promise.all([postPromise, lastActivityTimePromise])
     .then(([post, lastActivityTime]) => {
      console.log("All posts and lastActivityTime:", post, lastActivityTime);
      return deletePost(post);
     })
     .then(() => {
      console.log("Remaining posts after deletion:");
     })
     .catch((error) => {
      console.error("An error occurred:", error);
     });
   } 
   main();
   