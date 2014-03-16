#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package br.com.its.core.generic.interfaces.services;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

@Transactional(rollbackFor = Exception.class)
public interface GenericService<T> {
	
	void save(T entity) throws Exception;

	void update(T entity) throws Exception;

	T getById(int id) throws Exception;

	List<T> list() throws Exception;

}