// Define the make album function
function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number}= {
        artist: artist_name,
        title: album_title,
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}

// Calling 3 time functions and creating 3 variables with different values

let album1= make_album("Islam", "Album title 1");

let album2= make_album("khan", "Album 2");

// calling a make album function with third (optional) parameter value
let album3= make_album("Zuhra", "Album 3", 10);

// Printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);