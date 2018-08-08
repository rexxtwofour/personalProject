drop table if exists users;
drop table if exists events;
drop table if exists posts;
drop table if exists userEvents;



create table users (
    id serial primary key
    ,fullname text not null
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
--sel);


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
    ,fullname text not null
    ,street text not null
    ,city text not null
    ,zip text not null
    ,phone int 
    ,email text not null
    ,datetime text not null
    ,location text not null
    ,eventcomments text not null
);



//add dummy data to users so table works
// then try to add the events to the table


//create users data

insert into users ( fullname, email, password )
values ('Kate', 'disneyprincess@gmail.com', 'flyhigh' ); 
//id: 1
//$2b$12$g0XBWHfwT5syDQk0l.YVO.noJSaF0whgIU57MXhFlHZI5aHr9m19W
//1 'Kate'
//3 false



insert into users ( fullname, email, password )
values ('Jeremy','bigdog78@yahoo.com', 'ruffruff' ); 
//id: 2
//$2b$12$5JhKJy9YU3bO/0ICyzArFe4z1TVw//xWrsGgsQl9GB/jfDBDW1M.C


insert into users ( fullname, email, password )
values ('Ricky','rickysticky@gmail.com', 'pickupsticks'); 
//id: 3
//$2b$12$yrHidhEVZ/c.5/Zli2ED1.3s.laVY5tDNxCW1Xp/74RuH3FyaHP2K


insert into users ( fullname, email, password )
values ('Herb','birdistheword@yahoo.com', 'thelovebug55');
//id: 4
//$2b$12$3.SViqT//oWDm3PxYyW0je18oetxJIKFhDbKNQ7TMKWrFt.q9YdUu



insert into users ( fullname, email, password )
values ('Debbie','thelittlehostess@yahoo.com', 'cupcakequeen'); 
//id: 5
//$2b$12$TSzEkIMZlGTpudXy6dRWau5aESdJH9c/BKfePaxmhHL21siiGSe5i


insert into users ( fullname, email, password )
values ('Kent','gokentstate@yahoo.com', 'outinthehills' ); 
//id: 5
//$2b$12$f/Jkp3GzI58xXE0T9xxzH.HdS0gJXEBQqyehMG87hNNGtm6oLgIhi







//create user events data

insert into userEvents (user_id, fullname, street, city, zip, phone, email, datetime, location, eventcomments)
values ( 1 ,  'Kate',  '123 ford st' ,  'downey' ,  90241 ,  562 774 3489 ,  'disneyprincess@gmail.com' ,  'oct 25 2018',  'disneyland' ,'the magical kingdom!'  ) 


insert into userEvents (user_id, fullname, street, city, zip, phone, email, datetime, location, eventcomments)
values ( 2 ,  'Jeremy' ,  '564 filthy rd' ,  'visailia' ,  98343 ,  345 983 2898 , 'bigdog78@yahoo.com' ,  'apr 3 2018' ,  'redwood forrest park', 'so epically tall' ) 


insert into userEvents (user_id, fullname, street, city, zip, phone, email, datetime, location, eventcomments)
values ( 3 ,  'Ricky' ,  '462 dunnit rd' ,  'houston',  98723,  653 873 3445 ,  'rickysticky@gmail.com' ,  'jul 6 2019',  'the broad museum' ,'wow, i love art' ) 


insert into userEvents (user_id, fullname, street, city, zip, phone, email, datetime, location, eventcomments)
values ( 4 ,  'Herb' ,  '78 squint st' ,  'oakland' ,  23887 ,  873 987 2928 ,  'birdistheword@yahoo.com' ,  'sep 7 2018' ,  'angel stadium', 'light up that halo!'   ) 


insert into userEvents (user_id, fullname, street, city, zip, phone, email, datetime, location, eventcomments)
values ( 5 ,  'Debbie' , '8723 tressle ',  'carson',  92838 ,  349 872 3498 , 'thelittlehostess@yahoo.com' , 'jun 25 2018' ,  'bill gram hall', 'music forever!'   ) 


insert into userEvents (user_id, fullname, street, city, zip, phone, email, datetime, location, eventcomments)
values ( 6 ,  'Kent' , '5522 zizzx lane' ,  'brentwood' ,  90334 ,  873 789 8732 ,  'gokentstate@yahoo.com' , 'feb 9 2018' ,  'san manuel amphitheatre' ,'what a view' ) 


//create posts data


insert into posts (user_id, comment, likes, event_title, post_title)
values (  1 , 'this service is great', 109,  'dodgers game',  'so cool' )

insert into posts (user_id, comment, likes, event_title, post_title)
values (  2 , 'top notch', 140,  'hard summer',  'awesome' )

insert into posts (user_id, comment, likes, event_title, post_title)
values (  3 , 'best trip ive ever taken', 77,  'LV turn around', 'luxury fun' )

insert into posts (user_id, comment, likes, event_title, post_title)
values (  4 , 'i love traveling with you guys', 34,  'Mondrian party', 'LAs Best'  )

insert into posts (user_id, comment, likes, event_title, post_title)
values (  5 , 'wow you guys are the best', 63,  'avalon nightclub' ,  'Groovin'  )





-- input type date