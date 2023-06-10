DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS sub_categories CASCADE;
DROP TABLE IF EXISTS income CASCADE;
DROP TABLE IF EXISTS budgets CASCADE;
DROP TABLE IF EXISTS expenses CASCADE;
DROP TABLE IF EXISTS savings CASCADE;
DROP TABLE IF EXISTS debt_payments CASCADE;
DROP TABLE IF EXISTS debt_goals CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  nickname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);


CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category VARCHAR(255) NOT NULL
);


CREATE TABLE sub_categories (
  id SERIAL PRIMARY KEY NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  sub_category VARCHAR(255) NOT NULL
);


CREATE TABLE income (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  income_date DATE NOT NULL,
  amount INTEGER NOT NULL
);


CREATE TABLE budgets (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  budget_amount INTEGER NOT NULL, 
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  total_spent INTEGER NOT NULL DEFAULT 0,
  updated_at DATE NOT NULL,
  budget_reached BOOLEAN NOT NULL DEFAULT FALSE
);


CREATE TABLE expenses (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  expense_date DATE NOT NULL,
  amount INTEGER NOT NULL,
  budget_id INTEGER REFERENCES budgets(id) ON DELETE CASCADE,
  sub_category_id INTEGER REFERENCES sub_categories(id) ON DELETE CASCADE
);

CREATE TABLE savings (
  id SERIAL PRIMARY KEY NOT NULL,
  saving_name VARCHAR(255) NOT NULL,
  goal_amount INTEGER NOT NULL, 
  current_amount INTEGER NOT NULL, 
  finished BOOLEAN NOT NULL DEFAULT FALSE,
  date_created DATE NOT NULL,
  date_finished DATE NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE debt_goals (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  initial_amount INTEGER NOT NULL,
  amount_left INTEGER NOT NULL,
  interest_rate DECIMAL NOT NULL,
  paid_off BOOLEAN DEFAULT FALSE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE debt_payments (
  id SERIAL PRIMARY KEY NOT NULL,
  amount INTEGER NOT NULL, 
  debt_goal_id INTEGER REFERENCES debt_goals(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);
