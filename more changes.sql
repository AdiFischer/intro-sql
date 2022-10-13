-- select * from customers
UPDATE public.customers
	SET first_name= 'jen', last_name= 'ben', email='f@gmail.com', phone=555555555,
	--created_at=?, 
	updated_at=now()
	WHERE customer_id=1;