---
layout: post
title: Rails migration shortcuts you might not know of!
tags: rails db
---

These are definitely listed in the Rails guide, but I rarely see anyone use these so I wasn't aware they existed!

## Specifying modifiers

Type Modifiers are listed [here](https://guides.rubyonrails.org/active_record_migrations.html#column-modifiers). Things like, setting default values, null constraints, and character limits. Apparently, you can specify [some](https://guides.rubyonrails.org/active_record_migrations.html#passing-modifiers) of them in the generator command. 

Of course, they don't just TELL you which ones you can use 😩 that would be too easy. After searching for a long while I found [the source code](https://github.com/rails/rails/blob/main/railties/lib/rails/generators/generated_attribute.rb) and I _think_ these are the only currently supported modifiers:

-  `limit`: Sets the maximum number of characters for a string column and the maximum number of bytes for string/text/binary/integer columns.
-  `precision`: Specifies the precision for decimal/numeric/datetime/time columns.
-  `scale`: Specifies the scale for the decimal and numeric columns, representing the number of digits after the decimal point. 
-  `polymorphic`: When generating with [`references`](https://guides.rubyonrails.org/active_record_migrations.html#references), this option will create two columns which can be used for polymorphic associations: `<column_name>_type` and `<column_name>_id`.

To specify these modifiers, you need to pass values enclosed in curly braces after the field type like this:

### Limit:
```bash
rails g migration AddNameToUsers name:string{40}
```

### Precision and Scale:
```bash
rails g migrationAddAmountToProducts amount:decimal{10.2}
```

You must set both precision and scale at once.

### Polymorphic

```rb
rails g migration add_supplier_to_products supplier:references{polymorphic}
```


## Specifying indexes

A third value can be specified using another `:` after the column name and type, to configure the index of the column. This could also be the second option if the column type is a `String`.

`:index`: will just add an index

```rb
  add_column :products, :amount, :string
  add_index :products, :amount
```

`:uniq`: will add `unique: true` in the migration.

## Creating join tables
> Migration names containing JoinTable will generate join tables for use with
has_and_belongs_to_many associations.


```bash
rails g migration CreateJoinTableCustomerProduct customer product
```

will create the migration:

```rb
def change
  create_join_table :customers, :products do |t|
    # t.index [:customer_id, :product_id]
    # t.index [:product_id, :customer_id]
  end
end
```

Nice.
