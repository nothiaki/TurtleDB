package io.github.nothiaki.turtle_db_core.internal;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class ReflectionContext {

  public List<Class<?>> scanRepositoriesInterfaces(String basePackage) {
    return new ArrayList<>();
  }

  public Object createRepositoryImpl(Class<?> repositoryInterface) {
    return new Object();
  }

  public List<Field> scanAnnotationFields(String basePackage) {
    return new ArrayList<>();
  }

  public Object getInstanceOfField(Field field) {
    return new Object();
  }
}
