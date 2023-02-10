async function displayQuote() {

    const res = await fetch(`http://localhost:3000/posts/`,);
    const data = await res.json();
    
    const entryElement = document.querySelector("#text");
    const categoryElement = document.querySelector("#author");
  
    entryElement.textContent = data["post_text"];
    categoryElement.textContent = data["post_category"];
  
  }
