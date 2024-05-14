package ch.bbw.lt.zoobackend.controllers;

import ch.bbw.lt.zoobackend.models.Customer;
import ch.bbw.lt.zoobackend.models.Ticket;
import ch.bbw.lt.zoobackend.services.CustomerService;
import ch.bbw.lt.zoobackend.services.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/customers")
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class CustomerController {

    private final CustomerService service;

    @GetMapping()
    public ResponseEntity<Iterable<Customer>> getTickets() {
        return service.getCustomers();
    }

    @GetMapping("/{name}")
    public ResponseEntity<Customer> getCustomerByName(@PathVariable String name) {
        return service.getCustomerByName(name);
    }

}
