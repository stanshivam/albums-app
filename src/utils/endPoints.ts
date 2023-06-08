export const endPoints = {
    USERS: {
        default: "https://jsonplaceholder.typicode.com/users"
    },
    ALBUMS: {
        default: (userid: string) => `https://jsonplaceholder.typicode.com/albums?userId=${userid}`,
        albumDetails: (albumid: string) =>  `https://jsonplaceholder.typicode.com/photos?albumId=${albumid}`,
    }
}