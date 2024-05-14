package ch.bbw.lt.zoobackend.controllers;

import ch.bbw.lt.zoobackend.models.Customer;
import ch.bbw.lt.zoobackend.models.Ticket;
import ch.bbw.lt.zoobackend.services.CustomerService;
import ch.bbw.lt.zoobackend.services.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/tickets")
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class TicketController {

    private final TicketService ticketService;
    private final CustomerService customerService;


    @GetMapping()
    public ResponseEntity<Iterable<Ticket>> getTickets() {
        return ticketService.getTickets();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ticket> getTicketById(@PathVariable String id) {
        return ticketService.getTicketById(id);
    }

    @PostMapping
    public ResponseEntity<Iterable<Ticket>> createTicket(@RequestBody Ticket ticket) {
        Set<Customer> customers = ticket.getCustomers();

        customers.forEach(customerService::createCustomerOrNot);

        return ticketService.createTicket(ticket);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Iterable<Ticket>> deleteTicket(@PathVariable String id) {
        return ticketService.deleteTicket(id);
    }

    @PutMapping()
    public ResponseEntity<Iterable<Ticket>> updateTicket(@RequestBody Ticket ticket) {
        return ticketService.updateTicket(ticket);
    }
}
