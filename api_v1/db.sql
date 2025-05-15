DROP TABLE IF EXISTS color CASCADE;
CREATE TABLE color
(
    id  bigserial NOT NULL,
    name text,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
    deleted_by bigint,
    active boolean DEFAULT TRUE,
    CONSTRAINT color_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS employee CASCADE;
CREATE TABLE employee
(
    id  bigserial NOT NULL,
    name text,
    age int,
    salary int,
    address text,
    position text,
    status text,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
    deleted_by bigint,
    active boolean DEFAULT TRUE,
    CONSTRAINT employee_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS product CASCADE;
CREATE TABLE product
(
    id  bigserial NOT NULL,
    name text,
    short_name text,
    code text,
    description text,
    color_id bigint,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
    deleted_by bigint,
    active boolean DEFAULT TRUE,
    CONSTRAINT product_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS "order" CASCADE;
CREATE TABLE "order"
(
    id  bigserial NOT NULL,
    employee_id bigint,
    total_amount int,
    delivery_address text,
    payment_status text,
    comment text,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
    deleted_by bigint,
    active boolean DEFAULT TRUE,
    CONSTRAINT product_order PRIMARY KEY (id)
);

DROP TABLE IF EXISTS "order_detail" CASCADE;
CREATE TABLE "order_detail"
(
    id  bigserial NOT NULL,
    order_id bigint,
    product_id bigint,
    price int,
    quantity int,
    amount int,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
    deleted_by bigint,
    active boolean DEFAULT TRUE,
    CONSTRAINT product_order_detail PRIMARY KEY (id)
);

DROP TABLE IF EXISTS "customer" CASCADE;
CREATE TABLE "customer"
(
    id  bigserial NOT NULL,
    name text,
    company_name text,
    address text,
    description text,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    created_by bigint,
    modified_at timestamp with time zone,
    modified_by bigint,
    deleted_at timestamp with time zone,
    deleted_by bigint,
    active boolean DEFAULT TRUE,
    CONSTRAINT product_customer PRIMARY KEY (id)
);

