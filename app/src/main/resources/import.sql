insert into products (name, description, sku, brand, manufacture_date, price, units) values ('Curabitur', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'ZXC123', 'Capsule Corp', '2020-10-15', 50.00, 40);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('semper', 'Fusce at leo sit amet lorem mattis ullamcorper.', 'XCV234', 'Capsule Corp', '2023-11-15', 10.00, 30);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('consequat', 'Mauris mattis egestas purus, at viverra elit aliquam sed.', 'CVB445', 'Red Ribbon', '2024-05-11', 500.00, 5);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('suscipit', 'Nulla id gravida arcu. Cras quis facilisis nibh.', 'MNB765', 'Capsule Corp', '2009-09-15', 150.00, 9);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('Vivamus', 'Praesent ut felis sollicitudin, convallis lacus et, feugiat orci.', 'YTR654', 'Red Ribbon', '2021-11-11',360.00, 109);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('convallis', 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.', 'KJH987', 'Capsule Corp', '2022-12-25', 540.00, 90);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('lorem', 'Maecenas imperdiet nisi ut mauris egestas, in varius metus viverra.', 'IUY987', 'Capsule Corp', '2020-08-02', 755.00, 60);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('lectus', 'Ut aliquet metus a egestas finibus.', 'VFR098', 'Red Ribbon', '2011-01-10', 58.00, 77);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('molestie', 'Praesent ut felis sollicitudin, convallis lacus et, feugiat orci.', 'MJU078', 'Red Ribbon', '2012-10-10', 31.00, 67);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('Etiam', 'Nunc mattis porta lorem in dignissim.', 'XSW543', 'Capsule Corp', '2025-01-10', 65.00, 54);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('ultricies', 'Vestibulum ornare, est non tempor bibendum, risus dui euismod purus, sit amet congue enim urna et mauris.', 'HGF854', 'Red Ribbon', '2020-10-17', 70.00, 15);
insert into products (name, description, sku, brand, manufacture_date, price, units) values ('amet', 'Morbi a viverra mi, sit amet pulvinar arcu. ', 'LKJ345', 'Red Ribbon', '2024-10-18', 99.00, 44);

insert into user_system (name, lastname, position, area, email, password) values ('Admin', 'consect', 'Master', 'Europe', 'vitae@finibus.com', '$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS');
insert into user_system (name, lastname, position, area, email, password) values ('Giru', 'adipiscing', 'Java developer', 'Latam', 'quis@ligula.com', '$2y$10$nk.HJH8EfsWWNe84g4qSwu7cBbL3EMFTlIhoVI65j6mlf1KqZwspG');
insert into user_system (name, lastname, position, area, email, password) values ('Bils', 'sapien', 'Python developer', 'Asia', 'orci@neque.jp', '$2y$10$nk.HJH8EfsWWNe84g4qSwu7cBbL3EMFTlIhoVI65j6mlf1KqZwspG');
insert into user_system (name, lastname, position, area, email, password) values ('ZhenLong', 'Nullam', 'Database manager', 'Asia', 'non@ipsum.jp', '$2y$10$nk.HJH8EfsWWNe84g4qSwu7cBbL3EMFTlIhoVI65j6mlf1KqZwspG');
insert into user_system (name, lastname, position, area, email, password) values ('Boo', 'condimentum', 'Sales manager', 'USA', 'gravida@lacus.com', '$2y$10$nk.HJH8EfsWWNe84g4qSwu7cBbL3EMFTlIhoVI65j6mlf1KqZwspG');

insert into roles (name) values ('ROLE_ADMIN');
insert into roles (name) values ('ROLE_USER');

insert into user_roles (user_id, role_id) values (1, 1);
insert into user_roles (user_id, role_id) values (2, 1);
insert into user_roles (user_id, role_id) values (2, 2);
insert into user_roles (user_id, role_id) values (3, 2);
insert into user_roles (user_id, role_id) values (4, 2);
insert into user_roles (user_id, role_id) values (5, 2);
