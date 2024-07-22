# config/routes.rb

Rails.application.routes.draw do
  namespace :api do
    resources :metrics, only: [:index, :create]
  end
end
