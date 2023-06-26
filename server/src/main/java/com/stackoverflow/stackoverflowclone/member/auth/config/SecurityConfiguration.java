package com.stackoverflow.stackoverflowclone.member.auth.config;

import com.stackoverflow.stackoverflowclone.member.auth.filter.JwtAuthenticationFilter;
import com.stackoverflow.stackoverflowclone.member.auth.filter.JwtVerificationFilter;
import com.stackoverflow.stackoverflowclone.member.auth.handler.MemberAuthenticationFailureHandler;
import com.stackoverflow.stackoverflowclone.member.auth.handler.MemberAuthenticationSuccessHandler;
import com.stackoverflow.stackoverflowclone.member.auth.jwt.JwtTokenizer;
import com.stackoverflow.stackoverflowclone.member.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        /*
        http
                .headers().frameOptions().sameOrigin() // 동일 출처로부터 들어오는 request만 페이지 렌더링을 허용
                .and()
                .csrf().disable() // csrf 비활성화
                .formLogin()
                .loginPage() // 커스텀 로그인 페이지를 사용
                .loginProcessingUrl() // 로그인 인증 요청을 수행할 URL
                .failureUrl() // 로그인 실패할 경우 화면 전환
                .and()
                .logout() // logout 메서드 호출
                .logoutUrl() // 로그아웃을 수행하기 위한 request URL을 지정
                .logoutSuccessUrl() // 로그아웃을 성공한 후 화면 전환
                .and()
                .anyRequest()
                .permitAll(); // 모든 요청에 대해 접근 허용

        return http.build();
         */
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        // 질문 등록의 경우, 회원만 작성 가능
                        .antMatchers(HttpMethod.POST, "/questions").hasRole("USER")
                        // 질문 수정의 경우, 회원만 수정 가능
                        .antMatchers(HttpMethod.PATCH, "/questions/**").hasRole("USER")
                        // 답변 수정의 경우, 회원만 수정 가능
                        .antMatchers(HttpMethod.PATCH,"/questions/**/answers/**").hasRole("USER")
                        // 회원 정보 조회의 경우, 회원만 조회 가능
                        .antMatchers(HttpMethod.GET, "/users/**").hasRole("USER")
                        // 나머지는 비회원도 가능
                        .anyRequest().permitAll()
                );

        return http.build();

    }

    // 패스워드 암호화
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }


    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        // 추가
        configuration.setAllowedOrigins(Arrays.asList("https://dahamoverflow.netlify.app/","http://localhost:5173/", "http://localhost:8080/"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST", "PATCH", "DELETE"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setMaxAge(86400L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    // JwtAuthenticationFilter를 등록
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {  // configure 커스터마이징
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);  //

            // JwtAuthenticationFilter에서 사용되는 AuthenticationManager와 JwtTokenizer를 DI
            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);  // Spring Security Filter Chain에 추가
        }
    }
}
