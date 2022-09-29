import json
import requests

Base_URL = "https://fakestoreapi.com"

# Gett all product
# All_Product = requests.get(f"{Base_URL}/products")
# print(All_Product)
# for product in All_Product.json():
#     # print(product)
#     print(f"{product['title']}")
#
# Gett Single product
# single_Product = requests.get(f"{Base_URL}/products/5")
# print(single_Product.json())

# Limit product
# limit = {"limit":4,"sort":"desc"}
# Limit_Product = requests.get(f"{Base_URL}/products/",params=limit)
# print(Limit_Product.json())


# Gett all product categories
# All_Product_categories = requests.get(f"{Base_URL}/products/categories")
# print(All_Product_categories.json())

new_product = {
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}

# Product_post = requests.post(f"{Base_URL}/products",json=new_product)
# print(Product_post.json())

headers = {
    "Content-type":"application/json"
}

# Product_post = requests.post(f"{Base_URL}/products",data=json.dumps(new_product),headers=headers)
# print(Product_post.json())


#Update a product
# Product_post = requests.put(f"{Base_URL}/products/2",data=json.dumps(new_product),headers=headers)
# print(Product_post.json())

#Update a product
Product_post = requests.delete(f"{Base_URL}/products/2")
print(Product_post.json())