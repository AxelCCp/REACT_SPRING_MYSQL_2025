package com.back.react.app.auth;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.back.react.app.auth.filters.JwtAuthenticationFilter;
import com.back.react.app.auth.filters.JwtValidationFilter;

@Configuration
public class SpringSecurityConfig {

    @Autowired
    private AuthenticationConfiguration authenticationConfiguration;

    @Bean
    AuthenticationManager authenticationManager () throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }


     @Bean
    CorsConfigurationSource corsConfigurationSource () {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        config.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
        config.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        config.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);    //ruta donde se aplica a laconfiguracion del config.
        return source;
    }


    @Bean
    FilterRegistrationBean<CorsFilter> corsFilter () {
        FilterRegistrationBean<CorsFilter>bean = new FilterRegistrationBean<>(new CorsFilter(corsConfigurationSource()));
        bean.setOrder(Ordered.HIGHEST_PRECEDENCE);          //se le da un prioridad alta a este bean.
        return bean;
    }


    @SuppressWarnings({ "removal", "deprecation" })
    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        
        return http.authorizeRequests()

        //--------------STOCK ENDPOINTS--------------
        
        .requestMatchers(HttpMethod.GET, "/prod").permitAll()

        .requestMatchers(HttpMethod.GET, "/prod/{id}").hasAnyRole("USER", "ADMIN")

        .requestMatchers(HttpMethod.PUT, "/prod/{id}").hasRole("ADMIN")
        
        .requestMatchers(HttpMethod.POST, "/prod").hasRole("ADMIN")
        
        .requestMatchers(HttpMethod.DELETE, "/prod/{id}").hasRole("ADMIN")

        //--------------USERS SYSTEM ENDPOINTS-------

        .requestMatchers(HttpMethod.GET, "/user-system").hasAnyRole("USER", "ADMIN")

        .requestMatchers(HttpMethod.GET, "/user-system/{id}").hasAnyRole("USER", "ADMIN")

        .requestMatchers(HttpMethod.PUT, "/user-system/{id}").hasRole("ADMIN")
        
        .requestMatchers(HttpMethod.POST, "/user-system").hasRole("ADMIN")
        
        .requestMatchers(HttpMethod.DELETE, "/user-system/{id}").hasRole("ADMIN")

        //--------------

        .anyRequest().authenticated()

            .and() 
            
            .addFilter(new JwtAuthenticationFilter(authenticationConfiguration.getAuthenticationManager()))
            
            .addFilter(new JwtValidationFilter(authenticationConfiguration.getAuthenticationManager()))
            
            .csrf(config -> config.disable())
            
            .sessionManagement(managment -> managment.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

            .cors(cors -> cors.configurationSource(corsConfigurationSource()))     
            
            .build();

    }

}
