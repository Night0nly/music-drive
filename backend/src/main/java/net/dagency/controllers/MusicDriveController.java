package net.dagency.controllers;

import net.dagency.domains.Song;
import net.dagency.repositories.MusicResipository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController()
@RequestMapping("/api")
public class MusicDriveController {
    private static final Logger LOG = LoggerFactory.getLogger(MusicDriveController.class);

    @GetMapping(path = "/{songKey}")
    public List<Song> getSongByName(@PathVariable("songKey") String songKey) {
        MusicResipository musicResipository = new MusicResipository();
        List<Song> songList = musicResipository.search(songKey);
        return songList;
    }

}

