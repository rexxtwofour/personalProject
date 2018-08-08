update userEvents 
set 
,fullname =${fullname}
,street =${street}
,city = ${city}
,zip = ${zip}
,phone = ${phone}
,email = ${email}
,datetime = ${datetime}
,location = ${location}
,eventcomments =${eventcomments}
Where id = ${id}
returning *;
