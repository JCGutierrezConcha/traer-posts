const getPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        if (data !== null) {
            mostrarPosts(data);
        }
    } catch (error) {
        console.log(error);
    }

}

const mostrarPosts = (info) => {
    const contenidoPost = document.getElementById("post-data");
    contenidoPost.innerHTML = "";
    info.forEach((item) => {
        contenidoPost.innerHTML += `
        <ul>
        <li><strong>${item.title}</strong></li>
        <p>${item.body}</p>
         </ul>`
    });
};