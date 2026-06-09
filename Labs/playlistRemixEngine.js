const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    },
    {
      trackId: "trk201",
      artist: "Neon Harbor",
      title: "Satellite Hearts",
      votes: 3,
      bpm: 78
    }
  ]
];



function flattenPlaylists(arr){
  if (!Array.isArray(arr)){
    return []
  }
  let flatlist = [];
  for (let playlistIndex = 0; playlistIndex < arr.length; playlistIndex++){
    let currentPlaylist = arr[playlistIndex];
    for (let trackIndex = 0; trackIndex < currentPlaylist.length; trackIndex++){
      let trackObject = currentPlaylist[trackIndex]
      trackObject.source = [playlistIndex, trackIndex]
      flatlist.push(trackObject)
    }
  }
  return flatlist;
}

function scoreTracks(arr){
  let newArr = []
  for (const playlist of arr){
    let trackCopy = {...playlist};
    trackCopy.score = (trackCopy.votes)*10-Math.abs(trackCopy.bpm-120)
    newArr.push(trackCopy);
  }
  return newArr;
}

function dedupeTracks(arr){
  let uniqueTracks = [];
  let seenIds = new Set()
    for (const track of arr){
      if (!seenIds.has(track.trackId)){
        seenIds.add(track.trackId);
        uniqueTracks.push(track);
      }
  }
  return uniqueTracks;
}

function enforceArtistQuota(arr,num){
  let uniqueArtists = [];
  let artistCount = {};
  for (const track of arr){
    let artistName = track.artist;

    if (!artistCount[artistName]){
      artistCount[artistName] = 0
    }
    if (artistCount[artistName] < num){
      uniqueArtists.push(track);
      artistCount[artistName]++
    }
  }
  return uniqueArtists
}

function buildSchedule(arr){
  let newArr = [];
  let slot = 1;
  for (const track of arr){
    newArr.push({trackId:track.trackId,slot});
    slot++
  }
  return newArr;
}

function remixPlaylist(arr,max){
  let flattened = flattenPlaylists(arr)
  let scoreAdded = scoreTracks(flattened);
  let deduped = dedupeTracks(scoreAdded);
  let artistQuota = enforceArtistQuota(deduped,max);
  return buildSchedule(artistQuota)

}
console.log(remixPlaylist(playlists,1));
