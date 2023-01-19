Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "/senators", to: "data#index"

post "signup", to: "users#create"
get "/me", to: "users#show"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
get "/house", to: "house#index"

get "/bills", to: "bills#index"

get "/party", to: "party#index"

post "/userparty", to: "party#create"

  
  
end
