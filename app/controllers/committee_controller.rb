class CommitteeController < ApplicationController
    def index
        query = params[:query]
        doc = HTTParty.get("https://api.propublica.org/congress/v1/115/#{query}/committees.json", headers:{'X-API-Key': 'uiJnvK5xCwxGSXpNjnh7YI18xq7CI0ybZ3Z19SJ8'})
        if response 
           render json: doc["results"]
           else
          render json: doc, status: 403
           end
            end
         

            def specific
               
                query = params[:query]
                query1 = params[:query1]
                doc = HTTParty.get("https://api.propublica.org/congress/v1/115/#{query}/committees/#{query1}.json", headers:{'X-API-Key': 'uiJnvK5xCwxGSXpNjnh7YI18xq7CI0ybZ3Z19SJ8'})
                if response 
                   render json: doc["results"][0]
                   else
                  render json: doc, status: 403
                   end
                    end

end
