package com.ngmessage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NgMessageApplication {

    public static void main(String[] args) {
        SpringApplication.run(NgMessageApplication.class, args);
        System.out.println("\n" +
                "===========================================================\n" +
                "  🚀 NG-Message Java Biometric Authentication Server Started\n" +
                "  👉 Port: 8080 (Context: /)\n" +
                "  👉 Biometric Engines: SourceAFIS (Fingerprint) + Face Engine\n" +
                "  👉 Endpoints: /api/auth/login-with-biometric\n" +
                "               /api/auth/register-biometric\n" +
                "===========================================================\n");
    }
}
