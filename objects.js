var playlist = {
  artistname: 'song title',
  artistname2: 'song title2'
}

function updatePlaylist (playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  var playlist = { artistName: 'Title' }
  delete playlist.artistName
  return playlist
}