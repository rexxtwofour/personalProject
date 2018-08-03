update userEvents 
set 
,user_id= ${user_id}
,fullname =${fullname}
,street =${street}
,city = ${city}
,zip = ${zip}
,phone = ${phone}
,email = ${email}
,datetime = ${datetime}
,location = ${location}
,eventcomments =${eventcomments}
Where ${id}
returning *;
