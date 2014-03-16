##Maven archetype-webapps-module-angularjs-webdev
=========================================

webapps module archetype maven for creating web application with Hibernate 4.x, Spring 3.x, Jersey 1.x, DBUnit, Yeoman, AngularJS 1.2.x 

###Required 

* Maven installed 

###Features 

* DAO Generic implemented; 
* Service Generic implemented; 
* Structure for DBUnit done; 
* back/front end separated in modules: webapps-core, webapps-web and webapps-webdev
* [flyway plugin](http://flywaydb.org) setup for db migration; 


* webapps-core: module for back-end development;

* webapps-web: module for deploy and front-end Java development; 

Starting app in webdev

1. via command line go to root of project  ; 
2. type 

```java 
mvn  clean install 
```

3. Now start the application 

```java 
mvn  tomcat:run 
```

4. App starts in http://localhost:8080/yourapp


* webapps-webdev: module for front-end development (AngularJS, css, html etc); 

Starting app in webdev

1. via command line go to webapps-webdev/src/main/app ; 
2. type 

```java 
grunt server 
```

3. App starts in http://127.0.0.1:9000

Like this front-end code can be tested and debugged. 


Deploying App 

1. via command line go to webapps-webdev/src/main/app ; 
2. type 

```java 
grunt build --force 
```


###How to Install local?

**Step 1**

```java
git clone git@github.com:ITSStartup/archetype-webapps-module-angularjs-webdev.git
```

**Step 2**

* Go to the folder and execute: 

```java
mvn clean install 
```

**Step 3**

* create new maven project via Eclipse ;
* in Catalog choose **My catalogs**;
* in filter type: br.

Now its is expected you see in group id: *br.com.its.archetype*

* choose the archetype and go ahead clicking in next 

**Step 4**

Import  webapps-webdev via Maven in your IDE**
