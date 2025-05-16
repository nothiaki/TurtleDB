package io.github.nothiaki.turtle_db_core;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.github.nothiaki.turtle_db_core.internal.ReflectionContext;

public class TurtleDb {

  private final String storage;
  private final String basePackage;

  private TurtleDb(Builder builder) {
    this.storage = builder.storage;
    this.basePackage = builder.basePackage;

    ReflectionContext reflectionContext = new ReflectionContext();

    List<Class<?>> repositoriesInterfaces = reflectionContext.scanRepositoriesInterfaces(basePackage);
    Map<Class<?>, Object> repositoryImpls = new HashMap<>();

    for(Class<?> repositoryInterface : repositoriesInterfaces) {
      Object impl = reflectionContext.createRepositoryImpl(repositoryInterface);
      repositoryImpls.put(repositoryInterface, impl);
    }

    List<Field> fields = reflectionContext.scanAnnotationFields(basePackage);

    for(Field field : fields) {
      Object instance = reflectionContext.getInstanceOfField(field);

      field.setAccessible(true);

      try {
        field.set(instance, repositoryImpls.get(field.getType()));
      } catch (Exception e) {
        new RuntimeException("ERROR: fields with nottation should be public.");
      }
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

