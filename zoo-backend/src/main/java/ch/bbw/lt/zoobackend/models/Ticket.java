package ch.bbw.lt.zoobackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.ReadOnlyProperty;

import java.util.Date;
import java.util.Set;

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
    private Date boughtAt;
    private Date entryAt;
    private TicketType ticketType;
    @ManyToMany
    @JoinTable(
            name = "ticket_customer",
            joinColumns = @JoinColumn(name = "ticket_id"),
            inverseJoinColumns = @JoinColumn(name = "customer_id"))
    @JsonIgnoreProperties("tickets")
    private Set<Customer> customers;
}
