#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package br.com.its.core.generic.impl.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import br.com.its.core.generic.interfaces.dao.GenericDAO;

import org.hibernate.Criteria;

@Repository
@SuppressWarnings("unchecked")
public abstract class GenericHibernateDAO<T> implements GenericDAO<T> {

    private Class<T> persistentClass;
    
    @Autowired
    private SessionFactory sessionFactory;

    public Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }

    public Class<T> getPersistentClass() {
        return persistentClass;
    }

    public GenericHibernateDAO(Class<T> persistentClass) {
        super();
        this.persistentClass = persistentClass;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void save(T entity) {
        getCurrentSession().save(entity);

    }

    public void update(T entity) {
        getCurrentSession().update(entity);
    }

    public T getById(int id) {
        return (T) getCurrentSession().get(persistentClass, id);
    }

    @Transactional(propagation = Propagation.REQUIRED, readOnly = true)
    public List<T> list() {
        return getCurrentSession()
            .createCriteria(persistentClass)
            .setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY)
            .list();
    }

}
