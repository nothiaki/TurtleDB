package io.github.nothiaki.turtle_db_core;

import java.sql.Timestamp;

public class TurtleDbCorePlayGround {

	public static void main(String[] args) {
    //declarations
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    User u = new User();

    //create a turtle db instance with some configs
    TurtleDb db = new TurtleDb.Builder()
                      .storage("data")
                      .build();

    //public class UserRepository implements TurtleDbRepository<User> {}
    private final UserRepository repository;

    //query examples
    repository.save(u);

    repository.where("field").equals("value").first();

    repository.findOneById(1).atTime(timestamp, AtTimeLogic.BEFORE);

	}

}

//@Document(dir = "user")
//public class User {

  //@ID
  //private String id;
  //private String username;
  //private String email;
  //private String password;

  //@Version
  //private int version;

  //@AtTime
  //private Timestamp atTime;

  //constructors

  //getters and setters

//}
