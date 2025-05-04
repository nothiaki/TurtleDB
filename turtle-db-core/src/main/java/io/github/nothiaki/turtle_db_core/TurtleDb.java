package io.github.nothiaki.turtle_db_core;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TurtleDb {

  private final String storage;
  private final String basePackage;

  private TurtleDb(Builder builder) {
    this.storage = builder.storage;
    this.basePackage = builder.basePackage;

    //pseudocode

    List<Class<?>> repositoriesInterfaces = scanRepositoriesInterfaces(basePackage);
    Map<Class<?>, Object> repositoryImpls = new HashMap<>();

    for(Class<?> repositoryInterface : repositoriesInterfaces) {
      Object impl = createRepositoryImpl(repositoryInterface);
      repositoryImpls.put(repositoryInterface, impl);
    }

    List<Field> fields = scanFields(basePackage);

    for(Field field : fields) {
      Object instance = getInstanceOfField(field);

      field.setAccessible(true);
      field.set(instance, repositoryImpls.get(field.getType()));
    }
  }

  public static class Builder {

    private String storage;
    private String basePackage;

    public Builder storage(String storage) {
      this.storage = storage;
      return this;
    }

    public Builder basePackage(String basePackage) {
      this.basePackage = basePackage;
      return this;
    }

    public TurtleDb build() {
      return new TurtleDb(this);
    }

  }

}

