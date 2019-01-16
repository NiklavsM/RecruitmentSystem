package com.example.recruitmentsystem.helper;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.io.Serializable;
import java.nio.charset.Charset;
import java.util.Random;
import java.util.UUID;

public class RandomStringGenerator  {

   static public String generateRandomString(){
       byte[] array = new byte[7]; // length is bounded by 7
       new Random().nextBytes(array);
       String generatedString = new String(array, Charset.forName("UTF-8"));
       return generatedString;
   }
}
