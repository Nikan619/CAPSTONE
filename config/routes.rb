Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/senators", to: "data#index"


get "/house", to: "house#index"

  
  
end
