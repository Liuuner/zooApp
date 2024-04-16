package ch.bbw.lt.zoobackend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;
import org.springframework.data.annotation.ReadOnlyProperty;

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
    public String name;
    public int age;
}
