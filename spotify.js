let request = require("request");
let user_id = "1265282669";
let token = "Bearer BQAjAmoPhWSdzEnKlCzMjQnkx449cGB9f2TP8e0vWwthLWE1UZFdBHBk9THNBJLVoEP6vtvSr4eORLdIIX10LjlJuWiST_yh4ggt2Z5b9xmOP-9RiCe32OdxWi3gs07Eq0FotjEb3B3pl9AVsDDJ";
let playlist_url = "https://api.spotify.com/v1/users/" + user_id + "/playlists";

request({url: playlist_url,headers: {"Authorization": token}},function (err, res) {
        if (res) {
            let playlists = JSON.parse(res.body);
            // console.log(JSON.stringify(playlists.items, null, " "));
            let playlist_url = playlists.items[0].href;
            request({url: playlist_url,headers: {"Authorization": token}},function (err, res) {
                    if (res) {
                        let playlist = JSON.parse(res.body);
                        console.log("playlists: " + playlist.name);
                        playlist.tracks.items.forEach(function(track) {
                            console.log(track.track.name);
                        });
                        console.log(playlist.tracks.items.length);
                    }
            });
        }
});



/*

curl -H "Authorization: Basic ZmIwYWUwODg3NDFiNDZiMGIyZTVkNGY0NDI1NmY0OTQ6ZDg3ZDA1MGQzYjI0NDhmNTkxNWYzZjdiMGRiYjVhNmM=" -d grant_type=authorization_code -d code=AQBdyxmMcfXrBhcktRV7Ddpf7Q3X7e-Jn8Srcl0c1yxIYL0X-UeP3e1GIlG-PQ4Om4E8PIGUVIkrP6xL2LVlbn51C0057hgriVua_4b5GCaTmjG_u6994W_Vn-YJAKdZ3AM5Q7lBoyortsG43drR8o2BVxuBy4oNShQW1ijXgvJuqCPd4KMmOhdtnwbjQf5AiJoRlaY -d redirect_uri=https%3A%2F%2Fmicheleter.github.io%2F https://accounts.spotify.com/api/token

https://accounts.spotify.com/authorize?client_id=fb0ae088741b46b0b2e5d4f44256f494&scopes=playlist-read-private&response_type=code&redirect_uri=https%3A%2F%2Fmicheleter.github.io%2F

{
    "access_token": "BQCbn0VjJPW1VGv5yasY_TwJ0LCjakEwXr2sZIwbdRhnol4TKZY2J1sEvC29iaKUBrZkNgBXAfI1mC7CqatClwx6PH72HIPsxIlnw97ZjMheI3-LubczdKqCCHbudlgbg_K94DkWvEomNExN-bGn",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "AQD7aIdz22luUccwNeueMAEDjUsf1PWXWYC3sMn4IM1UQdFY6MbnG9-aE6DRlEX3OEBs6pubq2ZSv1bXhCrcvTYGDTFyc7x4iA1Jsa5lF2r3W2PjCW7m_q1L1R2HDdeLtId87g",
    "scope": ""
}

*/