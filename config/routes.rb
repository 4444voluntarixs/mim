Rails.application.routes.draw do
    scope "(:locale)", locale: /en|pt|fr|es/ do
      root to: 'creatives#index'
    end
end



