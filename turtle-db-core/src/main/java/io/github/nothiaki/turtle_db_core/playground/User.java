package io.github.nothiaki.turtle_db_core.playground;

import java.sql.Timestamp;

import io.github.nothiaki.turtle_db_core.annotation.AtTime;
import io.github.nothiaki.turtle_db_core.annotation.Document;
import io.github.nothiaki.turtle_db_core.annotation.ID;
import io.github.nothiaki.turtle_db_core.annotation.Version;

@Document(dir = "user")
public class User {

  @ID
  private String id;
  private String username;
  private String email;
  private String password;

  @Version
  private int version;

  @AtTime
  private Timestamp atTime;

  public User() {}

  public void setUsername(String username) {
    this.username = username;
  }

  public void setPassword(String password) {
    this.password = password;
  }
}
