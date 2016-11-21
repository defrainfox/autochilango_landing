# topfloor.rb
require 'sinatra/partial'
require 'sinatra/content_for'
require 'sinatra'
require 'haml'

class Autochilango < Sinatra::Base
	helpers do
	  def partial(page, options={})
	    haml page.to_sym, options.merge!(:layout => false)
	  end
	end

	get '/' do
		haml :home
	end
	
end