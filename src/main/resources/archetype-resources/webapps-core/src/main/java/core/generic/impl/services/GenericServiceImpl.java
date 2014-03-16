#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.core.generic.impl.services;

import java.util.List;

import org.springframework.stereotype.Service;

import ${package}.core.generic.interfaces.dao.GenericDAO;
import ${package}.core.generic.interfaces.services.GenericService;


@Service
public class GenericServiceImpl<T, DAO extends GenericDAO<T>> implements GenericService<T> {
	
	private DAO dao;
	
	public void setDao(DAO dao) {
		this.dao = dao;
	}
	
	public DAO getDao() {
		return dao;
	}

	public void save(T entity) throws Exception {
		dao.save(entity);
		
	}

	public T getById(int id) throws Exception {
		
		return dao.getById(id);
	}

	public List<T> list() throws Exception {
		
		return getDao().list();
	}

	public void update(T entity) throws Exception {
		dao.update(entity);
		
	}

}
