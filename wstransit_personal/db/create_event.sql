insert into userEvents (user_id, name, street, city, zip, phone, email, datetime, location)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9 ) returning *;













