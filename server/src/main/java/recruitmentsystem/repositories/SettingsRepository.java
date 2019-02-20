package recruitmentsystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import recruitmentsystem.models.Settings;

public interface SettingsRepository extends JpaRepository<Settings, Long> {
}
