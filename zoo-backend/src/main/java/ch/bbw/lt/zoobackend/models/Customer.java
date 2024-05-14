package ch.bbw.lt.zoobackend.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.ReadOnlyProperty;

import java.util.List;
import java.util.Set;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Customer {
    @Id
    @ReadOnlyProperty
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ReadOnlyProperty
    private String name;
    private int age;
    @ManyToMany(mappedBy = "customers")
    @JsonIgnoreProperties("customers")
    private Set<Ticket> tickets;

    public String getId() {
        return name;
    }
}
