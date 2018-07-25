insert into userEvents (user_id, name, street, city, zip, phone, email, datetime, location)
values (${user_id}, ${name}, ${street}, ${city}, ${zip}, ${phone}, ${email}, ${datetime}, ${location}  ) returning *;


insert into userEvents (user_id, name, street, city, zip, phone, email, datetime, location)
values ( 1 ,  'Kate',  '123 ford st' ,  'downey' ,  90241 ,  562 774 3489 ,  'disneyprincess@gmail.com' ,  'oct 25 2018',  'disneyland'   ) returning *;


insert into userEvents (user_id, name, street, city, zip, phone, email, datetime, location)
values ( 2 ,  'Jeremy' ,  '564 filthy rd' ,  'visailia' ,  98343 ,  345 983 2898 , 'bigdog78@yahoo.com' ,  'apr 3 2018' ,  'redwood forrest park' ) returning *;


insert into userEvents (user_id, name, street, city, zip, phone, email, datetime, location)
values ( 3 ,  'Ricky' ,  '462 dunnit rd' ,  'houston',  98723,  653 873 3445 ,  'rickysticky@gmail.com' ,  'jul 6 2019',  'the broad museum'  ) returning *;


insert into userEvents (user_id, name, street, city, zip, phone, email, datetime, location)
values ( 4 ,  'Herb' ,  '78 squint st' ,  'oakland' ,  23887 ,  873 987 2928 ,  'birdistheword@yahoo.com' ,  'sep 7 2018' ,  'angel stadium'   ) returning *;


insert into userEvents (user_id, name, street, city, zip, phone, email, datetime, location)
values ( 5 ,  'Debbie' , '8723 tressle ',  'carson',  92838 ,  349 872 3498 , 'thelittlehostess@yahoo.com' , 'jun 25 2018' ,  'bill gram hall'   ) returning *;


insert into userEvents (user_id, name, street, city, zip, phone, email, datetime, location)
values ( 6 ,  'Kent' , '5522 zizzx lane' ,  'brentwood' ,  90334 ,  873 789 8732 ,  'gokentstate@yahoo.com' , 'feb 9 2018' ,  'san manuel amphitheatre'  ) returning *;




