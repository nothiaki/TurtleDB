package io.github.nothiaki.turtle_db_core.internal;

//import java.util.List;
//import java.util.Optional;

import io.github.nothiaki.turtle_db_core.TurtleDbRepository;

public class TurtleDbRepositoryImpl<T> implements TurtleDbRepository<T> {

  @Override
  public T save(T entity) {
    System.out.println("save entity");
    return entity;
  }

  //@Override
  //public List<T> find() {
  //}
  //
  //@Override
  //public Optional<T> findOneById(String id) {}

}
