package recruitmentsystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class }) //TODO maybe exclude?
@EnableJpaAuditing
public class RecruitmentSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecruitmentSystemApplication.class, args);
	}
}
