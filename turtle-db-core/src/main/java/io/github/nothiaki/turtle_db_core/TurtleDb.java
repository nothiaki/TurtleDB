package io.github.nothiaki.turtle_db_core;

public class TurtleDb {

  private final String storage;

  private TurtleDb(Builder builder) {
    this.storage = builder.storage;
  }

  public static class Builder {

    private String storage;

    public Builder storage(String storage) {
        this.storage = storage;
        return this;
    }

    public TurtleDb build() {
        return new TurtleDb(this);
    }

  }

}

