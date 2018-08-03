insert into users ( fullname, email, password )
values ($1,$2,$3) 
returning *