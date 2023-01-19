class PartyController < ApplicationController


    skip_before_action :authorize

def create 
    party = Party.create(party_params)
    render json: party, status: :created

end




private

def party_params
    params.permit(:user_id,:affiliation)
end
end
