--select * from customers
--select productionname, customerid from orders 
--where customerid = 2 
--and create_time > '2022-12-31';

--select * from orders where customerid != 2

--select * from customers
--inner join orders on customers.customerid = orders.customerid
-- inner join is connect the orders table to customerid to the right order
--select * from customers left join orders on customers.customerid = orders.customerid
-- which do we want everything of- whats on the left of the word join
--SELECT * FROM customers inner join orders on customers.customerid = orders.customerid -- everything matching
--SELECT * FROM customers full join  orders on customers.customerid = orders.customerid -- all 
--SELECT * FROM customers left join  orders on customers.customerid = orders.customerid -- care about customers only
--SELECT * FROM customers right join orders on customers.customerid = orders.customerid -- care about orders only

select * from customers full join  orders on customers.customerid = orders.customerid 
order by customers.customerid
--insert into orders (create_time,productionname,customerid) values ('2022-10-22','iphone',5)

update customers set name='damian' where customerid =2

select * from customers order by customer.customerid

