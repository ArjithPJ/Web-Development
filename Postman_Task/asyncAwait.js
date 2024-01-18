// Function to simulate creating a post
function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Post created:", post);
        resolve(post);
      }, 1000);
    });
  }
  
  // Function to simulate updating the last user activity time
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const lastActivityTime = new Date().toLocaleTimeString();
        console.log("Last activity time updated:", lastActivityTime);
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  // Function to simulate deleting a post
  function deletePost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Post deleted:", post);
        resolve();
      }, 1000);
    });
  }
  
  // Main function to perform the tasks
  async function main() {
    try {
      const post = await createPost("New post content");
      const lastActivityTime = await updateLastUserActivityTime();
  
      console.log("All posts and lastActivityTime:", post, lastActivityTime);
  
      // Simulate deleting the last post
      await deletePost(post);
  
      console.log("Remaining posts after deletion:");
      // You can log the remaining posts here
  
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Call the main function
  main();
  