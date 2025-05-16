package io.github.nothiaki.turtle_db_core.internal;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.reflections.Reflections;
import org.reflections.scanners.Scanners;

import io.github.nothiaki.turtle_db_core.TurtleDbRepository;

public class ReflectionContext {

  public List<Class<?>> scanRepositoriesInterfaces(String basePackage) {
    Reflections reflections = new Reflections(basePackage, Scanners.TypesAnnotated, Scanners.SubTypes);

    Set<Class<? extends TurtleDbRepository>> subTypes = reflections.getSubTypesOf(TurtleDbRepository.class);

    return subTypes.stream()
      .filter(Class::isInterface)
      .collect(Collectors.toList());
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
