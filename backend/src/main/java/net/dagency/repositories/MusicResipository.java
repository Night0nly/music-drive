package net.dagency.repositories;

import net.dagency.controllers.MusicDriveController;
import net.dagency.domains.Song;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class MusicResipository {
    private static final Logger LOG = LoggerFactory.getLogger(MusicResipository.class);

    private static final String SEARCH_LINK = "http://search.chiasenhac.vn/search.php?s=";

    public List<Song> search(final String songKey) {
        List<Song> searchResult = new ArrayList<>();
        try {
            final Connection connection = Jsoup.connect(SEARCH_LINK + songKey.replace(" ", "+"));
            final Document document = connection.get();
            final Elements resultItems = document.selectFirst("table").select("tr");
            return resultItems.stream().skip(1).map(this::getSong).collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return searchResult;
    }

    private Song getSong(final Element item) {
        final Elements songInfo = item.getElementsByClass("tenbh").first().select("p");
        final String songQuality = item.selectFirst("span.gen").text();
        return new Song(songInfo.get(0).text(),
                songInfo.get(1).text(),
                songQuality.split(" ")[1],
                songQuality.split(" ")[0],
                item.selectFirst("a").attr("href"));
    }
}
