#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.core.generic.interfaces.dao;

import java.util.List;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

public interface GenericDAO<T> {
	void save(T entity);
	void update(T entity);
	T getById(int id);
	@Transactional(propagation=Propagation.REQUIRED,readOnly=true)
	List<T> list();
	
}