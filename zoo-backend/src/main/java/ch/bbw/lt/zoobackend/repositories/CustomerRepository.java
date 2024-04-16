package ch.bbw.lt.zoobackend.repositories;

import ch.bbw.lt.zoobackend.models.Customer;
import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, String> {
}
