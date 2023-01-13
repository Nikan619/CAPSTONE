class DataController < ApplicationController


    def index
        doc = HTTParty.get("https://api.propublica.org/congress/v1/116/senate/members.json", headers:{'X-API-Key': 'uiJnvK5xCwxGSXpNjnh7YI18xq7CI0ybZ3Z19SJ8'})
        if response 
           render json: doc["results"][0]["members"]
           else
          render json: doc, status: 403
           end
            end
    end





