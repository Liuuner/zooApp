package ch.bbw.lt.zoobackend.services;

import ch.bbw.lt.zoobackend.models.Ticket;
import ch.bbw.lt.zoobackend.repositories.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository repos;


    public ResponseEntity<Iterable<Ticket>> getTickets() {
        Iterable<Ticket> tickets = repos.findAll();

        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    public ResponseEntity<Ticket> getTicketById( String id) {
        Optional<Ticket> ticket = repos.findById(id);

        if (ticket.isPresent()) {
            return new ResponseEntity<>(ticket.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Iterable<Ticket>> createTicket( Ticket ticket) {
        try {


            Ticket newTicket = repos.save(ticket);
            return new ResponseEntity<>(repos.findAll(), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public ResponseEntity<Iterable<Ticket>> deleteTicket(String id) {

        repos.deleteById(id);

        Optional<Ticket> optionalTicket = repos.findById(id);

        if (optionalTicket.isPresent()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(repos.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Iterable<Ticket>> updateTicket(Ticket reqTicket) {
        if (repos.findById(reqTicket.getId()).isPresent()) {
            Ticket updatedTicket = repos.save(reqTicket);
            return new ResponseEntity<>(repos.findAll(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
