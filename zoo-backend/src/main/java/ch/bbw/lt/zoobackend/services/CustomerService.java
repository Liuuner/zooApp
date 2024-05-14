package ch.bbw.lt.zoobackend.services;

import ch.bbw.lt.zoobackend.models.Customer;
import ch.bbw.lt.zoobackend.repositories.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomerService {
    private final CustomerRepository repos;

    public ResponseEntity<Iterable<Customer>> getCustomers() {
        Iterable<Customer> customers = repos.findAll();

        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    public ResponseEntity<Customer> getCustomerByName(String name) {
        Optional<Customer> customer = repos.findById(name);

        if (customer.isPresent()) {
            return new ResponseEntity<>(customer.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    public ResponseEntity<Iterable<Customer>> createCustomer(Customer customer) {
        try {
            Customer newCustomer = repos.save(customer);
            return new ResponseEntity<>(repos.findAll(), HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    public void createCustomerOrNot(Customer customer) {
        Optional<Customer> optionalCustomer = repos.findById(customer.getName());

        if (optionalCustomer.isEmpty()) {
            repos.save(customer);
        }
    }

    public ResponseEntity<Iterable<Customer>> deleteCustomer(String id) {

        repos.deleteById(id);

        Optional<Customer> optionalCustomer = repos.findById(id);

        if (optionalCustomer.isPresent()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<>(repos.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Iterable<Customer>> updateCustomer(Customer reqCustomer) {
        if (repos.findById(reqCustomer.getId()).isPresent()) {
            Customer updatedCustomer = repos.save(reqCustomer);
            return new ResponseEntity<>(repos.findAll(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
