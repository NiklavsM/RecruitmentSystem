package com.example.recruitmentsystem.helper;

import org.apache.commons.lang.RandomStringUtils;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.io.Serializable;
import java.nio.charset.Charset;
import java.util.Random;
import java.util.UUID;

public class RandomStringGenerator  {

   static public String generateRandomString(){
       int length = 10;
       boolean useLetters = true;
       boolean useNumbers = true;
       return  RandomStringUtils.random(length, useLetters, useNumbers);
   }
}
