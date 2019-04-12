package net.dagency.domains;

public class Song {
    private String songName;
    private String author;
    private String quality;
    private String link;
    private String songLength;

    public Song(String songName, String link) {
        this.songName = songName;
        this.link = link;
    }

    public Song(String songName, String author, String quality, String songLength, String link) {
        this.songName = songName;
        this.author = author;
        this.quality = quality;
        this.songLength = songLength;
        this.link = link;
    }

    public String getSongName() {
        return songName;
    }

    public String getAuthor() {
        return author;
    }

    public String getQuality() {
        return quality;
    }

    public String getLink() {
        return link;
    }

    public String getSongLength() {
        return songLength;
    }
}
