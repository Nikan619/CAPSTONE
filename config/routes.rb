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


get "/party/:id", to: "party#partyaffiliation"

  get '/statements' , to: "statement#index"

  get '/searchstatements' , to: "statement#search"


  get "/nominations" , to: "nominations#index"

  get 'specificnomination', to:"nominations#specific"


  get 'committee', to:"committee#index"

  get 'specificcommittee', to:"committee#specific"
  
end
