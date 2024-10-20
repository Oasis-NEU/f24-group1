import os
from supabase import create_client, Client
from dotenv import load_dotenv
import json

load_dotenv()

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")

supabase: Client = create_client(url, key)

response = supabase.table("dishes").select("dish_id, dish_name, dish_description").neq("dish_description","null").execute()

