import os
from supabase import create_client, Client
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer


load_dotenv()

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

supabase: Client = create_client(url, key)

response = supabase.table("dishes").select("dish_id, dish_name, dish_description").execute()

response2 = supabase.table("dishes_embeddings").select("*").execute()

print(response2.data)


print(response.data[0]["dish_id"])

print(len(response.data))
embedder = SentenceTransformer("avsolatorio/GIST-small-Embedding-v0")

for (i, dish) in enumerate(response.data):
    dish_id = int(dish["dish_id"])
    dish_name = dish["dish_name"]
    dish_description = dish["dish_description"]

    if (dish_description is None):
        dish_description = ""


    embedding = embedder.encode(dish_name + ": " + dish_description)

    response = supabase.table("dishes_embeddings").insert({"embedding_id" : i, "dish_id" : dish_id, "embeddings": embedding.tolist()}).execute()
    print(response)


    print(f"Updated dish {dish_name} with id {dish_id}")

