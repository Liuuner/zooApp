package ch.bbw.lt.zoobackend.controllers;

import ch.bbw.lt.zoobackend.models.Ticket;
import ch.bbw.lt.zoobackend.repositories.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/tickets")
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class TicketController {

    private final TicketRepository repos;


    @GetMapping()
    public ResponseEntity<Iterable<Ticket>> getTickets() {
        Iterable<Ticket> tickets = repos.findAll();

        return new ResponseEntity<>(tickets, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable String id) {
        Optional<Ticket> ticket = repos.findById(id);

        if (ticket.isPresent()) {
            return new ResponseEntity<>(ticket.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Iterable<Ticket>> createTicket(@RequestBody Ticket ticket) {
        try {
            Ticket newTicket = repos.save(ticket);
            return new ResponseEntity<>(repos.findAll(), HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Iterable<Ticket>> deleteTicket(@PathVariable String id) {

        repos.deleteById(id);

        Optional<Ticket> optionalTicket = repos.findById(id);

        if (optionalTicket.isPresent()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(repos.findAll(), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<Iterable<Ticket>> updateTicket(@RequestBody Ticket reqTicket) {
        if (repos.findById(reqTicket.getId()).isPresent()) {
            Ticket updatedTicket = repos.save(reqTicket);
            return new ResponseEntity<>(repos.findAll(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
