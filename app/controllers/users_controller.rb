class UsersController < ApplicationController
    skip_before_action :authorize

    def create
        
        user = User.create!(user_params)
        if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
        else
            render json: {error: user.errors}, status: :bad_request
        end
    end

    def show 
        render json: @current_user
    end




    private

    def user_params
        params.permit(:username,:password)
    end
end
