class StatementController < ApplicationController


    skip_before_action :authorize
    def index
        doc = HTTParty.get( "https://api.propublica.org/congress/v1/statements/latest.json", headers:{'X-API-Key': 'uiJnvK5xCwxGSXpNjnh7YI18xq7CI0ybZ3Z19SJ8'})
        if response 
           render json: doc["results"]
           else
          render json: doc, status: 403
           end
            end


          def search 
         
            query = params[:query]
            doc = HTTParty.get("https://api.propublica.org/congress/v1/statements/search.json?query=#{query}",headers:{'X-API-Key': 'uiJnvK5xCwxGSXpNjnh7YI18xq7CI0ybZ3Z19SJ8'})
            if response 
                render json: doc["results"]
                else
               render json: doc, status: 403
                end
                 end

end
