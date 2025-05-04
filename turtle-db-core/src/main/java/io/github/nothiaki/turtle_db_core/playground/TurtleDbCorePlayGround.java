package io.github.nothiaki.turtle_db_core.playground;

import java.sql.Timestamp;

import io.github.nothiaki.turtle_db_core.TurtleDb;

public class TurtleDbCorePlayGround {

	public static void main(String[] args) {
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    User u = new User();
    u.setUsername("username");
    u.setPassword("password");

    TurtleDb db = new TurtleDb.Builder()
                      .storage("data")
                      .basePackage("com.example")
                      .build();


    UserRepository repository = new UserRepository();

    //query examples
    repository.save(u);

    //repository.where("field").equals("value").first();
    //repository.findOneById(1).atTime(timestamp, AtTimeLogic.BEFORE);

	}

}

