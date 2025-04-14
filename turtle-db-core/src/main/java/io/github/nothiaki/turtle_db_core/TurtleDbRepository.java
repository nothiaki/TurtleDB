package io.github.nothiaki.turtle_db_core;

import java.util.List;
import java.util.Optional;

public interface TurtleDbRepository<T> {

  T save(T entity);
  List<T> find();
  Optional<T> findOneById(String id);

}
