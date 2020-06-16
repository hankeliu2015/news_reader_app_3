Rails.application.routes.draw do
  resources :likes
  resources :stories
  resources :comments
  # resources :posts
  devise_for :users
  get 'welcome/home'
  get '/app', to: 'welcome#app', as: 'app'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'welcome#home'

  # devise_scope :user do
  #   root to: "devise/sessions#new"
  # end

  namespace :api do
    namespace :v1 do
      resources :posts, :current_user
    end
  end

end
