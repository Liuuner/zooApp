package ch.bbw.lt.zoobackend;

import ch.bbw.lt.zoobackend.models.Ticket;
import ch.bbw.lt.zoobackend.models.TicketType;
import ch.bbw.lt.zoobackend.repositories.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Date;

@Component
@RequiredArgsConstructor
public class DataLoader implements ApplicationRunner {
    private final TicketRepository ticketRepos;

    @Override
    public void run(ApplicationArguments args) {
        /*ticketRepos.saveAll(Arrays.asList(
                Ticket.builder().entryAt(new Date()).boughtAt(new Date()).ticketType(TicketType.GROUP).build()
        ));*/
    }
}
