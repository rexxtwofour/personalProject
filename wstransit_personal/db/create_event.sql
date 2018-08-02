insert into userEvents (user_id, fullname, street, city, zip, phone, email, datetime, location, eventcomments)
values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10 ) returning *;













