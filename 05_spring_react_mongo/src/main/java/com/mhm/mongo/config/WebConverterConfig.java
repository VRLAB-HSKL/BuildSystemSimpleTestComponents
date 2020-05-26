package com.mhm.mongo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

import java.util.Arrays;
import java.util.List;
//
//@Configuration
//public class WebConverterConfig extends WebMvcConfigurationSupport {
//
//    private static final String MEDIA_TYPE = "application/json";
//
//    @Override
//    protected void configureMessageConverters(List<HttpMessageConverter<?>> converters){
//        converters.add(converter());
//        addDefaultHttpMessageConverters(converters);
//    }
//
//    @Bean
//    public MappingJackson2HttpMessageConverter converter(){
//        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
//        converter.setSupportedMediaTypes(Arrays.asList(MediaType.valueOf(MEDIA_TYPE)));
//        return converter;
//    }
//}
