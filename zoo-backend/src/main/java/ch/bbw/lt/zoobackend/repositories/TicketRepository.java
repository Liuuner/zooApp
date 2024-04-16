package ch.bbw.lt.zoobackend.repositories;

import ch.bbw.lt.zoobackend.models.Ticket;
import org.springframework.data.repository.CrudRepository;

public interface TicketRepository extends CrudRepository<Ticket, String> {
}
