class Song {
	constructor(url, title, artist, album, genre, date, icon, id) {
		this.id = id;
		this.url = url;
		this.icon = icon;
		this.title = title;
		this.artist = artist;
		this.album = album;
		this.genre = genre;
		this.date = date;
	}
}

export default Song;
