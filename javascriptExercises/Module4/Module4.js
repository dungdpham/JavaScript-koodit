'use strict';

async function tvmaze(query) {
    console.log('asynchronous download begins');
    try {
        const url = 'https://api.tvmaze.com/search/shows?q=' + query;
        console.log(url);
        const response = await fetch(url);
        const jsonData = await response.json();
        //console.log(jsonData);
        return jsonData;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('asynchronous download complete');
    }
}
/*
document.getElementById('submit').addEventListener('click', async function(evt) {
    evt.preventDefault();
    const query = document.getElementById('query').value;
    //console.log(query);
    const jsonData = await tvmaze(query);

    const li = document.createElement('li');
    const name = document.createElement('p');
    name.innerHTML = jsonData[0].show.name;
    li.appendChild(name);
    const link = document.createElement('a');
    link.innerHTML = "Link to details";
    link.target = "_blank";
    link.href = jsonData[0].show.url;
    li.appendChild(link);
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = jsonData[0].show.image.medium;
    img.alt = jsonData[0].show.name;
    figure.appendChild(img);
    const caption = document.createElement('figcaption');
    caption.innerHTML = jsonData[0].show.name;
    figure.appendChild(caption);
    li.appendChild(figure);
    const desc = document.createElement('p');
    desc.innerHTML = jsonData[0].show.summary;
    li.appendChild(desc);

    document.getElementById('ulist').appendChild(li);
})*/

document.getElementById('submit').addEventListener('click', async function(evt) {
    evt.preventDefault();

    document.getElementById('ulist').innerHTML = '';

    const query = document.getElementById('query').value;
    //console.log(query);
    const jsonData = await tvmaze(query);

    for (const data of jsonData) {
        const li = document.createElement('li');

        const name = document.createElement('h2');
        name.innerHTML = data.show.name;
        li.appendChild(name);

        const genre = document.createElement('div');
        genre.id = "genre";
        genre.innerHTML = data.show.genres.join(" | ");
        li.appendChild(genre);

        const link = document.createElement('a');
        link.id = "link";
        link.innerHTML = "Link to TVMaze listing";
        link.target = "_self";
        link.href = "#";
        li.appendChild(link);

        const modal = document.getElementById('modal');
        const iframe = document.getElementById('iframe');

        link.addEventListener('click', (evt) => {
            evt.preventDefault();
            modal.showModal();
            iframe.src = data.show.url;
            iframe.id = "iframe";
            iframe.title = data.show.name;
        })
        document.getElementById('close').addEventListener('click', () => {
            modal.close();
        })

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        if (data.show.image === null) {
            img.src = `https://via.placeholder.com/210x295?text=${data.show.name}`;
        } else img.src = data.show.image.medium;
        img.alt = data.show.name;
        figure.appendChild(img);
        const caption = document.createElement('figcaption');
        caption.innerHTML = data.show.name;
        figure.appendChild(caption);
        li.appendChild(figure);

        const desc = document.createElement('div');
        desc.id = "desc";
        desc.innerHTML = data.show.summary;
        li.appendChild(desc);

        document.getElementById('ulist').appendChild(li);
    }
})