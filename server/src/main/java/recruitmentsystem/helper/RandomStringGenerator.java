package recruitmentsystem.helper;

import org.apache.commons.lang.RandomStringUtils;

public class RandomStringGenerator  {

   static public String generateRandomString(){
       int length = 10;
       boolean useLetters = true;
       boolean useNumbers = true;
       return  RandomStringUtils.random(length, useLetters, useNumbers);
   }
}
