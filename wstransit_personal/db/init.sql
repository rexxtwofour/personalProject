drop table if exists users;
drop table if exists events;
drop table if exists posts;
drop table if exists userEvents;



create table users (
    ,id serial primary key
    ,name text not null
    ,email text not null
    ,password text not null
);

-- Used for after personal project.
-- create table events (
--     ,id serial primary key
--     ,event_name text not null
--     ,location text not null
--     ,datetime text not null
--     ,pickupanddrop location
--);


create table posts (
    ,users_id int references users(id)
    ,id serial primary key
    ,comment text not null
    ,likes int
    ,event_title text not null
    ,post_title text not null
);


create table userEvents (
    ,id serial primary key
    ,user_id int references users(id)
    ,name text not null
    ,street text not null
    ,city text not null
    ,zip text not null
    ,phone int 
    ,email text not null
    ,datetime text not null
    ,location text not null
);


-- input type date