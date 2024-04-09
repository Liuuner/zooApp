package ch.bbw.lt.zoobackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import org.springframework.data.annotation.ReadOnlyProperty;

import java.util.Date;
import java.util.List;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Ticket {
    @Id
    @ReadOnlyProperty
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @ReadOnlyProperty
    public Date boughtAt;
    public Date entryAt;
    public TicketType ticketType;
//    public List<Customer> customers;
}
