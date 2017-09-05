/**
 * @author David Reina
 * 8/21/17.
 */
package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.Todo;

import java.util.List;

public interface TodoService {
    List<Todo> getTodoList();
    Todo addTodo( Todo todo );
}
