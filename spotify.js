let request = require("request");
let user_id = "1265282669";
let token = "Bearer BQAPdK8z01RVjCgcnV4JJirgA8QAszcbJ99u94wdyCn6P_x7Q5EzYr4bS3S5gee4EDjl-0tM_c0-ZwEH45Yciu5GGOnQx5w6agDRHFPiGBz3OYgs2iEiDfxEGQTSS3Y2_zZsYELthPvxIclebFJa";
let playlist_url = "https://api.spotify.com/v1/users/" + user_id + "/playlists";

function showTracks() {
    let tracksDisplay = document.getElementsByClassName("tracksDisplay")[0];
}

request({
    url: playlist_url,
    headers: {
        "Authorization": token
    }
}, function (err, res) {
    if (res) {
        let playlists = JSON.parse(res.body);
        console.log(JSON.stringify(playlists.items, null, " "));
        let playlist_url = playlists.items[0].href;
        request({
            url: playlist_url,
            headers: {
                "Authorization": token
            }
        }, function (err, res) {
            if (res) {
                let playlist = JSON.parse(res.body);
                console.log("playlists: " + playlist.name);
                playlist.tracks.items.forEach(function (track) {
                    console.log(track.track.name + ' xx ' + track.track.artist);
                });
                console.log(playlist.tracks.items.length);
            }
        });
    }
});




/*

curl -H "Authorization: Basic ZmIwYWUwODg3NDFiNDZiMGIyZTVkNGY0NDI1NmY0OTQ6ZDg3ZDA1MGQzYjI0NDhmNTkxNWYzZjdiMGRiYjVhNmM=" -d grant_type=authorization_code -d code=AQBbde_7ebVSyLuVNvEXUCYFKLfbQeKx--pdcSDTdPCz-nXzu68ZQzvu35jSJ0tYOSiNKOZCpjM8wbeWDyxvBxpe2WAcDQYGJLnwi0oDi1Gwp1xh8qDhtQGICqTHyhkvQO8FL9WXhDk2QkQSJGUkyA2Ry45pkJHASLeIBVRcXdmpFM3aJxMiBMLZYDgNMx5smS_Pkgo -d redirect_uri=https%3A%2F%2Fmicheleter.github.io%2F https://accounts.spotify.com/api/token

https://accounts.spotify.com/authorize?client_id=fb0ae088741b46b0b2e5d4f44256f494&scopes=playlist-read-private&response_type=code&redirect_uri=https%3A%2F%2Fmicheleter.github.io%2F

{
    "access_token": "BQCbn0VjJPW1VGv5yasY_TwJ0LCjakEwXr2sZIwbdRhnol4TKZY2J1sEvC29iaKUBrZkNgBXAfI1mC7CqatClwx6PH72HIPsxIlnw97ZjMheI3-LubczdKqCCHbudlgbg_K94DkWvEomNExN-bGn",
    "token_type": "Bearer",
    "expires_in": 3600,
    "refresh_token": "AQD7aIdz22luUccwNeueMAEDjUsf1PWXWYC3sMn4IM1UQdFY6MbnG9-aE6DRlEX3OEBs6pubq2ZSv1bXhCrcvTYGDTFyc7x4iA1Jsa5lF2r3W2PjCW7m_q1L1R2HDdeLtId87g",
    "scope": ""
}

*/