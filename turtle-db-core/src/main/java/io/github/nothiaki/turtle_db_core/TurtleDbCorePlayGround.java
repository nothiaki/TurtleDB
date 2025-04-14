package io.github.nothiaki.turtle_db_core;

public class TurtleDbCorePlayGround {

	public static void main(String[] args) {

    //create a turtle db instance with some configs
    TurtleDb db = new TurtleDb()
                      .config()
                      .something()
                      .storageName("data")
                      .build();

    //public class UserRepository implements TurtleDbRepository<User> {}
    private final UserRepository repository;

    //query examples
    repository.save(u);

    repository.where(this::getUsername).equals("value").first();

    repository.findOneById(1).atTime(timestamp, AtTimeLogic.BEFORE);

	}

}

//import java.sql.Timestamp;

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
