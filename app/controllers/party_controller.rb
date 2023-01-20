class PartyController < ApplicationController


    skip_before_action :authorize

def create 
    party = Party.create(party_params)
    render json: party, status: :created

end



def partyaffiliation 
    user = User.find(params[:id])
    render json: user.party, status: :ok
end



private

def party_params
    params.permit(:user_id,:affiliation)
end
end
